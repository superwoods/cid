const schedule = () => {
    console.log('--> schedule.js');
    const $schedule = $('#schedule');
    const $item = $schedule.find('.item');

    const setClass = ($target) => {
        $target.addClass('active').siblings().removeClass('active');
    };

    $item.on('mouseover', function () {
        setClass($(this));
    });

    // 设置默认激活的标签
    const date = function getFormatDate() {
        const nowDate = new Date();
        const year = nowDate.getFullYear();
        const month = nowDate.getMonth() + 1 < 10 ? "0" + (nowDate.getMonth() + 1) : nowDate.getMonth() + 1;
        const date = nowDate.getDate() < 10 ? "0" + nowDate.getDate() : nowDate.getDate();
        // const hour = nowDate.getHours()< 10 ? "0" + nowDate.getHours() : nowDate.getHours();  
        // const minute = nowDate.getMinutes()< 10 ? "0" + nowDate.getMinutes() : nowDate.getMinutes();  
        // const second = nowDate.getSeconds()< 10 ? "0" + nowDate.getSeconds() : nowDate.getSeconds();
        console.log(year + "-" + month + "-" + date);
        return year + "-" + month + "-" + date;
    };
    setClass($schedule.find(`[data-date="${date()}"]`));
};
schedule();