'use strict';

console.log('--> index.js');

var $$ = Dom7;
var MAIN_url = '/2018zt/ncov201927/';
var AJAX_url = 'http://da.wa.news.cn/nodeart/page';

var msgFn = function msgFn(_ref) {
    var cid = _ref.cid,
        pgnum = _ref.pgnum,
        cnt = _ref.cnt;

    return '\n        <a href="http://da.wa.news.cn/nodeart/page?nid=' + cid + '&pgnum=' + pgnum + '&cnt=' + cnt + '&tp=1&orderby=1"\n        class="link external" target="_blank">\u6682\u65E0\u5185\u5BB9</a>\n    ';
};

var cid = [{
    name: '“疫”闻动态',
    cid: 11215323,
    nav: true,
    isHomepageChn: true,
    isBlank: false,
    mod: "--"
}, {
    name: '“疫”图速览',
    cid: 11215324,
    nav: true,
    isHomepageChn: true,
    isBlank: false,
    mod: "--"
}, {
    name: '抗“疫”诗情',
    cid: 11207721,
    nav: true,
    isHomepageChn: true,
    isBlank: false,
    mod: "--"
}, {
    name: '战“疫”之歌',
    cid: 11207723,
    nav: true,
    isHomepageChn: true,
    isBlank: false,
    mod: "--"
}];

/**
{
	"筑坚强堡垒 做防控先锋": {
		"cid": 11215604,
		"nid": 11215933
	},
	"党员干部防疫一线践使命": {
		"cid": 11215605,
		"nid": 11215934
	},
	"备用1": {
		"cid": 11215606,
		"nid": 11215935
	},
	"备用2": {
		"cid": 11215607,
		"nid": 11215936
	}
}
 */

// if (isDev) {
//     cid['2019新冠状病毒专题'].cid = 11207721;
//     // cid['聚焦·新春走基层'].cid = 11207722;
//     // cid['关注·征迁群众'].cid = 11207723;
//     // cid['品味·雄安民俗'].cid = 11208880;
//     // cid['看见·雄安年'].cid = 11208881;
// }


var setNav = function setNav(cid) {
    // console.log('----> setNavFn !!!', e);
    // if (cid && CHObj == false) {
    if (cid) {
        // console.log('----> setNavFn run!!!');
        // CHObj = [];

        // let dom = '<a class="link active" href="/" data-id="homepage">首页</a>';

        // if (isPc == false) {
        //     dom = `
        //         <a class="link external panel-xaLogoA" href="http://www.xiongan.gov.cn" title="中国雄安官网" target="_blank">
        //             <img class="logo lazy lazy-fade-in" src="http://www.xiongan.gov.cn/bundle/xiongan-logo.png" alt="http://www.xiongan.gov.cn">
        //         </a>
        //     ` + dom;
        // }
        var dom = '';

        for (var prop in cid) {
            var col = cid[prop];

            console.log(cid[prop]);

            if (col.hasOwnProperty('isHomepageChn')) {
                if (col.hasOwnProperty('nav')) {
                    var className = 'navBtn-' + col.cid;
                    var _url = '/page/' + col.cid;
                    if (col.nav) {
                        /*
                        const col.name = prop.replace('首页-', '');
                        const classNameKey = col.url.replace(/\/|page/ig, '');
                        console.log(classNameKey == 'guan');
                        if (classNameKey !== 'news') {
                            const className = 'navBtn-' + classNameKey;
                            dom += `
                            <a class="link navBtn ${className} ${classNameKey == 'guan' ? 'active' : ''}" href="${_url}" data-id="id-${col.cid}">
                                <span class="hide">${col.name}</span>
                            </a>
                            <span class="line"></span>
                            `;
                        }
                        */

                        // console.log(className);

                        if (col.isHomepageChn) {
                            dom += '\n                                <a class="link navBtn ' + className + '" href="' + _url + '" data-id="id-' + col.cid + '">\n                                    ' + col.name + '\n                                </a>\n                                <span class="line"></span>\n                        ';
                        } else {
                            dom += '\n                                <a class="link navBtn ' + className + ' navBtn-jumpto" href="' + MAIN_url + '" data-id="id-' + col.cid + '" data-jump="' + className + '">\n                                    ' + col.name + '\n                                </a>\n                                <span class="line"></span>\n                        ';
                        }
                    }

                    // CHObj.push({
                    //     name: col.name,
                    //     cid: col.cid,
                    //     url: col.url,
                    //     isBlank: col.isBlank ? col.isBlank : false,
                    //     // index: col.index ? col.index : 0,
                    // });

                    // if (CHObj.hasOwnProperty(prop)) {

                    // col
                    var $col = $('[data-col="' + prop + '"]');
                    $col.replaceWith('\n                        <a class="colA link" href="' + _url + '">\n                            <div class="' + $col.attr('class') + '">\n                                <div class="hide">' + col.name + '</div>\n                            </div>\n                        </a>\n                    ');

                    // more
                    var $more = $('[data-more="' + prop + '"]');
                    $more.replaceWith('\n                        <div class="more">\n                            <a class="colA link" href="' + _url + '"> ' + $more.html() + ' </a>\n                        </div>\n                    ');
                }
            }
        }

        // a 的 data-id 必须带着，用于触发 active
        $('[data-js="setNav(cid)"]').html('\n            <a class="link navBtn-home active" href="' + MAIN_url + '" data-id="home">\u9996\u9875</a>\n            ' + dom + '            \n        ');

        // 设置 jump 事件
        // console.log(1, $('#navBtn-gz').offset().top);
        // console.log(2, $('#navBtn-pw').offset().top);
        // console.log(3, $('#navBtn-kj').offset().top);

        // $('.navBtn-gz').on('click', (e) => {
        //     $('.page-content').animate({ scrollTop: 1500 }, '3000');
        // });

        // $('.navBtn-pw').on('click', (e) => {
        //     $('.page-content').animate({ scrollTop: 2000 }, '3000');
        // });

        // $('.navBtn-kj').on('click', (e) => {
        //     $('.page-content').animate({ scrollTop: 2900 }, '3000');
        // });
    }
};

