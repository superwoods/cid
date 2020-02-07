// rotPicTitleAbs_rotFn
let rotPicTitleAbs_rotFn_timeout;
let rotPicTitleAbs_rotFn_swiperEl;

const rotPicTitleAbs_rotFn = (targetName) => {
    // console.log(11);
    // if (targetName) {
    const _targetName = targetName.replace('#', '.');
    // console.log(_targetName);
    rotPicTitleAbs_rotFn_swiperEl = new Swiper(targetName, {
        loop: true,
        watchOverflow: true,
        // autoplay: false,
        spaceBetween: isPc ? 0 : 9,
        pagination: {
            el: _targetName + '-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: _targetName + '-next',
            prevEl: _targetName + '-prev',
        },
    });
    // } else {
    //     console.log(`rotPicTitleAbs_rotFn(targetName): has not targetName!!!`);
    // }
};

const rotPicTitleAbs = ({ cid, cnt, pgnum, targetName, targetNameSidebar }) => {
    // console.log('----> rotPicTitleAbs:', cnt, pgnum);
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
            // console.log('rotPicTitleAbs: ', data.data.list);
            let dom1 = '';
            let dom2 = '';
            let index = 0;

            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                    class="link external" target="_blank">暂无内容</a>
                `;
                $(targetName + ' .isLoadingTxt' + cid).html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        index++;
                        if (e.Attr == 62) { // 头条属性
                            dom2 = `
                                ${tp.pic(e, index)}
                            `;
                        } else {
                            dom1 += `<div class="swiper-slide item-picTitleAbs" data-index="${index}" data-docid="${e.DocID}">
                                        <div class="item-picTitleAbs-in">   
                                            <div class="textBox">
                                                <div class="textBox-in">
                                                    ${tp.introTitle(e, index)}
                                                    <div class="title">
                                                        <div class="text">
                                                            ${tp.title(e, index)}
                                                        </div>
                                                    </div>
                                                    ${tp.abs(e, index)}
                                                </div>
                                            </div>
                                            ${tp.pic(e, index)}
                                        </div>
                                    </div>`;
                        }
                    });
                }
            }
            if (dom1) {
                // console.log(dom1);
                $(targetName + ' .swiper-wrapper').html(dom1);

                rotPicTitleAbs_rotFn_timeout = setTimeout(() => {
                    rotPicTitleAbs_rotFn(targetName);
                    clearTimeout(rotPicTitleAbs_rotFn_timeout);
                    rotPicTitleAbs_rotFn_timeout = null;
                }, 600);
            }

            if (dom2 && targetNameSidebar) {
                $(targetNameSidebar).html(`
                    <div class="sidebar-in">
                        ${dom2}
                    </div>
                `);
            } else {
                $(targetNameSidebar).hide();
            }
        },
        // error: function (xhr, ajaxOptions, thrownError) {
        //     console.log(xhr, ajaxOptions, thrownError);
        //     if (xhr.status == 404) {
        //         $(targetName + ' .isLoadingTxt' + cid).html(thrownError);
        //     }
        // },
    });
};