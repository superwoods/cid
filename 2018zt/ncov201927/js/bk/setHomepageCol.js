// let isSetHomepageCol = false;

// const setHomepageCol = (CHObj) => {
//     // <a class="link" href="${e.url}${e.cid}">${e.name}</a>
//     if (isSetHomepageCol == false) {
//         // console.log(CHObj);
//         for (const prop in CHObj) {

//             // if (CHObj.hasOwnProperty(prop)) {
//             const e = CHObj[prop];

//             console.log(e);

//             // col
//             const $col = $(`[data-col="${e.name}"]`);
//             $col.replaceWith(`
//                     <a class="colA link" href="${e.url}${e.cid}">
//                         <div class="${$col.attr('class')}">
//                             <div class="hide">${e.name}</div>
//                         </div>
//                     </a>
//                 `);

//             // more
//             const $more = $(`[data-more="${e.name}"]`);
//             $more.replaceWith(`
//                 <div class="more">
//                     <a class="colA link" href="${e.url}${e.cid}"> ${$more.html()} </a>
//                 </div>
//             `);
//             // }
//         }
//     }
// };

