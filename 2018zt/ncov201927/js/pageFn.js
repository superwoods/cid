const pageFn = (cid) => {
    // console.log('1:', cid.isOn);

    // if (cid.hasOwnProperty('isOn') == false) {
    console.log('         | pageFn.js:', cid);
    // const $btn = $('#addData');
    // const cid = $cid.attr('data-cid');
    const cnt = 4; //$cid.find('li').length - 0;
    // console.log(cid, cnt);
    let pgnum = 0;

    $('#addData' + cid).on('click', function () {
        console.log('             | #addData' + cid + ' has on clickFn()!!!');
        // console.log('----> addData:', e);
        if (cid) {
            pgnum++;
        }
        // console.log(cid, cnt, pgnum);
        loadDataListItem({
            cid: cid,
            cnt,
            pgnum,
            isBlank: true,
        });
    });

    // cid.isOn = true;
    // }
    // console.log('2:', cid.isOn);
};