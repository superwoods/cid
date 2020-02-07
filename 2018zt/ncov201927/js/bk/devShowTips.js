const devShowTips = () => {
    const isDevShow = /isDevShowTips/ig.test(window.location.href);
    if (isDevShow) {
        let showTxt = '';

        const $body = $('body');

        $('body')
            .find('[tips]')
            .each((i, e) => {
                const txts = $(e).attr('tips').split(' ');
                let txt = '';
                for (let index = 0; index < txts.length; index++) {
                    if (txts[index]) {
                        txt += txts[index] + ' | ';
                        // console.log(index);
                    }

                }
                console.log(txt);



                showTxt += `
                <div>
                    | ${i} | ${txt}
                <div>
                `;
            });

        $body.prepend(`
            <style>
                .devShowTips {
                    padding: 30px;
                    font-size: 14px;
                    line-height: 22px;
                    margin: 20px;
                    border: 1px red solid;
                    border-radius: 8px;
                }
                .devShowTips sub {
                    color: #666;
                    font-style: italic;
                }
                .devShowTips h1 {
                    line-height: 60px;
                    margin: 20px 0 30px;
                    border-bottom: 1px red solid;
                }
            </style>
            <div class="devShowTips">
                <sub>> build by DevShowTips，only for dev mod</sub>
                <h1># 发稿规则</h1>
                ${showTxt}
            <div>
        `);
    }
};

devShowTips();

