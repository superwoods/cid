// 配置内容页
const contentPageFn = () => {
    /**
     * page list
     */
    return `
        <div class="page">
            <div class="page-content" data-page="page">
            
                ${navBarDom('aa', '/')}
                
                <!-- items START -->
                <div class="area">
                
                    <div class="spaColTitle"></div>

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

                <!-- demo footer START -->
                <div class="footer">
                    ${$('.footer').html()}
                </div>
                <!-- demo footer END -->

            </div>
        </div>
    `;
};