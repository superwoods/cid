// 配置内容页
const contentPageFn = ({ name, cid, listTypeClassname, itemsColBgClassname }) => {
    return `
        <div class="page">
            <div class="navbar">
                <div class="navbar-inner sliding">
                    <div class="left">
                        <a href="#" class="link back">
                            <i class="icon icon-back"></i>
                            <span>返回</span>
                        </a>
                    </div>
                    <div class="title">${name}</div>
                </div>
            </div>

            <div class="page-content hide-navbar-on-scroll">
                <!-- demo banner & nav START -->
                <!-- banner START -->
                <div class="box banner-bg">
                    ${$('.banner-bg').html()}
                </div>
                <!-- banner END -->
                <div class="logoBox">
                    ${$('.logoBox').html()}
                </div>
                <!-- demo banner & nav END -->

                <!-- items START ${name} -->
                <div class="area ${listTypeClassname}">
                    <a class="colA link" href="/">
                        <div class="items-col ${itemsColBgClassname}">
                            <div class="hide">${name}</div>
                        </div>
                    </a>
                    <div class="listBox">
                        <ul class="list isLoading" data-cid="${cid}">
                            <div class="isLoadingTxt">正在努力加载...</div>
                        </ul>
                    </div>
                    <div class="isNoContent"></div>
                    <div class="listBoxMoreBtnBox">
                        <div class="listBoxMoreBtn" id="addData">查看更多</div>
                    </div>
                </div>
                <!-- items END ${name} -->

                <!-- demo footer START -->
                <div class="footer">
                    ${$('.footer').html()}
                </div>
                <!-- demo footer END -->

            </div>
        </div>
    `;
};