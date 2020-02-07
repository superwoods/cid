let contentPageFn_bannerBgDom = false;
let contentPageFn_navDom = false;
let contentPageFn_footerDom = false;

// 配置内容页
const contentPageFn = () => {
    /**
     * 
        <div class="navbar">
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link back">
                        <i class="icon icon-back"></i>
                        <span>返回</span>
                    </a>
                </div>
                <div class="title">${name}</div>
            </div>
        </div>
     */


    // <!-- banner END -->
    // ${navBarDom('aa', '/')}
    // <!-- demo banner & nav END -->

    if (contentPageFn_bannerBgDom == false) {
        // contentPageFn_bannerBgDom = $('.banner-bg').html();
        contentPageFn_bannerBgDom = $('.banner').prop('outerHTML');
    }
    if (contentPageFn_navDom == false) {
        // contentPageFn_navDom = $('.nav').html();
        contentPageFn_navDom = $('.nav').prop('outerHTML');
    }
    if (contentPageFn_footerDom == false) {
        contentPageFn_footerDom = $('.footer').prop('outerHTML');
    }

    return `
        <div class="page isPageBanner">
            <div class="page-content hide-navbar-on-scroll">
                
                <div class="box banner-bg">
                    ${contentPageFn_bannerBgDom}
                    ${contentPageFn_navDom}
                </div>

                <div class="content">
                    <!-- items START -->
                    <div class="area listHasImg spListArea">
                        <div class="spaColTitle"> </div>
                        <div class="listBox">
                            <ul class="list isLoading" id="addDataListPos" data-cid="">
                                <div class="isLoadingTxt">正在努力加载...</div>
                            </ul>
                        </div>
                        <div class="isNoContent isNoContent"></div>
                        <div class="listBoxMoreBtnBox">
                            <div class="listBoxMoreBtn" id="addData">查看更多</div>
                        </div>
                    </div>
                    <!-- items END -->
                </div>

                <div class="nav mobile-nav-btn">
                    <div class="panel-openBtnBox">
                        <a class="panel-open btn-box button button-large button-fill color-white text-color-red" href="#" data-panel="right">
                            <i class="f7-icons" data-panel="right">bars</i>
                        </a>
                    </div>
                </div>

                <!-- js footer START -->
                ${contentPageFn_footerDom}
                <!-- js footer END -->
            </div>
        </div>
    `;
};