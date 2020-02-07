console.log('--------------> index.js');

$(() => {

    const aAddClassFn = () => {
        const $as = $('a');
        console.log($as.length);
        $as.each((i, e) => {
            const $e = $(e);
            const isAdd = $e.attr('target') == '_blank';

            console.log(isAdd);

            if (isAdd) {
                $e.addClass('link external');
            }
        });


    };

    aAddClassFn();


    // let mainSrc = 'http://www.xiongan.gov.cn/2018zt/zbxa/';

    // if (isDev) {
    //     mainSrc = '/';
    // }

    // const rot = new Swiper('#rot', {
    //     watchOverflow: true,
    //     autoplay: isDev ? false : true,//可选选项，自动滑动
    //     loop: true,
    //     pagination: {
    //         el: '#rot .swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '#rot .swiper-button-next',
    //         prevEl: '#rot .swiper-button-prev',
    //     },
    // });

    // const rotBig = new Swiper('#rotBig', {
    //     watchOverflow: true,
    //     autoplay: false,
    //     loop: true,
    //     pagination: {
    //         el: '#rotBig .swiper-pagination',
    //         clickable: true,
    //     },
    //     navigation: {
    //         nextEl: '#rotBig .swiper-button-next',
    //         prevEl: '#rotBig .swiper-button-prev',
    //     },
    // });

    // const rou = new Swiper('#topTitle-rot', {
    //     slidesPerView: 'auto',
    //     // slidesPerGroup: 3,
    //     wrapperClass: 'topTitle-rot-wrapper',
    //     slideClass: 'topTitle-rot-slide',
    //     watchOverflow: true,
    //     speed: 3000,
    //     autoplay: {
    //         delay: 3000,
    //         // stopOnLastSlide: false,
    //         disableOnInteraction: false,
    //     }
    // });

    // import './mobile.js'

    // import './autoHide.js'

    // import './devShowTips.js'

    const addGlleryThumbs = () => {
        const $target = $('.gallery-top');
        const $imgs = $target.find('.pic');
        let temp = '';
        $imgs.each((i, e) => {
            temp += `<div class="swiper-slide item"><div class="pic">`;

            const $e = $(e);
            // console.log(i, $e);

            const $img = $e.find('img');
            const src = $img.attr('src');

            if (src) {
                temp += `<img src="${src}">`;
            }

            temp += `</div></div>`;
        });

        $target.after(`
            <div class="swiper-container gallery-thumbs">
                <div class="swiper-wrapper">
                    ${temp}
                </div>
            </div>
        `);

    };

    if (isPc) {
        addGlleryThumbs();
    }


    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        loop: true,
        freeMode: true,
        loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
    });

    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: isPc ? 10 : 0,
        loop: true,
        loopedSlides: isPc ? 5 : 0, //looped slides should be the same
        navigation: {
            nextEl: '.gallery-top .swiper-button-next',
            prevEl: '.gallery-top .swiper-button-prev',
        },
        thumbs: {
            swiper: isPc ? galleryThumbs : null,
        },
    });

});


@import './f7-app.js'