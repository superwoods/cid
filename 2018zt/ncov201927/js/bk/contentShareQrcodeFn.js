console.log('----> contentShareQrcodeFn.js');
// if (isPc) {
const contentShareQrcodeFn = () => {
    const $target = $('.qrcodeBox-in');
    const size = {
        width: $target.width(),
        height: $target.height()
    };
    const qrcode = new QRCode(document.getElementById("qrcode"), size);
    qrcode.makeCode(window.location.href);
};
contentShareQrcodeFn();
// }