const del = require('del');
const gulp = require('gulp');
const cleancss = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const jsImport = require('gulp-js-import');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const header = require('gulp-header');
const dateFormat = require('dateformat');


// const pkg = require('./package.json');
const pkg = require('./project-package.json');


const stripDebug = require('gulp-strip-debug');
const usemin = require('gulp-usemin');

// const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const rename = require("gulp-rename");
const clean = require('gulp-clean');
const cache = require('gulp-cache');
const pug = require('gulp-pug');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const browsersync = require('browser-sync').create();
// const reload = browsersync.reload;
const stylus = require('gulp-stylus');
const colors = require('colors');

colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

const getTime = (formats) => {
    const now = new Date();
    return dateFormat(now, formats);
};

const now = getTime("yyyy-mm-dd HH:MM:ss");

const banner = `/**
 * Copyright (c) 2017 - ${getTime("yyyy")} www.xiongan.gov.cn All Rights Reserved.
 * Project ${pkg.name} v${pkg.version}
 * @time ${now}
 */

`;
const bannerCSS_charset_utf_8 = `@charset "utf-8";
${banner}`;

gulp.task('usemin', function () {
    gulp
        .src([
            // './index.html',
        ])
        .pipe(usemin(
            {
                // js: [],
                // css: [],
                // css: [rev],
                // html: [function () { return htmlmin({ collapseWhitespace: true }); }],
                // js: [uglify, rev],
                // inlinejs: [uglify],
                // inlinecss: [cleanCss, 'concat']
            }
        ))
        .pipe(gulp.dest('dist'));
});

gulp.task('clean-dist-bundle', function (cb) {
    del([
        'dist/bundle/',
        // 这里我们使用一个通配模式来匹配 `mobile` 文件夹中的所有东西
        // 'dist/mobile/**/*',
        // 我们不希望删掉这个文件，所以我们取反这个匹配模式
        // '!dist/mobile/deploy.json'
    ], cb);
});

const MAIN_dist = '2018zt/' + pkg.dev_url;

gulp.task('browsersync', function () {
    var files = [
        MAIN_dist + '*.htm',
        MAIN_dist + '*.html',
        MAIN_dist + 'js/*.js',
        MAIN_dist + 'js/inc/*.js',
        MAIN_dist + 'bundle/*.css',
        MAIN_dist + 'bundle/*.js',
        MAIN_dist + 'bundle/*.png',
        MAIN_dist + 'bundle/*.jpg',
        MAIN_dist + 'bundle/*.gif',
        MAIN_dist + 'pug/*.pug',
        MAIN_dist + 'pug/inc/*.pug',
        MAIN_dist + 'styl/*.styl',
    ];

    browsersync
        .init(files, {
            server: {
                baseDir: './'
            },
            notify: true,
        });
});

// pug
gulp.task('pug', function () {
    gulp
        .src(MAIN_dist + 'pug/*.pug')
        .pipe(plumber())
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest(MAIN_dist));
});

gulp.task('js', () => {
    gulp
        .src([
            MAIN_dist + 'js/index.js',
            MAIN_dist + 'js/pages.js',
        ])
        .pipe(jsImport()) // jsImport
        .pipe(gulp.dest('import'))
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })) //错误处理
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest(MAIN_dist + 'bundle'));
});

gulp.task('styl', function () {
    gulp
        .src([
            MAIN_dist + 'styl/index.styl',
            MAIN_dist + 'styl/pages.styl',
        ])
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        .pipe(stylus())
        .pipe(gulp.dest(MAIN_dist + 'bundle'));
});

gulp.task('autowatch', function () {
    gulp.watch(MAIN_dist + 'pug/*.pug', ['pug']);
    gulp.watch(MAIN_dist + 'pug/inc/*.pug', ['pug']);

    gulp.watch(MAIN_dist + 'js/*.js', ['js']);
    gulp.watch(MAIN_dist + 'js/inc/*.js', ['js']);

    gulp.watch(MAIN_dist + 'styl/*.styl', ['styl']);
    gulp.watch(MAIN_dist + 'styl/inc/*.styl', ['styl']);

});

// gulp
gulp.task('default', [
    'autowatch',
    'browsersync'
]);

// --------------- build
gulp.task('built-js', function () {
    gulp
        .src([
            MAIN_dist + 'bundle/index.js',
            // MAIN_dist + 'bundle/xa-labs-analytics.min.js',
        ])
        .pipe(concat('index.min.js')) //合并后的文件名
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })) //错误处理
        .pipe(stripDebug()) // 删除 console
        .pipe(uglify())
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })) //错误处理
        .pipe(header(banner))
        .pipe(gulp.dest(MAIN_dist + 'bundle'));
});


gulp.task('built-js-pages', function () {
    gulp
        .src([
            MAIN_dist + 'bundle/pages.js',
            // MAIN_dist + 'bundle/xa-labs-analytics.min.js',
        ])
        .pipe(concat('pages.min.js')) //合并后的文件名
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })) //错误处理
        .pipe(stripDebug()) // 删除 console
        .pipe(uglify())
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })) //错误处理
        .pipe(header(banner))
        .pipe(gulp.dest(MAIN_dist + 'bundle'));
});

// gulp.task('built-all', function () {
//     gulp
//         .src([
//             MAIN_dist + 'bundle/browser.min.js',
//             MAIN_dist + 'bundle/jq.js',
//             MAIN_dist + 'bundle/jplayer/jquery.jplayer.min.js',
//             // MAIN_dist + 'bundle/qrcode.min.js',
//             MAIN_dist + 'bundle/index.min.js',
//             MAIN_dist + 'bundle/xa-labs-analytics.min.js',
//         ])
//         .pipe(concat('index.all.min.js')) //合并后的文件名
//         .pipe(plumber({
//             errorHandler: notify.onError('Error: <%= error.message %>')
//         })) //错误处理
//         .pipe(header(banner))
//         .pipe(gulp.dest(MAIN_dist + 'bundle'));
// });

gulp.task('built-css', function () {
    gulp
        .src([
            MAIN_dist + 'bundle/index.css',
        ])
        .pipe(rename('index.min.css'))
        .pipe(cleancss({
            advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie8', //保留ie8及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })) //错误处理
        .pipe(header(bannerCSS_charset_utf_8))
        .pipe(gulp.dest(MAIN_dist + 'bundle'));
});

gulp.task('built-css-pages', function () {
    gulp
        .src([
            MAIN_dist + 'bundle/pages.css',
        ])
        .pipe(rename('pages.min.css'))
        .pipe(cleancss({
            advanced: true, //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie8', //保留ie8及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: true, //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        })) //错误处理
        .pipe(header(bannerCSS_charset_utf_8))
        .pipe(gulp.dest(MAIN_dist + 'bundle'));
});

gulp.task('TIPS:', function (params) {
    /**
    colors.setTheme({
        silly: 'rainbow',
        input: 'grey',
        verbose: 'cyan',
        prompt: 'grey',
        info: 'green',
        data: 'grey',
        help: 'cyan',
        warn: 'yellow',
        debug: 'blue',
        error: 'red'
    });
    */
    console.log('[' + `${now}`.input + ']' + `\nGulp Finish build ==//==>`.green + ` ${pkg.name}`.grey + ` Update v${pkg.version}`.error);
});


// build all in the packjson.json ==> npm run build
gulp.task('build', [
    'built-css',
    'built-js',
    // 'built-css-pages',
    // 'built-js-pages',
    // `usemin: long-pic`,
    // `clean-dist: qndj`
    'TIPS:',
]);