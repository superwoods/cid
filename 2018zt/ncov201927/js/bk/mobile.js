
const unwarpNavInFn = () => {
    const navInDom = $('.nav-in').html();
    $('.nav').html(navInDom);

};

const mobileNav = () => {

    console.log('--> mobileNav.js');
    const $html = $('html');
    const btnBoxDom = $('.btn-box').html();
    const aLogo = $('.logo').parent('a').prop('outerHTML');

    $('body').append(`
            <div class="nav-mobile">
                ${aLogo}
                ${btnBoxDom}
                <div class="nav-off"></div>
            </div>
        `);

    $('.nav .btn-box')
        .on('click', () => {
            $html.addClass('nav-open');
            $html.removeClass('nav-off');
        });

    const navOff = () => {
        $html.removeClass('nav-open');
        $html.addClass('nav-off');
    };

    $('.nav-off').on('click', navOff);

    $('.nav-mobile').find('a').on('click', () => {
        navOff();
    });

    // $('.footer').prepend(`
    //     <img class="mob-qrcode mob-qrcode-blog" src="${mainSrc}bundle/mob-qrcode-blog.png">
    //     <img class="mob-qrcode mob-qrcode-wx" src="${mainSrc}bundle/mob-qrcode-wx.png">
    // `);
};