

// const loadDataListItem = ({ cid, cnt, pgnum, targetName }) => {
//     console.log('----------> loadDataListItem() ', cid);
//     console.log(!targetName);

//     let dom = '';
//     // console.log('-------> cnt: ', cnt);
//     // console.log('addMore:', pgnum);
//     // console.log('ajax:', `http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1`);
//     let index = 0;

//     $.ajax({
//         url: 'http://da.wa.news.cn/nodeart/page',
//         data: {
//             // nid: isDev ? 11207721 : cid, // 11203173
//             nid: cid,
//             pgnum: pgnum,
//             cnt: cnt,
//             tp: 1,
//             orderby: 1,
//             // type: 'GET',
//         },
//         dataType: 'JSONP',
//         success: (data) => {
//             // console.log(data);
//             if (data.status == '-1') {

//                 $('#addData' + cid).html('暂无更多').addClass('disable');

//                 $('.isNoContent' + cid)
//                     .html(`
//                         <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
//                         class="link external" target="_blank">暂无内容</a>
//                     `);
//             } else {
//                 if (data.data.list.length > 0) {
//                     data.data.list.map((e, i) => {
//                         index++;
//                         const aBegin = tp.a.start(e, index);
//                         const aEnd = tp.a.end(e, index);
//                         dom += `
//                         <li data-index="${index}" data-docid="${e.DocID}"${e.PicLinks ? '' : 'class="noPic"'}>
//                             <div class="text">
//                                 ${aBegin}
//                                     <div class="title">
//                                         ${e.Title ? `${e.Title}` : '暂无标题'}
//                                     </div>
//                                     ${tp.abs(e)}
//                                 ${aEnd}
//                             </div>
//                             ${tp.picNoImgNoPicDom(e, index)}
//                         </li>
//                         `;
//                     });
//                 }
//             }

//             $('.isLoading')
//                 .html('')
//                 .removeClass('isLoading');

//             if (targetName) {
//                 $(targetName)
//                     .html(`
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
//                     ${dom}
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
//                 `);
//             } else {
//                 $(`#addDataListPos${cid}`)
//                     .append(`
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
//                     ${dom}
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
//                 `);
//             }
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             console.log(xhr, ajaxOptions, thrownError);
//             if (xhr.status == 404) {
//                 $('.isLoading').html(thrownError);
//             }
//         },
//     });
// };


// const loadDataListItem2 = ({ cid, cnt, pgnum, targetName }) => {
//     console.log('----------> loadDataListItem() ', cid);
//     console.log(!targetName);

//     let dom = '';
//     // console.log('-------> cnt: ', cnt);
//     // console.log('addMore:', pgnum);
//     // console.log('ajax:', `http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1`);
//     let index = 0;

//     $.ajax({
//         url: 'http://da.wa.news.cn/nodeart/page',
//         data: {
//             // nid: isDev ? 11203173 : cid, // 11203173
//             nid: cid,
//             pgnum: pgnum,
//             cnt: cnt,
//             tp: 1,
//             orderby: 1,
//             // type: 'GET',
//         },
//         dataType: 'JSONP',
//         success: (data) => {
//             // console.log(data);
//             if (data.status == '-1') {
//                 // $('#addData' + cid).html('暂无更多').addClass('disable');
//                 $('.isNoContent' + cid)
//                     .html(`
//                         <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
//                         class="link external" target="_blank">暂无内容</a>
//                     `);
//             } else {
//                 if (data.data.list.length > 0) {
//                     data.data.list.map((e, i) => {
//                         index++;
//                         const aBegin = tp.a.start(e, index);
//                         const aEnd = tp.a.end(e, index);
//                         dom += `
//                         <li data-index="${index}" data-docid="${e.DocID}"${e.PicLinks ? '' : 'class="noPic"'}>
//                             ${tp.picNoImgNoPicDom(e, index)}
//                             <div class="title">
//                                 <div class="text">
//                                     ${tp.title(e, index)}
//                                 </div>
//                             </div>
//                         </li>
//                         `;
//                     });
//                 }
//             }

//             $('.isLoading')
//                 .html('')
//                 .removeClass('isLoading');

//             if (targetName) {
//                 $(targetName)
//                     .html(`
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
//                     ${dom}
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
//                 `);
//             } else {
//                 $(`#addDataListPos${cid}`)
//                     .append(`
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
//                     ${dom}
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
//                 `);
//             }
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             console.log(xhr, ajaxOptions, thrownError);
//             if (xhr.status == 404) {
//                 $('.isLoading').html(thrownError);
//             }
//         },
//     });
// };

