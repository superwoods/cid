const msgFn = ({ cid, pgnum, cnt }) => {
    return `
        <a href="http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1"
        class="link external" target="_blank">暂无内容</a>
    `;
};