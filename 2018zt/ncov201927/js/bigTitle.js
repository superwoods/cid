const bigTitle = ({ cid, cnt, pgnum, targetName }) => {
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
            let dom1 = '';

            if (data.status == '-1') {
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                    class="link external" target="_blank">暂无内容</a>
                `;
                $(targetName + ' .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        if (e.Attr == 62) { // 头条属性
                            dom1 = `
                                <!-- topBigTitle START -->
                                ${e.LinkUrl ? `<h1><a href="${e.LinkUrl}" target="_blank" class="link external">` : '<!-- 暂无主标题链接 -->'}
                                ${e.Title ? e.Title : '<!-- 暂无主标题 -->'}
                                ${e.LinkUrl ? '</a></h1 >' : '<!-- 暂无主标题链接 -->'}
                                ${e.Abstract ? `<div class="absBox">${e.Abstract}</div>` : '<!-- 暂无摘要 -->'}
                                <!-- topBigTitle END -->`;
                        }
                    });
                }
            }

            // 顶部主头条和摘要
            if (dom1) {
                $(targetName).html(dom1);
            }
        },
        // error: function (xhr, ajaxOptions, thrownError) {
        //     console.log('error:', xhr, ajaxOptions, thrownError);
        //     if (xhr.status == 404 || xhr.status == 502) {
        //         $(targetName + ' .topBigTitle .isNoContent').html(thrownError);
        //         $(targetName + ' .col1 .isNoContent').html(thrownError);
        //     }
        // },
    });
};