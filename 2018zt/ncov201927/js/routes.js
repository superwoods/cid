let setCol_setTimeout;

const routes = [
    {
        name: '首页',
        path: '/2018zt/ncov201927/',
        url: '.',
        on: {
            // pageAfterIn: function (e, page) {
            //     console.log('pageAfterIn: ', e, page);
            //     // aAddClassFn();
            // },
            pageInit: function (e, page) {
                // console.log(e, page);
                setNav(cid); // 必须在前面，通过他设置 CHObj
                // if (CHObj) {
                //     setHomepageCol(CHObj);
                // }
                addDataForHomepage(cid);
                aAddClassFn();
                // $$('.navBtn').removeClass('active');
                // $$('.navBtn-home').addClass('active');
            },
        }
    },
    {
        name: '列表页',
        path: '/page/:ch_cid',
        content: contentPageFn(),
        on: {
            pageInit: function (e, page) {
                setNav(cid);
                // console.log(page.route.params.ch_cid);
                console.log('== 列表页 pageInit ====>:');

                let ch_cid = page.route.params.ch_cid;
                const isPage = window.location.href.indexOf(ch_cid) !== -1;

                console.log('     | isPage:', isPage);
                console.log('     | ch_cid:', ch_cid);

                const setCol = () => {
                    // for (let prop in cid) {
                    //     const isCHObjCidObj = cid[prop].cid == ch_cid;
                    //     if (isCHObjCidObj) {
                    //         $$('.navbar .title, .spaColTitle').text(cid[prop].name);
                    //         // // 读取列表数据
                    //         // addData({
                    //         //     cid: CHObj[prop].cid,
                    //         //     CHObj_prop: CHObj[prop],
                    //         //     cnt: 4,
                    //         // });
                    //         // clearTimeout(setCol_setTimeout);
                    //         // setCol_setTimeout = null;
                    //     }
                    // }
                    // $$('.navbar .title, .spaColTitle').text(CHObj[ch_cid].name);

                    // 设置导航按钮
                    $$(`[data-id]`).removeClass('active');

                    const $active = $$(`[data-id="id-${ch_cid}"]`);
                    $active.addClass('active');

                    $$('.navbar .title, .spaColTitle').text($active.text());

                    $$('.spaColTitle').prepend(`
                        <div class="${$active.attr('class')}"></div>
                        <div class="middot"></div>
                    `);

                    clearTimeout(setCol_setTimeout);
                    setCol_setTimeout = null;
                };

                if (isPage) {
                    if (cid) {
                        setCol_setTimeout = setTimeout(setCol, 400);
                    }

                    // 设置数据写入 id
                    const $id = $$('#addDataListPos');
                    $id.attr('id', 'addDataListPos' + ch_cid);
                    $id.attr('data-cid', ch_cid);

                    // 暂无内容位置 (只能替换 class 名，新增会导致多个class)
                    $$('.isNoContent').attr('class', 'isNoContent isNoContent' + ch_cid);

                    // 查看更多按钮
                    $$('#addData').attr('id', 'addData' + ch_cid);

                    pageFn(ch_cid);
                }
            },
        },
        navbar: {
            hideOnPageScroll: true,
        },
    },
    {
        path: '(.*)',
        url: 'http://www.xiongan.gov.cn/404.html'
    }
];