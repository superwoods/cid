const setNav = (cid) => {
    // console.log('----> setNavFn !!!', e);
    // if (cid && CHObj == false) {
    if (cid) {
        // console.log('----> setNavFn run!!!');
        // CHObj = [];

        // let dom = '<a class="link active" href="/" data-id="homepage">首页</a>';

        // if (isPc == false) {
        //     dom = `
        //         <a class="link external panel-xaLogoA" href="http://www.xiongan.gov.cn" title="中国雄安官网" target="_blank">
        //             <img class="logo lazy lazy-fade-in" src="http://www.xiongan.gov.cn/bundle/xiongan-logo.png" alt="http://www.xiongan.gov.cn">
        //         </a>
        //     ` + dom;
        // }
        let dom = '';

        for (const prop in cid) {
            const col = cid[prop];

            console.log(cid[prop]);

            if (col.hasOwnProperty('isHomepageChn')) {
                if (col.hasOwnProperty('nav')) {
                    const className = 'navBtn-' + col.cid;
                    const _url = '/page/' + col.cid;
                    if (col.nav) {
                        /*
                        const col.name = prop.replace('首页-', '');
                        const classNameKey = col.url.replace(/\/|page/ig, '');
                        console.log(classNameKey == 'guan');
                        if (classNameKey !== 'news') {
                            const className = 'navBtn-' + classNameKey;
                            dom += `
                            <a class="link navBtn ${className} ${classNameKey == 'guan' ? 'active' : ''}" href="${_url}" data-id="id-${col.cid}">
                                <span class="hide">${col.name}</span>
                            </a>
                            <span class="line"></span>
                            `;
                        }
                        */

                        // console.log(className);

                        if (col.isHomepageChn) {
                            dom += `
                                <a class="link navBtn ${className}" href="${_url}" data-id="id-${col.cid}">
                                    ${col.name}
                                </a>
                                <span class="line"></span>
                        `;
                        }
                        else {
                            dom += `
                                <a class="link navBtn ${className} navBtn-jumpto" href="${MAIN_url}" data-id="id-${col.cid}" data-jump="${className}">
                                    ${col.name}
                                </a>
                                <span class="line"></span>
                        `;
                        }
                    }

                    // CHObj.push({
                    //     name: col.name,
                    //     cid: col.cid,
                    //     url: col.url,
                    //     isBlank: col.isBlank ? col.isBlank : false,
                    //     // index: col.index ? col.index : 0,
                    // });

                    // if (CHObj.hasOwnProperty(prop)) {

                    // col
                    const $col = $(`[data-col="${prop}"]`);
                    $col.replaceWith(`
                        <a class="colA link" href="${_url}">
                            <div class="${$col.attr('class')}">
                                <div class="hide">${col.name}</div>
                            </div>
                        </a>
                    `);

                    // more
                    const $more = $(`[data-more="${prop}"]`);
                    $more.replaceWith(`
                        <div class="more">
                            <a class="colA link" href="${_url}"> ${$more.html()} </a>
                        </div>
                    `);
                }
            }

        }

        // a 的 data-id 必须带着，用于触发 active
        $('[data-js="setNav(cid)"]').html(`
            <a class="link navBtn-home active" href="${MAIN_url}" data-id="home">首页</a>
            ${dom}            
        `);


        // 设置 jump 事件
        // console.log(1, $('#navBtn-gz').offset().top);
        // console.log(2, $('#navBtn-pw').offset().top);
        // console.log(3, $('#navBtn-kj').offset().top);

        // $('.navBtn-gz').on('click', (e) => {
        //     $('.page-content').animate({ scrollTop: 1500 }, '3000');
        // });

        // $('.navBtn-pw').on('click', (e) => {
        //     $('.page-content').animate({ scrollTop: 2000 }, '3000');
        // });

        // $('.navBtn-kj').on('click', (e) => {
        //     $('.page-content').animate({ scrollTop: 2900 }, '3000');
        // });
    }
};

// setNav(cid);