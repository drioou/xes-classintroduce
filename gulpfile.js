/*
 * @Author: duanyong
 * @Date:   2015-06-24 16:52:56
 * @Last Modified by:   duanyong
 * @Last Modified time: 2015-09-25 14:50:07
 */
/*

Steps:

1. Install gulp globally:
cnpm install --global gulp

2. Type the following after navigating in your project folder:
cnpm install gulp gulp-ruby-sass gulp-uglify gulp-rename gulp-minify-css gulp-notify gulp-concat gulp-plumber browser-sync gulp-util gulp-autoprefixer gulp-imagemin imagemin-pngquant gulp-cache gulp-htmlmin gulp-size gulp-rev-append

3. Move this file in your project folder

4. Setup your vhosts or just use static server (see 'Prepare Browser-sync for localhost' below)

5. Type 'Gulp' and ster developing
*/

// 图片压缩
// npm install --save-dev gulp-imagemin
//var gulp = require('gulp');
// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');

// gulp.task('default', function () {
//     return gulp.src('src/images/*')
//         .pipe(imagemin({
//             progressive: true,
//             svgoPlugins: [{removeViewBox: false}],
//             use: [pngquant()]
//         }))
//         .pipe(gulp.dest('dist/images'));
// });


// js代码检测
// npm install gulp-jshint --save-dev
// var jshint = require('gulp-jshint');
// gulp.task('lint', function() {
//   return gulp.src('./lib/*.js')
//     .pipe(jshint())
//     .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
// });

/* Needed gulp config */
var gulp = require('gulp');
// var sass = require('gulp-ruby-sass');
var sass = require("gulp-sass")
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var gutil = require('gulp-util');
var reload = browserSync.reload;
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var cache = require('gulp-cache');
var size = require('gulp-size');
var rimraf = require('gulp-rimraf');  //清理文件夹

// 给页面的引用添加版本号，清除页面引用缓存
 var rev = require('gulp-rev');
 var rev = require('gulp-rev-collector');

/* Setup scss path */
// var paths = {
//     scss: './src/sass/*.scss'
// };
//

// 使用gulp-rev-append给页面的引用添加版本号，清除页面引用缓存。
// cnpm install gulp-rev-append --save-dev
//  在前面加
//  .pipe(rev())

gulp.task('clean', function() {
return gulp.src('./dist/*', { read: false }) // much faster
  .pipe(rimraf());
});



// 压缩图片
gulp.task('minimg', function() {
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        // .pipe(cache(imagemin({
        //     progressive: true,
        //     svgoPlugins: [{
        //         removeViewBox: false
        //     }],
        //     use: [pngquant()]
        // })))
        .pipe(size())
        .pipe(rev())
        .pipe(gulp.dest('./dist/images'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('src/rev/img'));
    // .pipe(notify({
    //     message: 'images  ok!'
    // }));
});

/* Scripts task */
gulp.task('scripts', function() {
    return gulp.src('src/scripts/*.js')
        // .pipe(concat('main.js'))
        // .pipe(gulp.dest('dist/scripts'))
        // .pipe(rename({
            // suffix: '.min'
        // }))
        // .pipe(size())
        // .pipe(uglify().on('error', gutil.log))
        .pipe(rev())
        .pipe(gulp.dest('./dist/scripts'))
        // .pipe(rev.manifest())
        // .pipe(gulp.dest('src/rev/js'));
    // .pipe(notify({
    //     message: 'JS is OK!'
    // }));
});

gulp.task('css', function() {
    return gulp.src('src/styles/*.css')
        // .pipe(autoprefixer({
        //     browsers: ['last 2 versions'],
        //     cascade: true, //是否美化属性值 默认：true 像这样：
        //     //-webkit-transform: rotate(45deg);
        //     //        transform: rotate(45deg);
        //     remove:true //是否去掉不必要的前缀 默认：true 
        // }))
        // .pipe(rename({
        //     suffix: '.min'
        // }))
        // .pipe(size())
        .pipe(minifycss())
        .pipe(rev())
        .pipe(gulp.dest('dist/styles'))
        // .pipe( rev.manifest() )
        // .pipe(gulp.dest('src/rev/css'));
    // .pipe(notify({
    //     message: 'CSS is OK! '
    // }));
});

// 压缩首页
gulp.task('minify', function() {
    return gulp.src(['src/rev/**/*.json' ,'index.shtml'])
        .pipe(revCollector())
        .pipe(htmlmin({
            collapseWhitespace: true, //压缩html 
            removeComments: true, //清除注释
        }))
        .pipe(rename("index.html"))
        .pipe(size())
        .pipe(gulp.dest('./'));
    // .pipe(notify({
    //     message: 'html is  OK!'
    // }));

});

// 压缩子页
gulp.task('minicon', function() {
    return gulp.src(['src/rev/**/*.json','src/content/*.html'])
        .pipe(revCollector())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true, //清除注释
        }))
        .pipe(size())
        .pipe(gulp.dest("dist/content"));
})



/* Sass task */
gulp.task('sass', function() {
    gulp.src('src/sass/main.scss')
        // .on('error', function (err) {
        //        console.error('Error!', err.message)
        //    })
        .pipe(sass().on('error', sass.logError))

    .pipe(gulp.dest('src/styles'));
    // .pipe(notify({
    //     message: 'SASS  is ok!'
    // }));
});



/* Reload task */
gulp.task('bs-reload', function() {
    browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
    browserSync.init(['dist/styles/*.css', 'dist/scripts/*.js'], {
        /*
        I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
        */
        // proxy: 'your_dev_site.url'
        /* For a static server you would use this: */

        server: {
            baseDir: './'
        }

    });
});

/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['clean','sass', 'css', 'scripts', 'browser-sync', 'minify', 'minicon', 'minimg'], function() {
    /* Watch scss, run the sass task on change. */
    gulp.watch(['src/sass/main.scss'], ['sass'])
        /* Watch app.js file, run the scripts task on change. */
    gulp.watch(['src/scripts/*.js'], ['scripts'])
    gulp.watch(['src/images/*.{png,jpg,gif,ico}'], ['minimg'])
    gulp.watch(['src/styles/*.css'], ['css'])
    gulp.watch(['*.shtml'], ['minify'])
    gulp.watch(['src/content/*.html'], ['minicon'])
        /* Watch .html files, run the bs-reload task on change. */
    gulp.watch(['index.html', 'dist/content/*.html'], ['bs-reload']);
});
