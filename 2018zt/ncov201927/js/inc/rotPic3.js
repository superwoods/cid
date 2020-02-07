let rotPic3_swiper;

const rotPic3_rotFn = (targetName, cnt) => {
    // rotPic3_rotFn(targetName)
    rotPic3_swiper = new Swiper(targetName + ' .swiper-container', {
        watchOverflow: true,
        autoplay: false,
        slidesPerView: isPc ? 3 : 1,
        slidesPerColumn: isPc ? 1 : cnt,
        spaceBetween: 9,
        pagination: {
            el: targetName + ' .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: targetName + ' .swiper-button-next',
            prevEl: targetName + ' .swiper-button-prev',
        },
    });
};

const rotPic3 = ({
    cid,
    cnt,
    pgnum,
    targetName,
}) => {
    // console.log('----> rotPic3.js');
    /*
    cid: cid['“疫”图速览'].cid,
    cnt: 9,
    pgnum: 1,
    targetName: '#rotPic3',
    rotPic3_rotFn(targetName)
    */

    $.ajax({
        url: AJAX_url,
        data: {
            // nid: isDev ? 1120310 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1,
        },
        dataType: 'JSONP',
        success: (data) => {
            // console.log('----///----> rot3BoxNoPic:', cnt, data);
            let dom1 = '';
            if (data.status == '-1') {
                const msg = msgFn({ cid, pgnum, cnt });
                $(targetName + ' .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        dom1 += `
                            <div class="swiper-slide itemBox" data-docid="${e.DocID}">
                                ${tp.pic(e, i)}
                                <div class="title">
                                    <div class="text">
                                        ${tp.title(e, i)}
                                    </div>
                                </div>
                            </div>
                        `;
                        // ${tp.abs(e)}
                    });
                }
            }

            if (dom1) {
                $(targetName + ' .swiper-wrapper').html(dom1);
                rotPic3_rotFn(targetName, cnt);
            }
        },
        // error: function (xhr, ajaxOptions, thrownError) {
        //     console.log(xhr, ajaxOptions, thrownError);
        //     if (xhr.status == 404) {
        //         $(targetName + ' .isNoContent').html(thrownError);
        //     }
        // },
    });











};