const moreBtnmark6Fn = () => {
    const maxLen = 8;
    const $target = $('#mark6');
    const $content = $target.find('.content');
    const items = $content.find('.item');
    const hasMore = items.length > maxLen;
    const $html = $('html');
    const btnName = 'moreBtn-mark6';

    const removeClassFn = () => {
        console.log(1);
        $html.removeClass('has-more-mark6');
        $content.height('auto');
        $('#' + btnName).hide();
    };


    if (hasMore) {
        const height = items.eq(0).outerHeight();
        $html.addClass('has-more-mark6');
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

moreBtnmark6Fn();