// setNav(cid);
var contentPageFn_bannerBgDom = false;
var contentPageFn_navDom = false;
var contentPageFn_footerDom = false;

// 配置内容页
var contentPageFn = function contentPageFn() {
    /**
     * 
        <div class="navbar">
            <div class="navbar-inner">
                <div class="left">
                    <a href="#" class="link back">
                        <i class="icon icon-back"></i>
                        <span>返回</span>
                    </a>
                </div>
                <div class="title">${name}</div>
            </div>
        </div>
     */

    // <!-- banner END -->
    // ${navBarDom('aa', '/')}
    // <!-- demo banner & nav END -->

    if (contentPageFn_bannerBgDom == false) {
        // contentPageFn_bannerBgDom = $('.banner-bg').html();
        contentPageFn_bannerBgDom = $('.banner').prop('outerHTML');
    }
    if (contentPageFn_navDom == false) {
        // contentPageFn_navDom = $('.nav').html();
        contentPageFn_navDom = $('.nav').prop('outerHTML');
    }
    if (contentPageFn_footerDom == false) {
        contentPageFn_footerDom = $('.footer').prop('outerHTML');
    }

    return '\n        <div class="page isPageBanner">\n            <div class="page-content hide-navbar-on-scroll">\n                \n                <div class="box banner-bg">\n                    ' + contentPageFn_bannerBgDom + '\n                    ' + contentPageFn_navDom + '\n                </div>\n\n                <div class="content">\n                    <!-- items START -->\n                    <div class="area listHasImg spListArea">\n                        <div class="spaColTitle"> </div>\n                        <div class="listBox">\n                            <ul class="list isLoading" id="addDataListPos" data-cid="">\n                                <div class="isLoadingTxt">\u6B63\u5728\u52AA\u529B\u52A0\u8F7D...</div>\n                            </ul>\n                        </div>\n                        <div class="isNoContent isNoContent"></div>\n                        <div class="listBoxMoreBtnBox">\n                            <div class="listBoxMoreBtn" id="addData">\u67E5\u770B\u66F4\u591A</div>\n                        </div>\n                    </div>\n                    <!-- items END -->\n                </div>\n\n                <div class="nav mobile-nav-btn">\n                    <div class="panel-openBtnBox">\n                        <a class="panel-open btn-box button button-large button-fill color-white text-color-red" href="#" data-panel="right">\n                            <i class="f7-icons" data-panel="right">bars</i>\n                        </a>\n                    </div>\n                </div>\n\n                <!-- js footer START -->\n                ' + contentPageFn_footerDom + '\n                <!-- js footer END -->\n            </div>\n        </div>\n    ';
};

var aAddClassFn = function aAddClassFn() {
    var $as = $('a');
    // console.log($as.length);
    $as.each(function (i, e) {
        var $e = $(e);
        var isAdd = $e.attr('target') == '_blank';
        // console.log(isAdd);
        if (isAdd) {
            $e.addClass('link external');
        }
    });
};

