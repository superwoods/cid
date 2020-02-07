
const initRotBigRound = (boxName) => {
    let initRotBigRoundSwiper = false;
    if (initRotBigRoundSwiper == false) {
        // console.log('initRotBigRound boxName:', boxName);
        initRotBigRoundSwiper = new Swiper(boxName + ' .rotRound', {
            effect: 'coverflow',
            loop: true,
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 50,
                modifier: 2,
                slideShadows: false,
            },
            pagination: {
                el: `${boxName} .rotRound-pagination`,
            },
            navigation: {
                nextEl: `${boxName} .rotRound-next`,
                prevEl: `${boxName} .rotRound-prev`,
            },
        });
    }
};


const rotBigRound = ({ cid, cnt, pgnum, boxName, cbFn }) => {

    // const pgnum = 1;
    // const cnt = 10;

    console.log(`http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1`);


    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
        data: {
            // nid: isDev ? 11207721 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1,
        },
        dataType: 'JSONP',
        success: (data) => {
            // console.log(data);
            let dom1 = '';

            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                    class="link external" target="_blank">暂无内容</a>
                `;
                $(boxName + ' .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        dom1 += `
                            <div class="swiper-slide item" data-docid="${e.DocID}">
                                ${tp.pic(e, i)}
                                <div class="title">
                                    <div class="text">
                                        ${tp.title(e, i)}
                                    </div>
                                </div>
                            </div>`;
                    });
                }
            }

            if (dom1) {
                $(boxName + ' .swiper-wrapper').html(dom1);
                initRotBigRound(boxName);
            } else {
                $(boxName).hide();
            }

            if (cbFn) {
                cbFn();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log('error:', xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $(boxName + ' .isNoContent').html(thrownError);
            }
        },
    });
};

