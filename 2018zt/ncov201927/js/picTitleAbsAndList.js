// const picTitleAbsAndList_initRot = (targetName) => {
//     new Swiper(targetName + ' .swiper-container', {
//         loop: true,
//         watchOverflow: true,
//         // autoplay: isDev ? false : true,//可选选项，自动滑动
//         pagination: {
//             el: targetName + ' .swiper-pagination',
//             clickable: true,
//         },
//         navigation: {
//             nextEl: targetName + ' .swiper-button-next',
//             prevEl: targetName + ' .swiper-button-prev',
//         },
//     });
// };


const picTitleAbsAndList = ({ cid, cnt, pgnum, targetName, hideName }) => {

    // cnt: 5,
    // pgnum: 1,
    // targetName: '#rotBig',
    // hideName: '#rotBig'
    // const pgnum = 1;
    // const cnt = 20;

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
            let dom1_index = 0;
            let dom2 = '';
            let dom2_index = 0;

            // console.log(data.status == '-1');
            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                    class="link external" target="_blank">暂无内容</a>
                `;
                $(targetName + ' .isNoContent').html(msg);
                console.log(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        if (e.Attr == 61) { // pic x 2
                            dom1_index++;
                            if (dom1_index <= 2) {
                                // e.Abstract = '这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要这是摘要';
                                dom1 += `
                                    <div class="item" data-docid="${e.DocID}">
                                        ${tp.pic(e, i)}
                                        <div class="title">
                                            <div class="text">
                                                ${tp.title(e, i)}
                                            </div>
                                        </div>
                                        ${tp.abs(e, i)}
                                    </div>
                                `;
                            }
                        } else {
                            dom2_index++;
                            if (dom2_index <= 6) {
                                dom2 += `
                                    <li data-docid="${e.DocID}" >
                                        ${tp.title(e, i)}
                                    </li>
                                `;
                            }
                        }
                    });
                }
            }

            if (dom1) {
                $(targetName + ' [data-add="1"]').html(`
                    <div class="picTitleAbsAndList-left">
                        ${dom1}
                    </div>
                    <div class="picTitleAbsAndList-right">
                        
                    </div>
                `);
            }

            if (dom2) {
                $(targetName + ' [data-add="1"] .picTitleAbsAndList-right').html(`
                    <ul class="list">
                        ${dom2}
                    </ul>
                `);
            }

            if (hideName && (dom1 == '' && dom2 == '')) {
                $(hideName).hide();
            }

        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log('error:', xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $(targetName + ' .isNoContent').html(thrownError);
            }
        },
    });
};