// const loadDataListItem3 = ({ cid, cnt, pgnum, targetName }) => {
//     console.log('----------> loadDataListItem() ', cid);
//     console.log(!targetName);

//     let dom = '';
//     // console.log('-------> cnt: ', cnt);
//     // console.log('addMore:', pgnum);
//     // console.log('ajax:', `http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1`);
//     let index = 0;

//     $.ajax({
//         url: 'http://da.wa.news.cn/nodeart/page',
//         data: {
//             // nid: isDev ? 11203173 : cid, // 11203173
//             nid: cid,
//             pgnum: pgnum,
//             cnt: cnt,
//             tp: 1,
//             orderby: 1,
//             // type: 'GET',
//         },
//         dataType: 'JSONP',
//         success: (data) => {
//             // console.log(data);
//             if (data.status == '-1') {
//                 // $('#addData' + cid).html('暂无更多').addClass('disable');
//                 $('.isNoContent' + cid)
//                     .html(`
//                         <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
//                         class="link external" target="_blank">暂无内容</a>
//                     `);
//             } else {
//                 if (data.data.list.length > 0) {
//                     data.data.list.map((e, i) => {
//                         index++;
//                         const aBegin = tp.a.start(e, index);
//                         const aEnd = tp.a.end(e, index);
//                         dom += `
//                         <li data-index="${index}" data-docid="${e.DocID}"${e.PicLinks ? '' : 'class="noPic"'}>
//                             <div class="title">
//                                 <div class="text">
//                                     ${tp.title(e, index)}
//                                 </div>
//                             </div>
//                         </li>
//                         `;
//                     });
//                 }
//             }

//             $('.isLoading')
//                 .html('')
//                 .removeClass('isLoading');

//             if (targetName) {
//                 $(targetName)
//                     .html(`
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
//                     ${dom}
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
//                 `);
//             } else {
//                 $(`#addDataListPos${cid}`)
//                     .append(`
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
//                     ${dom}
//                     <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
//                 `);
//             }
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             console.log(xhr, ajaxOptions, thrownError);
//             if (xhr.status == 404) {
//                 $('.isLoading').html(thrownError);
//             }
//         },
//     });
// };


// const addData = (cid) => {
//     console.log('---> addData.js', cid);

//     // const $btn = $('#addData');
//     // const cid = $cid.attr('data-cid');
//     const cnt = 4; //$cid.find('li').length - 0;
//     // console.log(cid, cnt);

//     let pgnum = 0;

//     $('#addData' + cid)
//         .on('click', function (e) {
//             console.log('----> addData:', e);
//             if (cid) {
//                 pgnum++;
//             }
//             // console.log(cid, cnt, pgnum);
//             loadDataListItem({
//                 cid,
//                 cnt,
//                 pgnum
//             });
//         });
// };

const addData = (cid) => {
    // console.log('1:', cid.isOn);

    // if (cid.hasOwnProperty('isOn') == false) {
    console.log('--------------------//-> addData.js', cid);
    // const $btn = $('#addData');
    // const cid = $cid.attr('data-cid');
    const cnt = 4; //$cid.find('li').length - 0;
    // console.log(cid, cnt);
    let pgnum = 0;

    $('#addData' + cid).on('click', function () {
        console.log('addData:', pgnum);

        // console.log('----> addData:', e);
        if (cid) {
            pgnum++;
        }
        // console.log(cid, cnt, pgnum);
        loadDataListItem({
            cid: cid,
            cnt,
            pgnum,
            isBlank: true,
        });
    });

    // cid.isOn = true;
    // }
    // console.log('2:', cid.isOn);
};



// const loadDataCol1 = (cid) => {

//     const pgnum = 1;
//     const cnt = 10;

//     console.log(`http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1`);


//     $.ajax({
//         url: 'http://da.wa.news.cn/nodeart/page',
//         data: {
//             // nid: isDev ? 11207721 : cid, // 11203173
//             nid: cid,
//             pgnum: pgnum,
//             cnt: cnt,
//             tp: 1,
//             orderby: 1,
//         },
//         dataType: 'JSONP',
//         success: (data) => {
//             // console.log(data);
//             let dom1 = '';
//             let dom2 = '';
//             // let dom3 = '';
//             // let dom4 = '';
//             if (data.status == '-1') {
//                 const msg = `
//                     <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
//                     class="link external" target="_blank">暂无内容</a>
//                 `;
//                 $('.topBigTitle .isNoContent' + cid).html(msg);
//                 $('.col1 .isNoContent' + cid).html(msg);
//             } else {
//                 if (data.data.list.length > 0) {
//                     data.data.list.map((e, i) => {
//                         // console.log(e.PubTime);

