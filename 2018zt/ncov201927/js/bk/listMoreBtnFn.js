const listMoreBtnFn = () => {
    console.log('----> listMoreBtnFn.js');

    const $target = $('.moreBtn');
    const hasMoreBtn = $target.length > 0;
    console.log('hasMoreBtn:', hasMoreBtn);

    if (hasMoreBtn) {
        const $lis = $target.prev('.list').find('li');
        const liLen = $lis.length;
        console.log(liLen);

        let hasLis = liLen > 0;

        const noMoreFn = () => {
            $target.addClass('disable').text('暂无更多');
        };
        const hideLiFn = (target, num) => {
            target.eq(num).hide();
        };
        const btnShowFn = () => {
            $target.on('click', () => {
                $lis.show();
                noMoreFn();
            });
        };
        const ctlLisFn = (num) => {
            hasLis = liLen > num;
            if (hasLis) {
                for (let i = num; i <= liLen; i++) {
                    hideLiFn($lis, i);
                }
                btnShowFn();
            } else {
                noMoreFn();
            }
        };

        if (hasLis) {
            let showMax = $target.attr('data-max');
            if (showMax == undefined) {
                showMax = 10;
            } else {
                showMax -= 0;
            }
            console.log(showMax);
            ctlLisFn(showMax);
        } else {
            noMoreFn();
        }
    }
};
listMoreBtnFn();