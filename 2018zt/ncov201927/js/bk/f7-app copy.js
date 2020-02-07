// var theme = 'ios'; if (location.href.indexOf('theme=md') >= 0) theme = 'md';
// if (location.href.indexOf('theme=aurora') >= 0) theme = 'aurora'; var plugin
// = {     params: {         // theme: 'ios',         root: '#app',     } }; if
// (Framework7.use) Framework7.use(plugin); else if (Framework7.Class &&
// Framework7.Class.use) Framework7.Class.use(plugin);

var routes = [];

var $$ = Dom7;
var theme = 'auto';
if (document.location.search.indexOf('theme=') >= 0) {
    theme = document
        .location
        .search
        .split('theme=')[1]
        .split('&')[0];
}

window.app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'xiongan-today',
    // App id
    id: 'com.myapp.test',
    theme: theme,
    // Enable swipe panel
    panel: {
        swipe: isPc ? 'top' : 'left'
    },
    // Add default routes
    routes: [
        {
            name: '首页',
            path: '/',
            url: '.',
            on: {
                pageAfterIn: function test(e, page) {
                    console.log(e, page);
                    // do something after page gets into the view
                    initGllery();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                },
            }
        }, {
            name: '精彩视频',
            path: '/video/',
            url: './page1.html',
            on: {
                pageAfterIn: function test(e, page) {
                    // console.log(e, page);
                    // do something after page gets into the view
                    aAddClassFn();
                    $('#addData').click();
                },
                pageInit: function (e, page) {
                    // do something when page initialized
                    addData();
                },
            }

        }, {
            name: '聚焦新闻',
            path: '/news/',
            url: './page2.html',
            on: {
                pageAfterIn: function test(e, page) {
                    // console.log(e, page);
                    // do something after page gets into the view
                    aAddClassFn();
                    $('#addData').click();
                },
                pageInit: function (e, page) {
                    addData();
                    // do something when page initialized
                },
            }
        }, {
            path: '(.*)',
            url: 'http://xiongan.gov.cn/404.html'
        }
    ],
    popup: {
        closeOnEscape: true
    },
    sheet: {
        closeOnEscape: true
    },
    popover: {
        closeOnEscape: true
    },
    actions: {
        closeOnEscape: true
    },
    // on: {
    //     // each object key means same name event handler
    //     pageInit: function (page) {
    //         console.log(page);

    //         // do something on page init
    //         app.lazy.create('img.lazy');
    //     },
    //     // popupOpen: function (popup) {
    //     //     // do something on popup open
    //     // },
    // },
});

// var ac1 = app
//     .actions
//     .create({
//         buttons: [
//             {
//                 text: '北京',
//                 bold: true
//             }, {
//                 text: '上海'
//             }, {
//                 text: '取消',
//                 color: 'red'
//             }
//         ]
//     });

// $('.ac-1').on('click', function () {
//     ac1.open();
// });
var mainView = app.views.create('.view-main', { pushState: true });


