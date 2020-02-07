console.log('---> videoSrcAutoHideFn.js');
const videoSrcAutoHideFn = () => {
    const $targets = $('body').find('.videoSrc');

    $targets.each((i, e) => {
        const $e = $(e);
        const eTxtLen = $.trim($e.text()).length;
        console.log('e:', eTxtLen);
        if (eTxtLen <= 0) {
            $e.hide();
        }
    });
};

videoSrcAutoHideFn();