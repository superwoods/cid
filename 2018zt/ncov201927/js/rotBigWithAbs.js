const rotBigWithAbs_initRot = (targetName) => {
    // let mySwiper = false;
    // if (mySwiper == false) {

    // console.log('rotBoxInitRot targetName:', targetName);
    const mySwiper = new Swiper(targetName + ' .swiper-container', {
        loop: true,
        // freeMode: true,
        watchOverflow: true,
        // slidesPerView: 3,
        // slidesPerGroup: 3,
        // slidesPerColumn: 2,
        // spaceBetween: 20,
        pagination: {
            el: targetName + ' .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: targetName + ' .swiper-button-next',
            prevEl: targetName + ' .swiper-button-prev',
        },
    });
    // }
};

const rotBigWithAbs = ({ cid, cnt, pgnum, targetName, hideName }) => {
    console.log('----///------> rotBox() ', cid);

    let dom = '';
    // console.log('-------> cnt: ', cnt);
    // console.log('addMore:', pgnum);
    // console.log('ajax:', `http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1`);
    let index = 0;

    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
        data: {
            // nid: isDev ? 11203173 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1,
            // type: 'GET',
        },
        dataType: 'JSONP',
        success: (data) => {
            // console.log(data);
            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1"
                    class="link external" target="_blank">暂无内容</a>
                `;

                console.log(msg);

                $(targetName + ' .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        index++;
                        const aBegin = tp.a.start(e, index);
                        const aEnd = tp.a.end(e, index);
                        dom += `
                            <div class="swiper-slide item">
                                <li data-index="${index}" data-docid="${e.DocID}"${e.PicLinks ? '' : 'class="noPic"'}>
                                    ${tp.picNoImgNoPicDom(e, index)}
                                    <div class="title">
                                        <div class="text">
                                            ${tp.title(e, index)}
                                        </div>
                                    </div>
                                </li>
                                ${tp.abs(e, index)}
                            </div>
                        `;
                    });
                }
            }

            // $('.isLoadingTxt')
            //     .html('')
            //     .removeClass('isLoadingTxt');

            if (dom) {
                $(targetName + ' .swiper-wrapper')
                    .html(`
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
                    ${dom}
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
                `);
                rotBigWithAbs_initRot(targetName);
            } else {
                if (hideName) {
                    $(hideName).hide();
                }
            }
            // else {
            //     $(`#addDataListPos${cid}`)
            //         .append(`
            //         <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
            //         ${dom}
            //         <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
            //     `);
            // }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $(targetName + ' .isNoContent').html(thrownError);
            }
        },
    });
};