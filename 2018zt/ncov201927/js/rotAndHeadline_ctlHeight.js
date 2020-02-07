const rotAndHeadline_ctlHeight = (targetName) => {
    console.log('----///---> rotAndHeadline_ctlHeight.js');

    const $targetName = $(targetName);
    // const maxHeigh = $targetName.siblings().outerHeight();
    // const targetHeight = $targetName.outerHeight();

    // const isOverflow = targetHeight > (maxHeigh + 10);

    // console.log(isOverflow, targetHeight, maxHeigh);

    // if (isOverflow) {
    //     console.log(maxHeigh, targetHeight, isOverflow);
    //     $targetName.find('h2:last').hide();
    //     $targetName.find('.abs:last').hide();
    //     // $targetName.find('.line:last').hide();
    // }

    $targetName.find('.line:last').hide();
};

