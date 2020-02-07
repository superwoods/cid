const addDataForHomepage = (cid) => {
    // console.log('------> run addDataForHomepage()!!!');
    rotAndHeadline({
        cid: cid[0].cid,
        cnt: 20,
        pgnum: 1,
        targetName: '#rotBig',
        hideName: null,
        hasCol: 0,
    });

    rotPic3({
        cid: cid[1].cid,
        cnt: 6,
        pgnum: 1,
        targetName: '#rotPic3',
    });

    list({
        cid: cid[2].cid,
        cnt: 6,
        pgnum: 1,
        targetName: '#col3List',
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
