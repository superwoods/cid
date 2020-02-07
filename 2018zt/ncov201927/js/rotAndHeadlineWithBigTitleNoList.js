const rotAndHeadlineWithBigTitleNoList_initRot = () => {
    new Swiper('#rot', {
        loop: true,
        watchOverflow: true,
        // autoplay: isDev ? false : true,//可选选项，自动滑动
        pagination: {
            el: '#rot .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#rot .swiper-button-next',
            prevEl: '#rot .swiper-button-prev',
        },
    });
};


const rotAndHeadlineWithBigTitleNoList = (cid) => {
    const pgnum = 1;
    const cnt = 20;

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
            let dom1 = '';
            let dom2 = '';
            let dom3 = '';
            let dom3Index = 0;
            // let dom4 = '';
            // let dom4_index = 0;
            // let dom4_listMaxNum = 8;

            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                    class="link external" target="_blank">暂无内容</a>
                `;
                $('.topBigTitle .isNoContent' + cid).html(msg);
                $('.col1 .isNoContent' + cid).html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        // console.log(e.PubTime);

                        if (e.Attr == 62) {
                            dom1 = `
                                <!-- topBigTitle START -->
                                ${e.LinkUrl ? `<h1><a href="${e.LinkUrl}" target="_blank" class="link external">` : '<!-- 暂无主标题链接 -->'}
                                ${e.Title ? e.Title : '<!-- 暂无主标题 -->'}
                                ${e.LinkUrl ? '</a></h1 >' : '<!-- 暂无主标题链接 -->'}
                                ${e.Abstract ? `<div class="absBox">${e.Abstract}</div>` : '<!-- 暂无摘要 -->'}
                                <!-- topBigTitle END -->`;
                        }

                        if (e.Attr == 61) {
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
                        }

                        if (e.Attr == 63 && dom3Index < 3) {
                            // let a = '一二三四五六七八九十一二三四五六七八';
                            // console.log('dom3:', a.length);
                            // if (e.Title.length <= 18) {
                            //     dom4_listMaxNum = 9;
                            // }
                            dom3Index++;
                            /**
                             * dom3 += `
                                <div class="items-col items-col0-0">
                                    <div class="hide">活动资讯</div>
                                </div>
                                <h2 class="tiny-title" data-docid="${e.DocID}">
                                    ${tp.title(e, i)}
                                </h2>
                                ${tp.abs(e)}
                                <div class="line"></div>
                            `;
                             */
                            dom3 += `
                                <h2 class="tiny-title" data-docid="${e.DocID}">
                                    ${tp.title(e, i)}
                                </h2>
                                ${tp.abs(e)}
                                <div class="line"></div>
                            `;
                        }
                        // else {
                        //     dom4_index++;
                        //     if (dom4_index <= dom4_listMaxNum) {
                        //         dom4 += `
                        //             <li data-docid="${e.DocID}" >
                        //                 ${tp.title(e, i)}
                        //             </li>
                        //         `;
                        //     }
                        // }
                    });
                }
            }
            // 顶部主头条和摘要
            if (dom1) {
                $('.topBigTitle').html(dom1);
            } else {
                $('.topBigTitle').hide();
            }

            if (dom2) {
                $('#rot .swiper-wrapper').html(dom2);
                rotAndHeadlineWithBigTitleNoList_initRot();
            }

            if (dom2 || dom3) {
                $('.col1 .right').html(`
                    ${dom3}
                `);
                rotAndHeadline_ctlHeight('.col1 .right');
            } else {
                $('.col1 .area').hide();
                // $('.col1 .more').hide();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log('error:', xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $('.topBigTitle .isNoContent' + cid).html(thrownError);
                $('.col1 .isNoContent' + cid).html(thrownError);
            }
        },
    });
};