const picAndList = ({ cid, cnt, pgnum, targetName }) => {
    console.log('----------> picAndList:', cid);
    // console.log(!targetName);
    let dom0 = '';
    let dom = '';
    let index = 0;
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
                const msg = `
                    <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1"
                    class="link external" target="_blank">暂无内容</a>
                `;
                $(targetName + ' .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {
                        index++;
                        if (e.Attr == 61) {
                            dom0 = `
                                ${tp.pic(e, i)}
                                <div class="text">
                                    ${tp.title(e, i)}
                                </div>
                            `;
                        } else {
                            const aBegin = tp.a.start(e, index);
                            const aEnd = tp.a.end(e, index);
                            dom += `
                                <li data-index="${index}" data-docid="${e.DocID}"${e.PicLinks ? '' : 'class="noPic"'}>
                                    <div class="text">
                                        ${aBegin}
                                            <div class="title">
                                                ${e.Title ? `${e.Title}` : '暂无标题'}
                                            </div>
                                        ${aEnd}
                                    </div>
                                </li>`;
                        }
                    });
                }
            }

            // console.log('---> msg:', msg);

            if (dom || dom0) {
                const $t = $(targetName);

                $t.find('.picBox').html(`
                <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
                ${dom0}
                <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->`);

                $t.find('.list').html(`
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
                    ${dom}
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->`);

            } else if (hideName) {
                $(hideName).hide();
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