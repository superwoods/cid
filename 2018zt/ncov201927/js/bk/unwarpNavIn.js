const unwarpNavInFn = () => {

    if (isPc == false) {
        const navInDom = $('.nav-in').html();
        $('.nav').html(navInDom);
    }
};

unwarpNavInFn();