// var theme = 'ios'; if (location.href.indexOf('theme=md') >= 0) theme = 'md';
// if (location.href.indexOf('theme=aurora') >= 0) theme = 'aurora'; var plugin
// = {     params: {         // theme: 'ios',         root: '#app',     } }; if
// (Framework7.use) Framework7.use(plugin); else if (Framework7.Class &&
// Framework7.Class.use) Framework7.Class.use(plugin);

var theme = 'auto';

if (document.location.search.indexOf('theme=') >= 0) {
    theme = document
        .location
        .search
        .split('theme=')[1]
        .split('&')[0];
}

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'xiongan',
    // App id
    id: 'com.myapp.test',
    // theme: theme,
    // Enable swipe panel
    panel: {
        // swipe: isPc ? 'top' : 'left',
        swipe: 'left',
    },
    // Add default routes
    routes: routes,
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
var mainView = app.views.create('.view-main', {
    pushState: true,
    on: {
        pageAfterIn: function (e, page) {
            // console.log(e, page);
            // aAddClassFn();
            $('.listBoxMoreBtn').click();

        },
        // pageInit: function (page) {

        //     $(() => {
        //         addDataForHomepage(cid);
        //         setNav(cid);
        //         aAddClassFn();
        //     });

        //     // // console.log('page init', page);

        // },
    }
});