var TXT_nourl = '<!-- 暂无标题链接 -->';
var TXT_notitle = '<!-- 暂无标题 -->';
var TXT_nopic = '<!-- 暂无图片 / -->';
var tp = {
    pic: function pic(e) {
        return '<div class="pic" data-docid="' + e.DocID + '">' + (e.PicLinks ? (e.LinkUrl ? '<a href="' + e.LinkUrl + '" class="link external" target="_blank" data-docid="' + e.DocID + '">' : TXT_nourl) + '<img class="lazy lazy-fade-in" src="' + e.PicLinks + '" alt="' + (e.Title ? '' + e.Title : TXT_notitle) + '">' + (e.LinkUrl ? '</a>' : '') : TXT_nopic) + '</div>';
    },
    picNoImgNoPicDom: function picNoImgNoPicDom(e) {
        return (e.PicLinks ? '\n            <div class="pic" data-docid="' + e.DocID + '">' + (e.LinkUrl ? '<a href="' + e.LinkUrl + '" class="link external" target="_blank" data-docid="' + e.DocID + '">' : TXT_nourl) + '<img class="lazy lazy-fade-in" src="' + e.PicLinks + '" alt="' + (e.Title ? '' + e.Title : TXT_notitle) + '">' + (e.LinkUrl ? '</a></div>' : '') : TXT_nopic) + '\n       ';
    },
    aImg: function aImg(e) {
        return (e.PicLinks ? (e.LinkUrl ? '<a href="' + e.LinkUrl + '" class="link external" target="_blank" data-docid="' + e.DocID + '">' : TXT_nourl) + '<img class="lazy lazy-fade-in" data-docid="' + e.DocID + '" src="' + e.PicLinks + '" alt="' + (e.Title ? '' + e.Title : TXT_notitle) + '">' + (e.LinkUrl ? '</a>' : '') : TXT_nopic) + '</div>';
    },
    title: function title(e) {
        return '' + (e.LinkUrl ? '<a href="' + e.LinkUrl + '" class="link external" target="_blank" data-docid="' + e.DocID + '">' : TXT_nourl) + (e.Title ? '' + e.Title : TXT_notitle) + (e.LinkUrl ? '</a>' : '');
    },

    a: {
        start: function start(e) {
            // tp.a.start(e)
            return '' + (e.LinkUrl ? '<a href="' + e.LinkUrl + '" class="link external" target="_blank" data-docid="' + e.DocID + '">' : TXT_nourl);
        },
        end: function end(e) {
            // tp.a.end(e)
            return '' + (e.LinkUrl ? '</a>' : '');
        }
    },
    abs: function abs(e) {
        return '' + (e.Abstract ? '<div class="abs" data-docid="' + e.DocID + '">' + e.Abstract + '</div>' : '<!-- \u6682\u65E0\u6458\u8981 data-docid="' + e.DocID + '" -->');
    },
    introTitle: function introTitle(e) {
        var hasHttp = /http/.test(e.IntroTitle);
        return '' + (e.IntroTitle && hasHttp == false ? '<div class="bigTitle" data-type="IntroTitle">' + e.IntroTitle + '</div>' : '<!-- \u6682\u65E0\u5F15\u9898 data-docid="' + e.DocID + '" -->');
    }
};
var pageFn = function pageFn(cid) {
    // console.log('1:', cid.isOn);

    // if (cid.hasOwnProperty('isOn') == false) {
    console.log('         | pageFn.js:', cid);
    // const $btn = $('#addData');
    // const cid = $cid.attr('data-cid');
    var cnt = 4; //$cid.find('li').length - 0;
    // console.log(cid, cnt);
    var pgnum = 0;

    $('#addData' + cid).on('click', function () {
        console.log('             | #addData' + cid + ' has on clickFn()!!!');
        // console.log('----> addData:', e);
        if (cid) {
            pgnum++;
        }
        // console.log(cid, cnt, pgnum);
        loadDataListItem({
            cid: cid,
            cnt: cnt,
            pgnum: pgnum,
            isBlank: true
        });
    });

    // cid.isOn = true;
    // }
    // console.log('2:', cid.isOn);
};
//- listAbsPic mods

