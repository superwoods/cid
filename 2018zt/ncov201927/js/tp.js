const TXT_nourl = '<!-- 暂无标题链接 -->';
const TXT_notitle = '<!-- 暂无标题 -->';
const TXT_nopic = '<!-- 暂无图片 / -->';
const tp = {
    pic(e) {
        return `<div class="pic" data-docid="${e.DocID}">${e.PicLinks ? `${e.LinkUrl ? `<a href="${e.LinkUrl}" class="link external" target="_blank" data-docid="${e.DocID}">` : TXT_nourl}<img class="lazy lazy-fade-in" src="${e.PicLinks}" alt="${e.Title ? `${e.Title}` : TXT_notitle}">${e.LinkUrl ? `</a>` : ''}` : TXT_nopic}</div>`;
    },
    picNoImgNoPicDom(e) {
        return `${e.PicLinks ? `
            <div class="pic" data-docid="${e.DocID}">${e.LinkUrl ? `<a href="${e.LinkUrl}" class="link external" target="_blank" data-docid="${e.DocID}">` : TXT_nourl}<img class="lazy lazy-fade-in" src="${e.PicLinks}" alt="${e.Title ? `${e.Title}` : TXT_notitle}">${e.LinkUrl ? `</a></div>` : ''}` : TXT_nopic}
       `;
    },
    aImg(e) {
        return `${e.PicLinks ? `${e.LinkUrl ? `<a href="${e.LinkUrl}" class="link external" target="_blank" data-docid="${e.DocID}">` : TXT_nourl}<img class="lazy lazy-fade-in" data-docid="${e.DocID}" src="${e.PicLinks}" alt="${e.Title ? `${e.Title}` : TXT_notitle}">${e.LinkUrl ? `</a>` : ''}` : TXT_nopic}</div>`;
    },
    title(e) {
        return `${e.LinkUrl ? `<a href="${e.LinkUrl}" class="link external" target="_blank" data-docid="${e.DocID}">` : TXT_nourl}${e.Title ? `${e.Title}` : TXT_notitle}${e.LinkUrl ? `</a>` : ''}`;
    },
    a: {
        start(e) { // tp.a.start(e)
            return `${e.LinkUrl ? `<a href="${e.LinkUrl}" class="link external" target="_blank" data-docid="${e.DocID}">` : TXT_nourl}`;
        },
        end(e) { // tp.a.end(e)
            return `${e.LinkUrl ? `</a>` : ''}`;
        },
    },
    abs(e) {
        return `${e.Abstract ? `<div class="abs" data-docid="${e.DocID}">${e.Abstract}</div>` : `<!-- 暂无摘要 data-docid="${e.DocID}" -->`}`;
    },
    introTitle(e) {
        const hasHttp = /http/.test(e.IntroTitle);
        return `${e.IntroTitle && (hasHttp == false) ? `<div class="bigTitle" data-type="IntroTitle">${e.IntroTitle}</div>` : `<!-- 暂无引题 data-docid="${e.DocID}" -->`}`;
    }
};