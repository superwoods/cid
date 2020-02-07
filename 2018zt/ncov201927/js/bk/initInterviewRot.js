const initInterviewRot = () => {
    console.log('--> initInterviewRot.js');

    const $interviewRot = $('#interview-rot');

    const getRotImgs = (() => {
        let srcs = {};
        const $imgs = $interviewRot.find('img');
        $imgs.map((i, e) => {
            srcs[i] = e.src;
        });
        return srcs;
    })();

    // const setPagination = () => {
    //     const $p = $('.interview-rot-pagination');
    //     const $pBox = $('.interview-rot-pagination-box');
    //     const pHeight = $p.outerHeight();
    //     const pBoxHeight = $pBox.outerHeight();
    //     console.log(pHeight, pBoxHeight);
    // };
    const $interviewPagination = $('.interview-rot-pagination');
    const interviewRot = new Swiper($interviewRot, {
        watchOverflow: true,
        loop: 1, //isDev ? false : true,
        navigation: {
            nextEl: '.interview-rot-next',
            prevEl: '.interview-rot-prev',
        },
        pagination: {
            clickable: true,
            el: '.interview-rot-pagination',
        },
        on: {
            imagesReady: function () {
                const $bullet = $interviewRot.find('.swiper-pagination-bullet');
                $bullet.map((i, e) => {
                    $(e).html(`
                        <img src="${getRotImgs[i]}">
                    `);
                });
                $('.interview-rot-ctlbox').fadeIn(1200);
            },
            slideChange: function () {
                let y = 0;

                const bulletOuterHeight = 110;
                const num = this.realIndex;
                const max = this.slides.length - 2;

                if (num == 1 || num <= 0 || num > max) {
                    y = 0;
                } else if (num <= 3 && max != 3) {
                    y = bulletOuterHeight * num;
                } else {
                    y = bulletOuterHeight * (max - 3);
                }

                // console.log(max, num, y);

                $interviewPagination.css({
                    'transform': `translate(-50%, -${y}px)`
                });
            },
        }
    });

};
initInterviewRot();