var loadDataListItem = function loadDataListItem(_ref2) {
    var cid = _ref2.cid,
        cnt = _ref2.cnt,
        pgnum = _ref2.pgnum,
        targetName = _ref2.targetName,
        cbFn = _ref2.cbFn,
        isBlank = _ref2.isBlank;


    // console.log('----------> loadDataListItem() ', cid);
    // console.log(targetName);

    var index = 0;
    var dom = '';
    // console.log('-------> cnt: ', cnt);
    // console.log('addMore:', pgnum);
    // console.log('ajax:', `http://da.wa.news.cn/nodeart/page?nid=${cid}&pgnum=${pgnum}&cnt=${cnt}&tp=1&orderby=1`);

    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
        data: {
            // nid: isDev ? 11207721 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1
            // type: 'GET',
        },
        dataType: 'JSONP',
        success: function success(data) {
            // console.log(data);
            if (data.status == '-1') {
                $('#addData' + cid).html('暂无更多').addClass('disable');
                var msg = '\n                    <a href="http://da.wa.news.cn/nodeart/page?nid=' + cid + '&pgnum=' + pgnum + '&cnt=' + cnt + '&tp=1&orderby=1" \n                    class="link external" target="_blank">\u6682\u65E0\u5185\u5BB9</a>\n                ';
                if (targetName) {
                    $(targetName + ' .isNoContent').html(msg);
                } else {
                    $('.isNoContent' + cid).html(msg);
                }
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map(function (e, i) {
                        // e.isBlank = isBlank;
                        index++;

                        var aBegin = tp.a.start(e);
                        var aEnd = tp.a.end(e);
                        dom += '\n                        <li data-index="' + index + '" data-docid="' + e.DocID + '"' + (e.PicLinks ? '' : 'class="noPic"') + '>\n                            <div class="text">\n                                ' + aBegin + '\n                                    <div class="title">\n                                        ' + (e.Title ? '' + e.Title : '暂无标题') + '\n                                    </div>\n                                    ' + tp.abs(e) + '\n                                ' + aEnd + '\n                            </div>\n                            ' + tp.picNoImgNoPicDom(e) + '\n                        </li>\n                        ';
                    });
                }
            }

            $('.isLoading').html('').removeClass('isLoading');

            if (targetName) {
                $(targetName).html('\n                    <!-- cid: ' + cid + ', cnt: ' + cnt + ', pgnum: ' + pgnum + ' START -->\n                    ' + dom + '\n                    <!-- cid: ' + cid + ', cnt: ' + cnt + ', pgnum: ' + pgnum + ' END -->\n                ');
            } else {
                $('#addDataListPos' + cid).append('\n                    <!-- cid: ' + cid + ', cnt: ' + cnt + ', pgnum: ' + pgnum + ' START -->\n                    ' + dom + '\n                    <!-- cid: ' + cid + ', cnt: ' + cnt + ', pgnum: ' + pgnum + ' END -->\n                ');
            }

            if (cbFn) {
                cbFn();
            }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $('.isLoading').html(thrownError);
            }
        }
    });
};

// import './memorabilia.js'

// import './rotBigRound.js'
// import './rotBigWithAbs.js'
var rotAndHeadline_initRot_swiperEl = false;

var rotAndHeadline_initRot = function rotAndHeadline_initRot(targetName) {
    rotAndHeadline_initRot_swiperEl = new Swiper(targetName + ' .swiper-container', {
        loop: true,
        watchOverflow: true,
        // autoplay: isDev ? false : true,//可选选项，自动滑动
        pagination: {
            el: targetName + ' .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: targetName + ' .swiper-button-next',
            prevEl: targetName + ' .swiper-button-prev'
        }
    });
};

var rotAndHeadline = function rotAndHeadline(_ref3) {
    var cid = _ref3.cid,
        cnt = _ref3.cnt,
        pgnum = _ref3.pgnum,
        targetName = _ref3.targetName,
        hideName = _ref3.hideName,
        hasCol = _ref3.hasCol;

    // {
    //     cid: cid['新春要闻'].cid,
    //     cnt: 40,
    //     pgnum: 1,
    //     targetName: '#rotBig',
    //     hideName: null,
    //     hasCol: 0,
    // }

    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
        data: {
            // nid: isDev ? 1120310 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1
        },
        dataType: 'JSONP',
        success: function success(data) {
            // console.log(data);
            var dom2 = '';
            var dom3 = '';
            var dom4 = '';
            var dom4_index = 0;
            var dom4_listMaxNum = 4;

            if (data.status == '-1') {
                var msg = '\n                    <a href="http://da.wa.news.cn/nodeart/page?nid=' + cid + '&pgnum=' + pgnum + '&cnt=' + cnt + '&tp=1&orderby=1" \n                    class="link external" target="_blank">\u6682\u65E0\u5185\u5BB9</a>\n                ';
                $(targetName + ' .col1 .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map(function (e, i) {

                        if (e.Attr == 61) {
                            // 图片属性
                            dom2 += '\n                                <div class="swiper-slide item" data-docid="' + e.DocID + '">\n                                    ' + tp.pic(e, i) + '\n                                    <div class="title">\n                                        <div class="text">\n                                            ' + tp.title(e, i) + '\n                                        </div>\n                                    </div>\n                                </div>\n                            ';
                        } else {
                            // if (e.Attr == 63) {
                            // 2020-01-05 修复 +63 普通属性稿件的识别
                            if (dom3 == '') {
                                // 普通属性

                                // 2020-01-23 这里缺少更严格的判断，不太好弄

                                // e.Title = '一二三四五六七八九十一二三四五六七八九十一二三四五六七八';
                                // console.log('dom3:', e.Title.length);
                                if (e.Title.length <= 14) {
                                    dom4_listMaxNum = 7;
                                } else if (e.Title.length <= 28) {
                                    dom4_listMaxNum = 6;
                                } else {
                                    dom4_listMaxNum = 4;
                                }

                                if (hasCol) {
                                    dom3 += '\n                                        <div class="items-col items-col0-0">\n                                            <div class="hide">' + hasCol + '</div>\n                                        </div>\n                                    ';
                                }

                                dom3 += '\n                                <h2 class="tiny-title" data-docid="' + e.DocID + '">\n                                    ' + tp.title(e, i) + '\n                                </h2>\n                                ' + tp.abs(e) + '\n                                <div class="line"></div>\n                            ';
                            } else {
                                dom4_index++;
                                if (dom4_index <= dom4_listMaxNum) {
                                    dom4 += '\n                                        <li data-docid="' + e.DocID + '" >\n                                            ' + tp.title(e, i) + '\n                                        </li>\n                                    ';
                                }
                            }
                        }
                    });
                }
            }

            // // 顶部主头条和摘要
            // if (dom1) {
            //     $(targetName + ' .topBigTitle').html(dom1);
            // } else {
            //     // $(targetName + ' .topBigTitle').hide();
            // }

            if (dom2) {
                $(targetName + ' .swiper-container .swiper-wrapper').html(dom2);

                setTimeout(function () {
                    rotAndHeadline_initRot(targetName);
                }, 600);
            }

            if (dom2 || dom3 || dom4) {
                $(targetName + ' .right').html('\n                    ' + dom3 + '\n                    <ul class="list">\n                        ' + dom4 + '\n                    </ul>\n                ');
            } else if (hideName) {
                $(hideName).hide();
            }
        }
        // error: function (xhr, ajaxOptions, thrownError) {
        //     console.log('error:', xhr, ajaxOptions, thrownError);
        //     if (xhr.status == 404) {
        //         // $('.topBigTitle .isNoContent' + cid).html(thrownError);
        //         $('.col1 .isNoContent').html(thrownError);
        //     }
        // },
    });
};