//                         if (e.Attr == 62) {
//                             dom1 = `
//                                 <!-- topBigTitle START -->
//                                 ${e.LinkUrl ? `<h1><a href="${e.LinkUrl}" target="_blank" class="link external">` : '<!-- 暂无主标题链接 -->'}
//                                 ${e.Title ? e.Title : '<!-- 暂无主标题 -->'}
//                                 ${e.LinkUrl ? '</a></h1 >' : '<!-- 暂无主标题链接 -->'}
//                                 ${e.Abstract ? `<div class="absBox">${e.Abstract}</div>` : '<!-- 暂无摘要 -->'}
//                                 <!-- topBigTitle END -->`;
//                         }

//                         if (e.Attr == 61) {
//                             dom2 += `
//                                 <div class="swiper-slide item" data-docid="${e.DocID}">
//                                     ${tp.pic(e, i)}
//                                     <div class="title">
//                                         <div class="text">
//                                             ${tp.title(e, i)}
//                                         </div>
//                                     </div>
//                                 </div>
//                             `;
//                         }

//                         // if (e.Attr == 63) {
//                         //     dom3 += `
//                         //         <h2 class="tiny-title" data-docid="${e.DocID}">
//                         //             ${tp.title(e, i)}
//                         //         </h2>
//                         //         ${tp.abs(e)}
//                         //         <div class="line"></div>
//                         //     `;
//                         // }
//                     });
//                 }
//             }
//             // 顶部主头条和摘要
//             if (dom1) {
//                 $('.topBigTitle').html(dom1);
//             } else {
//                 $('.topBigTitle').hide();
//             }

//             if (dom2) {
//                 $('#rotBig .swiper-wrapper').html(dom2);
//                 initRotBig();
//             } else {
//                 $('#rotBig').hide();
//             }

//             if (!(dom1 && dom2)) {
//                 $('.rotBigBox').hide();
//             }
//             // if (dom2 || dom3 && dom4) {
//             //     $('.right').html(`
//             //         ${dom3}
//             //         <ul class="list">
//             //             ${dom4}
//             //         </ul>
//             //     `);
//             // } else {
//             //     $('.col1 .area').hide();
//             //     $('.col1 .more').hide();
//             // }
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             console.log('error:', xhr, ajaxOptions, thrownError);
//             if (xhr.status == 404) {
//                 $('.topBigTitle .isNoContent' + cid).html(thrownError);
//                 $('#rotBig .isNoContent' + cid).html(thrownError);
//             }
//         },
//     });
// };



