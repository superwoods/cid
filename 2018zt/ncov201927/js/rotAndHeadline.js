let rotAndHeadline_initRot_swiperEl = false;

const rotAndHeadline_initRot = (targetName) => {
    rotAndHeadline_initRot_swiperEl = new Swiper(targetName + ' .swiper-container', {
        loop: true,
        watchOverflow: true,
        // autoplay: isDev ? false : true,//可选选项，自动滑动
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


const rotAndHeadline = ({ cid, cnt, pgnum, targetName, hideName, hasCol }) => {
    // {
    //     cid: cid['新春要闻'].cid,
    //     cnt: 40,
    //     pgnum: 1,
    //     targetName: '#rotBig',
    //     hideName: null,
    //     hasCol: 0,
    // }

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
            // console.log(data);
            let dom2 = '';
            let dom3 = '';
            let dom4 = '';
            let dom4_index = 0;
            let dom4_listMaxNum = 4;

            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                    class="link external" target="_blank">暂无内容</a>
                `;
                $(targetName + ' .col1 .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {

                        if (e.Attr == 61) { // 图片属性
                            dom2 += `
                                <div class="swiper-slide item" data-docid="${e.DocID}">
                                    ${tp.pic(e, i)}
                                    <div class="title">
                                        <div class="text">
                                            ${tp.title(e, i)}
                                        </div>
                                    </div>
                                </div>
                            `;
                        } else { // if (e.Attr == 63) {
                            // 2020-01-05 修复 +63 普通属性稿件的识别
                            if (dom3 == '') { // 普通属性

                                // 2020-01-23 这里缺少更严格的判断，不太好弄

                                // e.Title = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八';
                                // console.log('dom3:', e.Title.length);
                                if (e.Title.length <= 14) {
                                    dom4_listMaxNum = 7;
                                } else if (e.Title.length <= 28) {
                                    dom4_listMaxNum = 6;
                                } else {
                                    dom4_listMaxNum = 4;
                                }

                                if (hasCol) {
                                    dom3 += `
                                        <div class="items-col items-col0-0">
                                            <div class="hide">${hasCol}</div>
                                        </div>
                                    `;
                                }

                                dom3 += `
                                <h2 class="tiny-title" data-docid="${e.DocID}">
                                    ${tp.title(e, i)}
                                </h2>
                                ${tp.abs(e)}
                                <div class="line"></div>
                            `;
                            } else {
                                dom4_index++;
                                if (dom4_index <= dom4_listMaxNum) {
                                    dom4 += `
                                        <li data-docid="${e.DocID}" >
                                            ${tp.title(e, i)}
                                        </li>
                                    `;
                                }
                            }
                        }

                    });
                }
            }

            // // 顶部主头条和摘要
            // if (dom1) {
            //     $(targetName + ' .topBigTitle').html(dom1);
            // } else {
            //     // $(targetName + ' .topBigTitle').hide();
            // }

            if (dom2) {
                $(targetName + ' .swiper-container .swiper-wrapper').html(dom2);

                setTimeout(() => {
                    rotAndHeadline_initRot(targetName);
                }, 600);
            }

            if (dom2 || dom3 || dom4) {
                $(targetName + ' .right').html(`
                    ${dom3}
                    <ul class="list">
                        ${dom4}
                    </ul>
                `);
            } else if (hideName) {
                $(hideName).hide();
            }
        },
        // error: function (xhr, ajaxOptions, thrownError) {
        //     console.log('error:', xhr, ajaxOptions, thrownError);
        //     if (xhr.status == 404) {
        //         // $('.topBigTitle .isNoContent' + cid).html(thrownError);
        //         $('.col1 .isNoContent').html(thrownError);
        //     }
        // },
    });
};