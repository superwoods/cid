const moreBtnMark2Fn = () => {
    const maxLen = 4;
    const $target = $('#mark2');
    const $content = $target.find('.content');
    const items = $content.find('.item');
    const hasMore = items.length > maxLen;
    const $html = $('html');
    const btnName = 'moreBtn-mark2';

    const removeClassFn = () => {
        console.log(1);
        $html.removeClass('has-more-mark2');
        $content.height('auto');
        $('#' + btnName).hide();
    };


    if (hasMore) {
        const height = items.eq(0).outerHeight();
        $html.addClass('has-more-mark2');
        $content.height(height * maxLen).after(`
            <div class="more-btn" id="${btnName}">更多</div>
        `);
        $('#' + btnName).on('click', (e) => {
            removeClassFn();
        });
        // console.log('hasMore', height, hasMore, items);
    } else {
        removeClassFn();
    }

    // console.log('hasMore', height, hasMore, items);
    // window.test = items;
};

moreBtnMark2Fn();