/**
const loadDataRot2 = (cid) => {
    const pgnum = 1;
    const cnt = 8; // 必须是4的倍数，否则会导致闭合异常

    const start = '<!-- ';
    const end = ' -->\n';

    const itemBoxRightItem = (e, index) => {
        return `<div class="itemBoxRight-item" data-index="${index}" data-docid="${e.DocID}">
                    ${tp.pic(e, index)}
                    <div class="title">
                        <div class="text">
                            ${tp.title(e, index)}
                        </div>
                        ${tp.a.start(e, index)}
                            <div class="icon-jump"></div>
                        ${tp.a.end(e, index)}
                    </div>
                </div>`;
    };


    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
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
            console.log('loadDataRot2: ', data.data.list);


            let dom1 = '';
            let index = 0;
            let slide = 0;

            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1"
                    class="link external" target="_blank">暂无内容</a>
                `;
                $('#rot2 .isNoContent' + cid).html(msg);
            } else {
                if (data.data.list.length > 0) {

                    console.log('loadDataRot2: ', data.data.list.length);


                    data.data.list.map((e, i) => {
                        const slideNum = index / 4;
                        const isSlideStart = /\./.test(slideNum) == false;
                        const isSlideEnd = /\.75/.test(slideNum);

                        if (isPc) {
                            if (isSlideStart) {
                                dom1 += start + `---- ${slide} START ----` + end;
                                dom1 += `<div class="swiper-slide itemBox" data-slide="${slide}" data-index="${index}" data-docid="${e.DocID}">`;
                                dom1 += start + `== child START ==` + end;
                                dom1 += `   <div class="itemBoxLeft">`;
                                // dom1 += start + `${index}` + end;
                                dom1 += `       ${tp.pic(e, index)}
                                                <div class="title">
                                                    <div class="text">
                                                        ${tp.title(e, index)}
                                                    </div>
                                                </div>`;
                                dom1 += start + `== child END ==` + end;
                                dom1 += `    </div>
                                             <div class="itemBoxRight">`;
                                slide++;
                            } else if (isSlideEnd) {
                                // dom1 += start + `${index}` + end;
                                dom1 += itemBoxRightItem(e, index);
                                dom1 += `    </div>
                                        </div>`;
                                dom1 += start + `---- ${slide} END ----` + end;
                            } else {
                                dom1 += start + `--` + end;
                                // dom1 += start + `${index}` + end;
                                dom1 += itemBoxRightItem(e, index);
                                dom1 += start + `\\--` + end;
                            }
                        } else {
                            dom1 += `<div class="swiper-slide mobile-itemBox" data-slide="${slide}" data-index="${index}" data-docid="${e.DocID}">`;
                            dom1 += `       ${tp.pic(e, index)}
                                        <div class="title">
                                            <div class="text">
                                                ${tp.title(e, index)}
                                            </div>
                                        </div>`;
                            dom1 += `</div>`;
                        }

                        // console.log('==>', index, isSlideStart, slide, isSlideEnd);

                        // dom1 += `
                        //     <div class="swiper-slide item" data-docid="${e.DocID}">
                        //         <div class="pic">
                        //             ${e.PicLinks ? `
                        //             ${e.LinkUrl ? `
                        //             <a href="${e.LinkUrl}" target="_blank" class="link external">` : '<!-- 暂无主标题链接 -->'}
                        //                 <img src="${e.PicLinks}"${e.Title ? ` alt="${e.Title}"` : ` alt="<!-- 暂无主标题 -->"`}>
                        //             ${e.LinkUrl ? '</a>' : '<!-- 暂无主标题链接 -->'}
                        //             ` : '<!-- 暂无图片 -->'}
                        //         </div>
                        //         <div class="title">
                        //             <div class="text">
                        //                 ${e.LinkUrl ? `
                        //                 <a href="${e.LinkUrl}" target="_blank" class="link external">` : '<!-- 暂无主标题链接 -->'}
                        //                     ${e.Title ? e.Title : '<!-- 暂无主标题 -->'}
                        //                 ${e.LinkUrl ? '</a>' : '<!-- 暂无主标题链接 -->'}
                        //             </div>
                        //         </div>
                        //     </div>
                        // `;
                        // if (num == 0) {
                        //     dom1 += 1;
                        // }
                        index++;
                    });
                }
            }
            if (dom1) {
                // console.log(dom1);
                $('#rot2>.swiper-wrapper').html(dom1);
                initRot2();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $('#rot2 .isNoContent' + cid).html(thrownError);
            }
        },
    });
};


const loadDataRot3 = (cid) => {
    const pgnum = 1;
    const cnt = 21;

    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
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
            console.log(cnt, data);

            let dom1 = '';
            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1"
                    class="link external" target="_blank">暂无内容</a>
                `;
                $('#rot3 .isNoContent' + cid).html(msg);
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
                                    ${tp.abs(e)}
                                </div>
                            </div>
                        `;
                    });
                }
            }
            if (dom1) {
                $('#rot3>.swiper-wrapper').html(dom1);
                initRot3();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $('#rot3 .isNoContent' + cid).html(thrownError);
            }
        },
    });
};
*/

// const loadDataRot3_1 = (cid) => {
//     const pgnum = 1;
//     const cnt = 16 * 10;

//     $.ajax({
//         url: 'http://da.wa.news.cn/nodeart/page',
//         data: {
//             // nid: isDev ? 11203173 : cid, // 11203173
//             nid: cid,
//             pgnum: pgnum,
//             cnt: cnt,
//             tp: 1,
//             orderby: 1,
//         },
//         dataType: 'JSONP',
//         success: (data) => {
//             console.log(cnt, data);

//             let dom1 = '';
//             if (data.status == '-1') {
//                 const msg = `
//                     <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
//                     class="link external" target="_blank">暂无内容</a>
//                 `;
//                 $('#rotCol6 .isNoContent' + cid).html(msg);
//             } else {
//                 if (data.data.list.length > 0) {
//                     data.data.list.map((e, i) => {
//                         dom1 += `
//                             <div class="swiper-slide item" data-docid="${e.DocID}">
//                                 ${tp.pic(e, i)}
//                                 <div class="title">
//                                     <div class="text">
//                                         ${tp.title(e, i)}
//                                     </div>
//                                 </div>
//                             </div>
//                         `;
//                     });
//                 }
//             }
//             if (dom1) {
//                 $('#rotCol6 .swiper-wrapper').html(dom1);
//                 initRotCol6();
//             } else {
//                 $('#canjian').html('');
//             }
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             console.log(xhr, ajaxOptions, thrownError);
//             if (xhr.status == 404) {
//                 $('#rotCol6 .isNoContent' + cid).html(thrownError);
//             }
//         },
//     });
// };

