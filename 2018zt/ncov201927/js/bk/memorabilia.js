const memorabiliaFn = () => {
    // @Moo 2018-01-12 16:17
    // var href = window.location.href;
    // var isDev = (/dev/.test(href) || /localhost/.test(href));


    var memorabilia = {};
    //初始化
    memorabilia.slidesPerView = 6;
    memorabilia.activeIndex = -1;
    memorabilia.autoplay = 5000;
    memorabilia.slides = $('.memorabilia-box .swiper-slide');

    memorabilia.activeIndexBefore = memorabilia.slidesPerView / 2 - 1;
    memorabilia.activeIndexAfter = memorabilia.slides.length - (memorabilia.slidesPerView / 2);

    //设置区块样式
    memorabilia.slides.each(function () {
        // $(this).addClass('style-'+(memorabilia.slides.index(this)%6));
        $(this).addClass('swiper-no-swiping');
    });
    memorabilia.slides.on('click', function () {
        var _index = $(this).index();
        clearInterval(memorabilia.setInterval);
        memorabilia.slides.eq(memorabilia.activeIndex).removeClass('active');
        memorabilia.activeIndex = _index;
        memorabilia.swiper.slideTo(memorabilia.activeIndex - 2, 500, false);
        memorabilia.slides.eq(memorabilia.activeIndex).addClass('active');
    });
    //初始化Swiper
    memorabilia.swiper = new Swiper('.memorabilia-container', {
        onSlideChangeEnd: function (_swiper) {
            memorabilia.arrow.attr('disabled', false);
        },
        slidesPerView: memorabilia.slidesPerView,
        spaceBetween: 10
    });
    //切换到首尾
    memorabilia.slideFirst = function () {
        memorabilia.activeIndex = 0;
        memorabilia.swiper.slideTo(memorabilia.activeIndex, 500, false);
    };
    memorabilia.slideLast = function () {
        memorabilia.activeIndex = memorabilia.slides.length - 1;
        memorabilia.swiper.slideTo(memorabilia.activeIndex, 500, false);
    };
    //切换到第一项方法注册到父页面
    // if (!isDev) {
    //     if (window.parent.pubs) {
    //         window.parent.pubs.memorabiliaSlideFirst = function () {
    //             memorabilia.slideFirst();
    //         };
    //     }
    // }
    //设置前后切换按钮
    memorabilia.arrow = $('.memorabilia-box .memorabilia-arrow');

    memorabilia.arrow.on('click', function () {
        var _slide = $(this).attr('data-slide');
        clearInterval(memorabilia.setInterval);
        memorabilia.changeSlide(_slide);
        return false;
    });

    memorabilia.changeSlide = function (_type) {
        _type = _type || 'next';
        memorabilia.slides.eq(memorabilia.activeIndex).removeClass('active');
        memorabilia.arrow.attr('disabled', true);
        if (_type == 'next') {
            if (memorabilia.activeIndex < memorabilia.slides.length - 1) {
                memorabilia.activeIndex++;
                if (memorabilia.activeIndex > memorabilia.activeIndexBefore && memorabilia.activeIndex < memorabilia.activeIndexAfter) {
                    memorabilia.swiper.slideNext();
                } else {
                    memorabilia.arrow.attr('disabled', false);
                }
            } else {
                memorabilia.slideFirst();
            }
        } else {
            if (memorabilia.activeIndex > 0) {
                memorabilia.activeIndex--;
                if (memorabilia.activeIndex > memorabilia.activeIndexBefore - 1 && memorabilia.activeIndex < memorabilia.activeIndexAfter - 1) {
                    memorabilia.swiper.slidePrev();
                } else {
                    memorabilia.arrow.attr('disabled', false);
                }
            } else {
                // memorabilia.slideLast();
            }
        }
        memorabilia.slides.eq(memorabilia.activeIndex).addClass('active');
    };

    memorabilia.changeSlide();
    memorabilia.setInterval = window.setInterval(function () {
        memorabilia.changeSlide();
    }, memorabilia.autoplay);

    //设置音频
    // memorabilia.btnAudio = null;
    // // memorabilia.audio=new Audio();
    // // memorabilia.audio.onended=
    // memorabilia.audioPause = function () {
    //     memorabilia.btnAudio && memorabilia.btnAudio.removeClass('play');
    //     // memorabilia.audio.pause();
    // };
    // memorabilia.btnAudios = $('.memorabilia-box .btn-audio');
    // memorabilia.btnAudios.on('click', function () {
    //     var _el = $(this);
    //     var _url = _el.attr('data-url');
    //     if (_el.hasClass('play')) {
    //         memorabilia.mediaClose();
    //     } else {
    //         if (memorabilia.btnAudio) {
    //             memorabilia.mediaClose();
    //         }
    //         // memorabilia.audio.src=_url;
    //         // memorabilia.audio.play();
    //         if (!isDev) {
    //             window.parent.pubs && window.parent.pubs.pubPlayAudio && window.parent.pubs.pubPlayAudio(_el.attr('data-url'), function () { memorabilia.audioPause() });
    //         }
    //         _el.addClass('play');
    //         memorabilia.btnAudio = _el;
    //     }
    // });

    //设置视频
    // memorabilia.medias=$('.memorabilia-box .media');
    // memorabilia.medias.on('click',function(){
    //     var _el=$(this);
    //     memorabilia.mediaClose();
    //     window.parent.pubs&&window.parent.pubs.pubPlayVideo&&window.parent.pubs.pubPlayVideo(_el.attr('data-url'));
    // });
    // memorabilia.videoClose = function () { };
    // //关闭音频视频
    // memorabilia.mediaClose = function () {
    //     // window.parent.pubs&&window.parent.pubs.pubCloseAudio&&window.parent.pubs.pubCloseAudio();
    //     // window.parent.pubs&&window.parent.pubs.pubCloseVideo&&window.parent.pubs.pubCloseVideo();
    //     window.mediaClose && window.mediaClose();
    //     memorabilia.audioPause();
    //     memorabilia.videoClose();
    // }
    window.memorabilia = window.memorabilia || memorabilia;
}