// import './rotPicTitleAbs.js'
var rotPic3_swiper = void 0;

var rotPic3_rotFn = function rotPic3_rotFn(targetName, cnt) {
    // rotPic3_rotFn(targetName)
    rotPic3_swiper = new Swiper(targetName + ' .swiper-container', {
        watchOverflow: true,
        autoplay: false,
        slidesPerView: isPc ? 3 : 1,
        slidesPerColumn: isPc ? 1 : cnt,
        spaceBetween: 9,
        pagination: {
            el: targetName + ' .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: targetName + ' .swiper-button-next',
            prevEl: targetName + ' .swiper-button-prev'
        }
    });
};

var rotPic3 = function rotPic3(_ref4) {
    var cid = _ref4.cid,
        cnt = _ref4.cnt,
        pgnum = _ref4.pgnum,
        targetName = _ref4.targetName;

    // console.log('----> rotPic3.js');
    /*
    cid: cid['“疫”图速览'].cid,
    cnt: 9,
    pgnum: 1,
    targetName: '#rotPic3',
    rotPic3_rotFn(targetName)
    */

    $.ajax({
        url: AJAX_url,
        data: {
            // nid: isDev ? 1120310 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1
        },
        dataType: 'JSONP',
        success: function success(data) {
            // console.log('----///----> rot3BoxNoPic:', cnt, data);
            var dom1 = '';
            if (data.status == '-1') {
                var msg = msgFn({ cid: cid, pgnum: pgnum, cnt: cnt });
                $(targetName + ' .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map(function (e, i) {
                        dom1 += '\n                            <div class="swiper-slide itemBox" data-docid="' + e.DocID + '">\n                                ' + tp.pic(e, i) + '\n                                <div class="title">\n                                    <div class="text">\n                                        ' + tp.title(e, i) + '\n                                    </div>\n                                </div>\n                            </div>\n                        ';
                        // ${tp.abs(e)}
                    });
                }
            }

            if (dom1) {
                $(targetName + ' .swiper-wrapper').html(dom1);
                rotPic3_rotFn(targetName, cnt);
            }
        }
        // error: function (xhr, ajaxOptions, thrownError) {
        //     console.log(xhr, ajaxOptions, thrownError);
        //     if (xhr.status == 404) {
        //         $(targetName + ' .isNoContent').html(thrownError);
        //     }
        // },
    });
};
var list = function list(_ref5) {
    var cid = _ref5.cid,
        cnt = _ref5.cnt,
        pgnum = _ref5.pgnum,
        targetName = _ref5.targetName,
        hideName = _ref5.hideName;

    // console.log('----------> list:', cid);

    // console.log(!targetName);
    var dom = '';
    var index = 0;

    $.ajax({
        url: AJAX_url,
        data: {
            // nid: isDev ? 11207721 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1
            // type: 'GET',
        },
        dataType: 'JSONP',
        success: function success(data) {
            // console.log(data);
            if (data.status == '-1') {
                var msg = msgFn({ cid: cid, pgnum: pgnum, cnt: cnt });
                $(targetName + ' .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map(function (e, i) {
                        index++;
                        var aBegin = tp.a.start(e, index);
                        var aEnd = tp.a.end(e, index);
                        dom += '\n                            <li data-index="' + index + '" data-docid="' + e.DocID + '"' + (e.PicLinks ? '' : 'class="noPic"') + '>\n                                <div class="text">\n                                    ' + aBegin + '\n                                        <div class="title">\n                                            ' + (e.Title ? '' + e.Title : '暂无标题') + '\n                                        </div>\n                                    ' + aEnd + '\n                                </div>\n                            </li>';
                    });
                }
            }

            if (dom !== '') {
                $(targetName).find('.list').html('\n                        <!-- cid: ' + cid + ', cnt: ' + cnt + ', pgnum: ' + pgnum + ' START -->\n                        ' + dom + '\n                        <!-- cid: ' + cid + ', cnt: ' + cnt + ', pgnum: ' + pgnum + ' END -->\n                    ');
            } else if (hideName) {
                $(hideName).hide();
            }
        }
        // error: function (xhr, ajaxOptions, thrownError) {
        //     console.log(xhr, ajaxOptions, thrownError);
        //     if (xhr.status == 404) {
        //         $(targetName + ' .isNoContent').html(thrownError);
        //     }
        // },
    });
};
// import './rotPicTitleAbsAddSidebar.js'

