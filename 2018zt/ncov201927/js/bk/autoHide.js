console.log('---> autoHide.js');
const autoHide = (className) => {
    const $targets = $(className);
    const targetTxt = $targets.html();

    console.log(targetTxt);

    const isEmpty = /<!---->/ig.test(targetTxt);
    if (isEmpty) {
        $targets.hide().prev('.items-col').hide();
    }
};

autoHide('.rotBigBox');
autoHide('.items');
autoHide('.textAndImgBox');
autoHide('.topBigTitle');
autoHide('.col1');