const navBarDom = (name, href) => {
    return `
        <div class="navbar">
            <div class="navbar-inner">
                <div class="left">
                    <a${href ? ` href="${href}" class="link"` : ' class="link back"'}>
                        <i class="icon icon-back"></i>
                        <span>返回</span>
                    </a>
                </div>
                <div class="title">${name ? `${name}` : ''}</div>
                <div class="right">
                    <a class="panel-open" href="#" data-panel="right">
                        <i class="f7-icons" data-panel="right">bars</i>
                    </a>
                </div>
            </div>
        </div>
    `;
};