// import './rotAndHeadline.js'
// import './rotAndHeadlineWithBigTitle.js'
// import './rotAndHeadlineWithBigTitleNoList.js'
// import './rotAndHeadline_ctlHeight.js'

var rotBigInitRot_swiperEl = false;
var rotBigInitRot = function rotBigInitRot(targetName, cnt) {
    rotBigInitRot_swiperEl = new Swiper(targetName + ' .swiper-container', {
        // loop: true,
        // freeMode: true,
        watchOverflow: true,
        autoplay: false,
        slidesPerView: 1,
        slidesPerColumn: isPc ? 1 : cnt,
        spaceBetween: 10,
        pagination: {
            el: targetName + ' .swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: targetName + ' .swiper-button-next',
            prevEl: targetName + ' .swiper-button-prev'
        }
    });
};

var rotBig = function rotBig(_ref6) {
    var cid = _ref6.cid,
        cnt = _ref6.cnt,
        pgnum = _ref6.pgnum,
        targetName = _ref6.targetName,
        hideName = _ref6.hideName;

    // console.log('----///------> rotBig() ', cid);

    var dom = '';
    var index = 0;

    $.ajax({
        url: 'http://da.wa.news.cn/nodeart/page',
        data: {
            // nid: isDev ? 11203173 : cid, // 11203173
            nid: cid,
            pgnum: pgnum,
            cnt: cnt,
            tp: 1,
            orderby: 1
            // type: 'GET',
        },
        dataType: 'JSONP',
        success: function success(data) {
            // console.log(data);
            if (data.status == '-1') {
                var msg = '\n                    <a href="http://da.wa.news.cn/nodeart/page?nid=' + cid + '&pgnum=' + pgnum + '&cnt=' + cnt + '&tp=1&orderby=1"\n                    class="link external" target="_blank">\u6682\u65E0\u5185\u5BB9</a>\n                ';
                $(targetName + ' .isNoContent').html(msg);
            } else {
                if (data.data.list.length > 0) {
                    data.data.list.map(function (e, i) {
                        index++;
                        var aBegin = tp.a.start(e, index);
                        var aEnd = tp.a.end(e, index);
                        dom += '\n                            <div class="swiper-slide item">\n                                <li data-index="' + index + '" data-docid="' + e.DocID + '"' + (e.PicLinks ? '' : 'class="noPic"') + '>\n                                    ' + tp.picNoImgNoPicDom(e, index) + '\n                                    <div class="title">\n                                        <div class="text">\n                                            ' + tp.title(e, index) + '\n                                        </div>\n                                    </div>\n                                </li>\n                            </div>\n                        ';
                    });
                }
            }

            if (targetName && dom !== '') {
                $(targetName + ' .swiper-wrapper').html('\n                    <!-- cid: ' + cid + ', cnt: ' + cnt + ', pgnum: ' + pgnum + ' START -->\n                    ' + dom + '\n                    <!-- cid: ' + cid + ', cnt: ' + cnt + ', pgnum: ' + pgnum + ' END -->\n                ');

                setTimeout(function () {
                    // console.log('setTimeout:', targetName);
                    rotBigInitRot(targetName, cnt);
                }, 600);
            } else if (hideName) {
                $(hideName).hide();
            }
        },
        error: function error(xhr, ajaxOptions, thrownError) {
            console.log(xhr, ajaxOptions, thrownError);
            if (xhr.status == 404) {
                $(targetName + ' .isNoContent').html(thrownError);
            }
        }
    });
};

