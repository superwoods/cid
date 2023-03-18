// 用于将文本转换为json格式     2018-11-15 17:00:00
// 在safari浏览器中运行有问题，需要在chrome中运行

const sortCidTxt = (txt) => {
    let resultArray = '';

    txt.split('\n').map((e, i) => {
        console.log('e:', e);

        let _array = e.split(/\||\｜/);

        console.log('_array:', _array);

        resultArray += `{
    name: '${(_array[0]).replace(/^\s+|\s+$/g, "")}',
    cid: ${_array[1] - 0},${_array[2] && _array[2] - 0 > 0 ? `\n    nid: ${_array[2] - 0},` : ''}
    nav: true,
    isPage: true,
    isBlank: false
},`;
    });

    // console.log(resultArray);

    $('.json').html(`const cid = [
    ${resultArray}
];`);
};

$('.in').on('input', function () {
    sortCidTxt($(this).val());
});

sortCidTxt($('.in').val());
