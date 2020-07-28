const sortCidTxt = (txt) => {
    let resultArray = '';
    txt.split('\n').map((e, i) => {
        let _array = e.split(/\｜|\|/);

        console.log(_array);

        resultArray += `    {
        name: '${(_array[0]).replace(/^\s+|\s+$/g, "")}',
        cid: ${_array[1] - 0},
        ${_array[2] && _array[2] - 0 ? `nid: ${_array[2] - 0}`, : ''}
        nav: true,
        isHomepageChn: true,
        isBlank: false,
        mod: "--"
    },`;
        /**
         * {
                name: _array[0],
                nav: true, // 是否在导航显示
                isHomepageChn: true, // 是否是首页频道（必须要在导航显示才能生效）
                // url: `/ page / ${ __cid } `,
                // classNameKey: "classNameKey", // 类名识别关键字必须等同于 url 后半段
                cid: __cid,
                // nid: _array[2] - 0,
                isBlank: false,
                mod: "--"
            },`;
         */

        // }
    });

    console.log(resultArray);
    $('.json').html(`const cid = [
${resultArray}
];`);
};

$('.in').on('input', function () {
    sortCidTxt($(this).val());
});
