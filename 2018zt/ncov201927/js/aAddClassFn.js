const aAddClassFn = () => {
    const $as = $('a');
    // console.log($as.length);
    $as.each((i, e) => {
        const $e = $(e);
        const isAdd = $e.attr('target') == '_blank';
        // console.log(isAdd);
        if (isAdd) {
            $e.addClass('link external');
        }
    });
};