// const rotPicTitleAbs = (cid, targetName) => {
//     const pgnum = 1;
//     const cnt = 10; // 必须是4的倍数，否则会导致闭合异常

//     $.ajax({
//         url: 'http://da.wa.news.cn/nodeart/page',
//         data: {
//             // nid: isDev ? 1120310 : cid, // 11203173
//             nid: cid,
//             pgnum: pgnum,
//             cnt: cnt,
//             tp: 1,
//             orderby: 1,
//         },
//         dataType: 'JSONP',
//         success: (data) => {
//             console.log('loadDataRotBoxBox: ', data.data.list);

//             let dom1 = '';
//             let index = 0;

//             if (data.status == '-1') {
//                 const msg = `
//                     <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
//                     class="link external" target="_blank">暂无内容</a>
//                 `;
//                 $(targetName + ' .isLoadingTxt' + cid).html(msg);
//             } else {
//                 if (data.data.list.length > 0) {
//                     data.data.list.map((e, i) => {
//                         index++;
//                         dom1 += `<div class="swiper-slide item-picTitleAbs" data-index="${index}" data-docid="${e.DocID}">
//                                     <div class="item-picTitleAbs-in">   
//                                         <div class="textBox">
//                                             <div class="textBox-in">
//                                                 ${tp.introTitle(e, index)}
//                                                 <div class="title">
//                                                     <div class="text">
//                                                         ${tp.title(e, index)}
//                                                     </div>
//                                                 </div>
//                                                 ${tp.abs(e, index)}
//                                             </div>
//                                         </div>
//                                         ${tp.pic(e, index)}
//                                     </div>
//                                 </div>`;
//                     });
//                 }
//             }
//             if (dom1) {
//                 // console.log(dom1);
//                 $(targetName + ' .swiper-wrapper').html(dom1);
//                 initRotPicTitleAbs(targetName);
//             }
//         },
//         error: function (xhr, ajaxOptions, thrownError) {
//             console.log(xhr, ajaxOptions, thrownError);
//             if (xhr.status == 404) {
//                 $(targetName + ' .isLoadingTxt' + cid).html(thrownError);
//             }
//         },
//     });
// };

/**
const loadGushi = (cid) => {
    const pgnum = 1;
    const cnt = 1;
    const targetName = '#gushi';

    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
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
            console.log('loadGushi: ', data);

            let dom1 = '';
            let _url = '';

            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1"
                    class="link external" target="_blank">暂无内容</a>
                `;
                $(targetName + ' .isNoContent' + cid).html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        dom1 = `
                            ${e.LinkUrl ? `<a href="${e.LinkUrl}" class="link external gushi" target="_blank" data-docid="${e.DocID}">` : '<!-- 暂无标题链接 -->'}
                                ${tp.abs(e, i)}
                            ${tp.a.end(e)}
                        `;
                        _url = e.LinkUrl;
                    });
                }
            }
            if (dom1) {
                $(targetName).html(dom1);
            }
            if (_url) {
                $('#navBtn_gushi').attr('href', _url);
            } else {
                $('#navBtn_gushi').hide();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $(targetName + ' .isNoContent' + cid).html(thrownError);
            }
        },
    });
};


const loadMemorabilia = (cid) => {
    const pgnum = 1;
    const cnt = 200; // 必须是4的倍数，否则会导致闭合异常
    const targetName = '#memorabilia-container';

    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
        data: {
            // nid: isDev ? 11203173 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1,
        },
        dataType: 'JSONP',
        success: (data) => {
            let dom1 = '';
            let index = 0;

            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1"
                    class="link external" target="_blank">暂无内容</a>
                `;
                $(targetName + ' .isLoadingTxt').html(msg);
            } else {
                if (data.data.list.length > 0) {

                    console.log('loadMemorabilia: ', data.data.list);


                    data.data.list.map((e, i) => {

                        index++;
                        dom1 += `
                            <div class="swiper-slide">
                                <div class="date">${e.SubTitle ? `${e.SubTitle}` : ' '}</div>
                                <div class="style"></div>
                                <div class="content">
                                    <div class="media play-video">
                                        ${tp.aImg(e, index)}
                                        <p class="text">
                                            ${tp.title(e, index)}
                                            <!-- a href="#" class="btn-audio">play</a -->
                                        </p>
                                    </div>

                                </div>
                            </div>`;
                    });
                }
            }
            if (dom1) {
                $(targetName).html(dom1);
                memorabiliaFn();
            } else {
                $('#zhongyao').html('');
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $(targetName + ' .isLoadingTxt').html(thrownError);
            }
        },
    });
};

*/

