const sortCidTxt = (txt) => {
    let resultArray = '';

    txt.split('\n').map((e, i) => {
        let _array = e.split(/\｜|\|/);

        console.log(_array);

        resultArray += `{
    name: '${(_array[0]).replace(/^\s+|\s+$/g, "")}',
    cid: ${_array[1] - 0},${_array[2] && _array[2] - 0 > 0 ? `\n    nid: ${_array[2] - 0},` : ''}
    nav: true,
    isPage: true,
    isBlank: false
},`;
    });

    console.log(resultArray);

    $('.json').html(`const cid = [
    ${resultArray}
];`);
};

$('.in').on('input', function () {
    sortCidTxt($(this).val());
});
