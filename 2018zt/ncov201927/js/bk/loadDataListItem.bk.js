const loadDataListItem = ({ cid, cnt, pgnum, targetName, isBlank }) => {
    // console.log('----------> loadDataListItem() ', cid);
    // console.log(targetName);

    let index = 0;
    let dom = '';
    // console.log('-------> cnt: ', cnt);
    // console.log('addMore:', pgnum);
    // console.log('ajax:', `http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1`);

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

                $('#addData' + cid).html('暂无更多').addClass('disable');

                $('.isNoContent' + cid)
                    .html(`
                        <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1" 
                        class="link external" target="_blank">暂无内容</a>
                    `);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map((e, i) => {

                        e.isBlank = isBlank;
                        index++;

                        const aBegin = tp.a.start(e);
                        const aEnd = tp.a.end(e);
                        dom += `
                        <li data-index="${index}" data-docid="${e.DocID}"${e.PicLinks ? '' : 'class="noPic"'}>
                            <div class="text">
                                ${aBegin}
                                    <div class="title">
                                        ${e.Title ? `${e.Title}` : '暂无标题'}
                                    </div>
                                    ${tp.abs(e)}
                                ${aEnd}
                            </div>
                            ${tp.picNoImgNoPicDom(e)}
                        </li>
                        `;
                    });
                }
            }

            $('.isLoading')
                .html('')
                .removeClass('isLoading');

            if (targetName) {
                $(targetName)
                    .html(`
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
                    ${dom}
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
                `);
            } else {
                $(`#addDataListPos${cid}`)
                    .append(`
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} START -->
                    ${dom}
                    <!-- cid: ${cid}, cnt: ${cnt}, pgnum: ${pgnum} END -->
                `);
            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $('.isLoading').html(thrownError);
            }
        },
    });
};