// import './itemListLeftandRight.js'
// import './rot2Box.js'
// import './rot3BoxNoPic.js'
// import './rotPicABigAndMoreTiny.js'
// import './picAndList.js'
// import './picList.js'
// import './picTitleAbsAndList.js'

// import './bigTitle.js'
var addDataForHomepage = function addDataForHomepage(cid) {
    // console.log('------> run addDataForHomepage()!!!');
    rotAndHeadline({
        cid: cid[0].cid,
        cnt: 20,
        pgnum: 1,
        targetName: '#rotBig',
        hideName: null,
        hasCol: 0
    });

    rotPic3({
        cid: cid[1].cid,
        cnt: 6,
        pgnum: 1,
        targetName: '#rotPic3'
    });

    list({
        cid: cid[2].cid,
        cnt: 6,
        pgnum: 1,
        targetName: '#col3List'
        // hideName: '#col3List',
    });

    rotBig({
        cid: cid[3].cid,
        cnt: 4,
        pgnum: 1,
        targetName: '#rotBig2',
        hideName: null
    });

    // picList({
    //     cid: cid['聚焦·新春走基层'].cid,
    //     cnt: 4,
    //     pgnum: 1,
    //     targetName: '#picList4', // .pic & ul.list
    //     // hideName: '#picList4'
    // });


    // itemListLeftandRight({
    //     cid: cid['关注·征迁群众'].cid,
    //     cnt: 3,
    //     pgnum: 1,
    //     targetName: '#navBtn-gz'
    // });


    // // initRotPicTitleAbs('#rotPicTitleAbs');

    // picTitleAbsAndList({
    //     cid: cid['展示·雄安这一年'].cid,
    //     cnt: 20,
    //     pgnum: 1,
    //     targetName: '#picTitleAbsAndList',
    //     hideName: null,
    // });


    // picList({
    //     cid: cid['精彩回顾'].cid,
    //     cnt: 12,
    //     pgnum: 1,
    //     targetName: '#picList', // .pic & ul.list
    //     hideName: '#picList'
    // });


    // rotAndHeadline(cid['文化新闻眼'].cid);

    // rotBigRound({
    //     cid: cid['雄安非遗'].cid,
    //     cnt: 6,
    //     pgnum: 1,
    //     boxName: '#rotBigRound',
    //     cbFn: function () {
    //         console.log('----> run cbFn');

    //         rotPicABigAndMoreTiny({
    //             cid: cid['多彩雄安'].cid,
    //             rotName: '#rotPicABigAndMoreTiny',
    //             hideName: '.rotPicABigAndMoreTiny-autoHide'
    //         });

    //         picAndList({
    //             cid: cid['白洋淀故事'].cid,
    //             cnt: 5,
    //             pgnum: 1,
    //             targetName: '#addData-ting', // .pic & ul.list
    //         });

    //         picAndList({
    //             cid: cid['每日一诗'].cid,
    //             cnt: 5,
    //             pgnum: 1,
    //             targetName: '#addData-shang', // .pic & ul.list
    //         });


    //         rot3BoxNoPic({
    //             cid: cid['红色基因'].cid,
    //             cnt: 21,
    //             targetName: '#rot3BoxNoPic',
    //         });


    //         itemListLeftandRight({
    //             cid: cid['理论创新'].cid,
    //             cnt: 4,
    //             pgnum: 1,
    //             targetName: '#itemListLeftandRight2'
    //         });


    //         loadDataListItem({
    //             cid: cid['雄安书苑'].cid,
    //             cnt: 3,
    //             pgnum: 1,
    //             targetName: '#spBox-yue .spBox-yue-listBox',
    //             // cbFn: function () {

    //             // },
    //             // isBlank: true,
    //         });
    //     }
    // });


    // rotBox({
    //     cid: cid['雄安新区最具地缘特色旅游美食'].cid,
    //     cnt: 18,
    //     pgnum: 1,
    //     rotTargetName: '#rotBox1'
    // });

    // rotBox({
    //     cid: cid['雄安新区最具文化底蕴旅游美食'].cid,
    //     cnt: 18,
    //     pgnum: 1,
    //     rotTargetName: '#rotBox2'
    // });

    // rotBox({
    //     cid: cid['雄安新区旅游美食优秀奖'].cid,
    //     cnt: 18,
    //     pgnum: 1,
    //     rotTargetName: '#rotBox3'
    // });


    // loadDataCol1(cid['新闻聚焦'].cid);
    // // loadDataRot2(cid['看建雄安'].cid);
    // // loadDataRotBoxBox(cid['看建雄安'].cid, '#rotPicTitleAbs');

    // rotAndHeadline(cid['要闻聚焦'].cid);

    // loadDataListItem2({
    //     cid: cid['建设者风采'].cid,
    //     cnt: 6,
    //     pgnum: 1,
    //     targetName: '#items-col3',
    // });

    // loadDataListItem3({
    //     cid: cid['招标公告'].cid,
    //     cnt: 12,
    //     pgnum: 1,
    //     targetName: '#items-col4',
    // });

    // loadMemorabilia(cid['重要时刻'].cid);

    // loadDataRot3_1(cid['参建单位'].cid);

    // loadGushi(cid['雄安建设者·说出你的故事'].cid);

    // loadDataRot3(cid['典型风采'].cid);

    // loadDataListItem({
    //     cid: cid['党建先锋'].cid,
    //     cnt: 4,
    //     pgnum: 1,
    //     targetName: '#items-col3',
    // });
};

