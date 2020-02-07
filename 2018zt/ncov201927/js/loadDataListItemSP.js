//- listAbsPic mods
let has_topBigTitle = false;

const loadDataListItemSP = ({ cid, cnt, pgnum, targetName, targetNameBigTitle, cbFn, isBlank }) => {

    let index = 0;
    let dom = '';
    let dom0 = '';

    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
        data: {
            // nid: isDev ? 11207721 : cid, // 11203173
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
                $('#addData').html('暂无更多').addClass('disable');
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                    class="link external" target="_blank">暂无内容</a>
                `;
                $('.isNoContent.isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        // e.isBlank = isBlank;
                        index++;
                        if (has_topBigTitle == false && e.Attr == 62) {
                            // dom0 = `
                            //     <!-- topBigTitle START -->
                            //     ${e.LinkUrl ? `<h1><a href="${e.LinkUrl}" target="_blank" class="link external">` : '<!-- 暂无主标题链接 -->'}
                            //     ${e.Title ? e.Title : '<!-- 暂无主标题 -->'}
                            //     ${e.LinkUrl ? '</a></h1 >' : '<!-- 暂无主标题链接 -->'}
                            //     ${e.Abstract ? `<div class="absBox">${e.Abstract}</div>` : '<!-- 暂无摘要 -->'}
                            //     <!-- topBigTitle END -->`;
                            dom0 = `
                                <!-- topBigTitle START -->
                                ${e.LinkUrl ? `<h1><a href="${e.LinkUrl}" target="_blank" class="link external">` : '<!-- 暂无主标题链接 -->'}
                                ${e.Title ? e.Title : '<!-- 暂无主标题 -->'}
                                ${e.LinkUrl ? '</a></h1 >' : '<!-- 暂无主标题链接 -->'}
                                <!-- topBigTitle END -->`;
                        }

                        if (e.Attr == 63) {
                            // const aBegin = tp.a.start(e);
                            // const aEnd = tp.a.end(e);
                            // ${ isDev ? `<i>${e.DocID}</i>` : ''}
                            dom += `
                                <li data-index="${index}" data-docid="${e.DocID} ｜ ${e.Attr}"${e.PicLinks ? '' : 'class="noPic"'}>
                                    ${tp.picNoImgNoPicDom(e)}
                                    <div class="text">
                                        ${tp.a.start(e)}
                                            <div class="title"> 
                                                ${e.Title ? `${e.Title}` : '暂无标题'}
                                            </div>
                                            ${tp.abs(e)}
                                        ${tp.a.end(e)}
                                    </div>
                                </li>
                            `;
                        }

                    });
                }
            }

            if (targetNameBigTitle && dom0 !== '' && has_topBigTitle == false) {
                $(targetNameBigTitle).html(`${dom0}`);
                has_topBigTitle = true;
            }


            $(targetName + ' .isNoContent').hide();
            $(targetName)
                .append(`
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
                    ${dom}
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
                `);

            if (cbFn) {
                cbFn();
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $(targetName + ' .isNoContent').html(thrownError);
            }
        },
    });
};