// const rotBoxInitRot = (targetName) => {
//     let mySwiper;
//     const targetName = targetName ? targetName : '#rotBox1';

//     if (isPc) {
//         mySwiper = new Swiper(targetName + ' .rotBox-container', {
//             // loop: true,
//             // freeMode: true,
//             watchOverflow: true,
//             slidesPerView: 3,
//             slidesPerGroup: 3,
//             slidesPerColumn: 2,
//             spaceBetween: 20,
//             pagination: {
//                 el: targetName + ' .rot-pagination',
//                 clickable: true,
//             },
//             navigation: {
//                 nextEl: targetName + ' .rot-next',
//                 prevEl: targetName + ' .rot-prev',
//             },
//         });
//     } else {
//         mySwiper = new Swiper(targetName + ' .rotBox-container', {
//             // loop: true,
//             // freeMode: true,
//             watchOverflow: true,
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//             slidesPerColumn: 2,
//             spaceBetween: 0,
//             pagination: {
//                 el: targetName + ' .rot-pagination',
//                 clickable: true,
//             },
//             navigation: {
//                 nextEl: targetName + ' .rot-next',
//                 prevEl: targetName + ' .rot-prev',
//             },
//         });
//     }
// };

const itemListLeftandRight = ({ cid, cnt, pgnum, targetName }) => {
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
                // $('#addData' + cid).html('暂无更多').addClass('disable');
                $(targetName + ' .isLoadingTxt')
                    .html(`
                        <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                        class="link external" target="_blank">暂无内容</a>
                    `);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        index++;
                        // const aBegin = tp.a.start(e, index);
                        // const aEnd = tp.a.end(e, index);

                        /* 
                        <div class="item">
                            <div class="pic"> <a href="http://www.xiongan.gov.cn/2018-10/21/c_129976418.htm" target="_blank">
                                <img src="http://www.xiongan.gov.cn/titlepic/112359/1123591107_1540122702521_title0h.png" alt="封昌红：&ldquo;双轮驱动&rdquo;助雄安新区打造有温度的典范之城" />
                                </a> </div>
                            <div class="item-text-box">
                                <div class="title"> <a href="http://www.xiongan.gov.cn/2018-10/21/c_129976418.htm" target="_blank"> 封昌红：“双轮驱动”助雄安新区打造有温度的典范之城 </a> </div>
                                <p class="abs"> 封昌红表示，此次工业设计周的举办就是为了把国际上最为先进的工业设计理念带到河北，带到雄安新区来，促进河北和雄安新区制造工业的转型升级。<a href="#">[详情]</a> </p>
                            </div>
                        </div> 
                        */
                        dom += `
                            <div class="item" data-index="${index}" data-docid="${e.DocID}"${e.PicLinks ? '' : 'class="noPic"'}>
                                ${tp.picNoImgNoPicDom(e, index)}
                                <div class="item-text-box">
                                    <div class="title">
                                        ${tp.title(e, index)}
                                    </div>
                                    ${tp.abs(e, index)}
                                    ${tp.a.start(e, index)}
                                        <span class="m">[详情]</span>
                                    ${tp.a.end(e, index)}
                                </div>
                            </div>
                        `;
                    });
                }
            }

            // $('.isLoadingTxt')
            //     .html('')
            //     .removeClass('isLoadingTxt');

            if (targetName) {
                $(targetName + ' [data-add="1"]')
                    .html(`
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
                    ${dom}
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
                `);
                // rotBoxInitRot(targetName);
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
                $(targetName + ' .isLoadingTxt').html(thrownError);
            }
        },
    });
};