// import './bk/mobile/index.js'

var setCol_setTimeout = void 0;

var routes = [{
    name: '首页',
    path: '/2018zt/ncov201927/',
    url: '.',
    on: {
        // pageAfterIn: function (e, page) {
        //     console.log('pageAfterIn: ', e, page);
        //     // aAddClassFn();
        // },
        pageInit: function pageInit(e, page) {
            // console.log(e, page);
            setNav(cid); // 必须在前面，通过他设置 CHObj
            // if (CHObj) {
            //     setHomepageCol(CHObj);
            // }
            addDataForHomepage(cid);
            aAddClassFn();
            // $$('.navBtn').removeClass('active');
            // $$('.navBtn-home').addClass('active');
        }
    }
}, {
    name: '列表页',
    path: '/page/:ch_cid',
    content: contentPageFn(),
    on: {
        pageInit: function pageInit(e, page) {
            setNav(cid);
            // console.log(page.route.params.ch_cid);
            console.log('== 列表页 pageInit ====>:');

            var ch_cid = page.route.params.ch_cid;
            var isPage = window.location.href.indexOf(ch_cid) !== -1;

            console.log('     | isPage:', isPage);
            console.log('     | ch_cid:', ch_cid);

            var setCol = function setCol() {
                // for (let prop in cid) {
                //     const isCHObjCidObj = cid[prop].cid == ch_cid;
                //     if (isCHObjCidObj) {
                //         $$('.navbar .title, .spaColTitle').text(cid[prop].name);
                //         // // 读取列表数据
                //         // addData({
                //         //     cid: CHObj[prop].cid,
                //         //     CHObj_prop: CHObj[prop],
                //         //     cnt: 4,
                //         // });
                //         // clearTimeout(setCol_setTimeout);
                //         // setCol_setTimeout = null;
                //     }
                // }
                // $$('.navbar .title, .spaColTitle').text(CHObj[ch_cid].name);

                // 设置导航按钮
                $$('[data-id]').removeClass('active');

                var $active = $$('[data-id="id-' + ch_cid + '"]');
                $active.addClass('active');

                $$('.navbar .title, .spaColTitle').text($active.text());

                $$('.spaColTitle').prepend('\n                        <div class="' + $active.attr('class') + '"></div>\n                        <div class="middot"></div>\n                    ');

                clearTimeout(setCol_setTimeout);
                setCol_setTimeout = null;
            };

            if (isPage) {
                if (cid) {
                    setCol_setTimeout = setTimeout(setCol, 400);
                }

                // 设置数据写入 id
                var $id = $$('#addDataListPos');
                $id.attr('id', 'addDataListPos' + ch_cid);
                $id.attr('data-cid', ch_cid);

                // 暂无内容位置 (只能替换 class 名，新增会导致多个class)
                $$('.isNoContent').attr('class', 'isNoContent isNoContent' + ch_cid);

                // 查看更多按钮
                $$('#addData').attr('id', 'addData' + ch_cid);

                pageFn(ch_cid);
            }
        }
    },
    navbar: {
        hideOnPageScroll: true
    }
}, {
    path: '(.*)',
    url: 'http://www.xiongan.gov.cn/404.html'
}];

// var theme = 'ios'; if (location.href.indexOf('theme=md') >= 0) theme = 'md';
// if (location.href.indexOf('theme=aurora') >= 0) theme = 'aurora'; var plugin
// = {     params: {         // theme: 'ios',         root: '#app',     } }; if
// (Framework7.use) Framework7.use(plugin); else if (Framework7.Class &&
// Framework7.Class.use) Framework7.Class.use(plugin);

var theme = 'auto';

if (document.location.search.indexOf('theme=') >= 0) {
    theme = document.location.search.split('theme=')[1].split('&')[0];
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
        swipe: 'left'
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
    }
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
        pageAfterIn: function pageAfterIn(e, page) {
            // console.log(e, page);
            // aAddClassFn();
            $('.listBoxMoreBtn').click();
        }
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