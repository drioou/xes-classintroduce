// /*
//  * @Author: duanyong
//  * @Date:   2015-06-24 16:52:56
//  * @Last Modified by:   duanyong
//  * @Last Modified time: 2015-09-25 14:50:07
//  */
// /*

// Steps:

// 1. Install gulp globally:
// cnpm install --global gulp

// 2. Type the following after navigating in your project folder:
// cnpm install gulp gulp-ruby-sass gulp-uglify gulp-rename gulp-minify-css gulp-notify gulp-concat gulp-plumber browser-sync gulp-util gulp-autoprefixer gulp-imagemin imagemin-pngquant gulp-cache gulp-htmlmin gulp-size gulp-rev-append

// 3. Move this file in your project folder

// 4. Setup your vhosts or just use static server (see 'Prepare Browser-sync for localhost' below)

// 5. Type 'Gulp' and ster developing
// */

// // 图片压缩
// // npm install --save-dev gulp-imagemin
// //var gulp = require('gulp');
// // var imagemin = require('gulp-imagemin');
// // var pngquant = require('imagemin-pngquant');

// // gulp.task('default', function () {
// //     return gulp.src('src/images/*')
// //         .pipe(imagemin({
// //             progressive: true,
// //             svgoPlugins: [{removeViewBox: false}],
// //             use: [pngquant()]
// //         }))
// //         .pipe(gulp.dest('dist/images'));
// // });


// // js代码检测
// // npm install gulp-jshint --save-dev
// // var jshint = require('gulp-jshint');
// // gulp.task('lint', function() {
// //   return gulp.src('./lib/*.js')
// //     .pipe(jshint())
// //     .pipe(jshint.reporter('YOUR_REPORTER_HERE'));
// // });

// /* Needed gulp config */
// var gulp = require('gulp');
// // var sass = require('gulp-ruby-sass');
// var sass = require("gulp-sass")
// var uglify = require('gulp-uglify');
// var rename = require('gulp-rename');
// var notify = require('gulp-notify');
// var minifycss = require('gulp-minify-css');
// var autoprefixer = require('gulp-autoprefixer');
// var concat = require('gulp-concat');
// var plumber = require('gulp-plumber');
// var browserSync = require('browser-sync');
// var gutil = require('gulp-util');
// var reload = browserSync.reload;
// var htmlmin = require('gulp-htmlmin');
// var imagemin = require('gulp-imagemin');
// var pngquant = require('imagemin-pngquant');
// var cache = require('gulp-cache');
// var size = require('gulp-size');
// var rimraf = require('gulp-rimraf');
// var del = require('del');
// //清理文件夹

// // 给页面的引用添加版本号，清除页面引用缓存
// var rev = require('gulp-rev');
// var revCollector = require('gulp-rev-collector');

// /* Setup scss path */
// // var paths = {
// //     scss: './src/sass/*.scss'
// // };
// //

// // 使用gulp-rev-append给页面的引用添加版本号，清除页面引用缓存。
// // cnpm install gulp-rev-append --save-dev
// //  在前面加
// //  .pipe(rev())


// var cssSrc = ['main.scss'],
//     cssDest = 'dist/css',
//     jsSrc = 'src/js/*.js',
//     jsDest = 'dist/js',
//     fontSrc = 'src/fonts/*',
//     fontDest = 'dist/font',
//     imgSrc = 'src/img/*',
//     imgDest = 'dist/img',
//     cssRevSrc = 'src/css/revCss',
//     condition = true;


// function changePath(basePath){
//     var nowCssSrc = [];
//     for (var i = 0; i < cssSrc.length; i++) {
//         nowCssSrc.push(cssRevSrc + '/' + cssSrc[i]);
//     }
//     return nowCssSrc;
// }


// gulp.task('delRevCss', function(){
//     del([cssRevSrc,cssRevSrc.replace('src/', 'dist/')]);
// })

// //意外出错？清除缓存文件
// gulp.task('clean', function(){
//     del([cssRevSrc ,cssRevSrc.replace('src/', 'dist/')]);
// })


// /* Sass task */
// gulp.task('sass', function() {
//     gulp.src('src/sass/main.scss')
//         .pipe(sass().on('error', sass.logError))
//         // .on('error', function (err) {
//         //        console.error('Error!', err.message)
//         //    })
//         .pipe(gulp.dest('src/revstyles'));

// });


// // 压缩图片
// gulp.task('minimg', function() {
//     gulp.src('src/images/*.{png,jpg,gif,ico}')
//         // .pipe(cache(imagemin({
//         //     progressive: true,
//         //     svgoPlugins: [{
//         //         removeViewBox: false
//         //     }],
//         //     use: [pngquant()]
//         // })))
//         .pipe(size())
//         .pipe(rev())
//         .pipe(gulp.dest('./dist/images'))
//         .pipe(rev.manifest({
//             merge: true
//         }))
//         .pipe(gulp.dest('src/rev/img'));
//     // .pipe(notify({
//     //     message: 'images  ok!'
//     // }));
// });

// /* Scripts task */
// gulp.task('scripts', function() {
//     return gulp.src('src/scripts/*.js')
//         // .pipe(concat('main.js'))
//         // .pipe(gulp.dest('dist/scripts'))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(size())
//         // .pipe(uglify().on('error', gutil.log))
//         .pipe(rev())
//         .pipe(gulp.dest('./dist/scripts'))
//         .pipe(rev.manifest({
//             merge: true
//         }))
//         .pipe(gulp.dest('src/rev/js'));
//     // .pipe(notify({
//     //     message: 'JS is OK!'
//     // }));

// });
// gulp.task('revcss', function() {
//     return gulp.src('src/revstyles/*.css')
//         .pipe(revCollector())
//         .pipe(gulp.dest('src/styles'));
//     // .pipe(notify({
//     //     message: 'CSS is OK! '
//     // }));

// });


// gulp.task('css', function() {
//     return gulp.src(['src/rev/**/*.json','src/styles/*.css'])
//         .pipe(revCollector())
//         .pipe(autoprefixer({
//             browsers: ['last 2 versions'],
//             cascade: true, //是否美化属性值 默认：true 像这样：
//             //-webkit-transform: rotate(45deg);
//             //        transform: rotate(45deg);
//             remove: true //是否去掉不必要的前缀 默认：true
//         }))
//         .pipe(rename({
//             suffix: '.min'
//         }))
//         .pipe(size())
//         .pipe(minifycss())
//         .pipe(rev())
//         .pipe(gulp.dest('dist/styles'))
//         .pipe(rev.manifest({
//             merge: true
//         }))
//         .pipe(gulp.dest('src/rev/css'));
//     // .pipe(notify({
//     //     message: 'CSS is OK! '
//     // }));

// });



// // gulp.task('sass', function() {
// //     gulp.src(['src/rev/**/*.json', 'src/sass/main.scss'])
// //         .pipe(revCollector())
// //         // .on('error', function (err) {
// //         //        console.error('Error!', err.message)
// //         //    })
// //         .pipe(sass().on('error', sass.logError))

// //     .pipe(gulp.dest('src/styles'));
// //     // .pipe(notify({
// //     //     message: 'SASS  is ok!'
// //     // }));
// // });


// // 压缩首页
// gulp.task('revhtml', function() {
//     return gulp.src(['src/rev/**/*.json', 'src/index.shtml'])
//         .pipe(revCollector())
//         .pipe(gulp.dest('./src/rev/html'));
//     // .pipe(notify({
//     //     message: 'html is  OK!'
//     // }));
// });





// // 压缩首页
// gulp.task('minify', function() {
//     return gulp.src('./src/rev/index.shtml')
//         .pipe(htmlmin({
//             collapseWhitespace: true, //压缩html
//             removeComments: true, //清除注释
//         }))
//         .pipe(rename("index.html"))
//         .pipe(size())
//         .pipe(gulp.dest('./dit/'));
//     // .pipe(notify({
//     //     message: 'html is  OK!'
//     // }));
// });

// gulp.task('revcon', function() {
//     return gulp.src(['src/rev/**/*.json', 'src/content/*.html'])
//         .pipe(revCollector())
//         .pipe(gulp.dest('./src/rev/content'));
//     // .pipe(notify({
//     //     message: 'html is  OK!'
//     // }));
// });



// // 压缩子页
// gulp.task('minicon', function() {
//     return gulp.src('./src/rev/content/*.html')
//         .pipe(htmlmin({
//             collapseWhitespace: true,
//             removeComments: true, //清除注释
//         }))
//         .pipe(size())
//         .pipe(gulp.dest("dist/content"));
// });







// /* Reload task */
// gulp.task('bs-reload', function() {
//     browserSync.reload();
// });

// /* Prepare Browser-sync for localhost */
// gulp.task('browser-sync', function() {
//     browserSync.init(['dist/styles/*.css', 'dist/scripts/*.js'], {
//         /*
//         I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
//         */
//         // proxy: 'your_dev_site.url'
//         /* For a static server you would use this: */

//         server: {
//             baseDir: './'
//         }

//     });
// });

// /* Watch scss, js and html files, doing different things with each. */
// gulp.task('default', ['sass',  'browser-sync', 'minify','delRevCss','revcon','revhtml', 'minicon', 'revcss','minimg','css', 'scripts'], function() {
//     /* Watch scss, run the sass task on change. */
//     gulp.watch(['src/sass/main.scss'], ['sass'])
//         /* Watch app.js file, run the scripts task on change. */
//     gulp.watch(['src/scripts/*.js'], ['scripts'])
//     gulp.watch(['src/images/*.{png,jpg,gif,ico}'], ['minimg'])
//     gulp.watch(['src/revstyles/*.css'], ['revcss'])
//     gulp.watch(['src/rev/content/*.html'], ['revhtml'])
//     gulp.watch(['src/styles/*.css'], ['css'])
//     gulp.watch(['*.shtml'], ['minify'])
//     gulp.watch(['src/content/*.html'], ['minicon'])
//         /* Watch .html files, run the bs-reload task on change. */
//     gulp.watch(['index.html', 'dist/content/*.html'], ['bs-reload']);
// });



// // var gulp = require('gulp'),
// //     uglify = require('gulp-uglify'),
// //     minifyCss = require('gulp-minify-css'),
// //     concat = require('gulp-concat'),
// //     rename = require('gulp-rename'),
// //     // compass = require('gulp-compass'),
// //     imagemin = require('gulp-imagemin'),
// //     cache = require('gulp-cache'),
// //     clean = require('gulp-clean'),
// //     rev = require('gulp-rev'),
// //     revCollector = require('gulp-rev-collector'),
// //     requirejsOptimize = require('gulp-requirejs-optimize'),
// //     browserSync = require('browser-sync'),
// //     reload = browserSync.reload;

// // /**
// // * 配置选项
// // */
// // var config = {
// //   cssUrl : 'src/sass/*.scss',
// //   jsUrl : 'src/scripts/*.js',
// //   htmlUrl : ['src/**/*.html','index.shtml'],
// //   imageUrl : 'src/images/**/*',
// // }

// // /**
// // * css文件处理
// // */
// // gulp.task('buildCss',function(){
// //   return gulp.src( config.cssUrl )
// //     //   .pipe(compass({
// //     //   config_file: 'config.rb',
// //     //   css: 'sources/sass',
// //     //   sass: 'sources/sass'
// //     // }))
// //     .pipe(concat('main.css'))
// //     .pipe(minifyCss())
// //     .pipe(rename({basename: 'main', suffix: '.min'}))
// //     .pipe(rev())
// //     .pipe(gulp.dest('src/css'))
// //     .pipe(rev.manifest())
// //     .pipe(gulp.dest('src/rev/css'));
// // });

// // /**
// // * js文件处理
// // */
// // gulp.task('buildJs',['move'],function(){
// //   return gulp.src( config.jsUrl )
// //     //合并require模块js
// //     // .pipe(requirejsOptimize())
// //     //压缩js
// //     .pipe(uglify())
// //     .pipe(rev())
// //     //输出文件
// //     .pipe(gulp.dest('src/js'))
// //     .pipe(rev.manifest())
// //     .pipe(gulp.dest('src/rev/js'));
// // });

// // /**
// //  * image压缩
// //  */
// // gulp.task('buildImg', function() {
// //   return gulp.src( config.imageUrl )
// //     .pipe(imagemin({
// //         distgressive: true,
// //         progressive: true,
// //         interlaced: true,
// //         svgoPlugins: [{removeViewBox: false}]
// //     }))
// //     .pipe(rev())
// //     .pipe(gulp.dest('src/images'))
// //     .pipe(rev.manifest())
// //     .pipe(gulp.dest('src/rev/img'));
// // });

// // /**
// //  * html
// //  */
// // gulp.task('buildHtml', function() {
// //   return gulp.src( config.htmlUrl )
// //     .pipe(gulp.dest('src'));
// // });

// // gulp.task('rimg', ['buildImg'], function(){
// //   return gulp.src(['src/rev/img/*.json', 'src/**/*'])
// //     .pipe(revCollector())
// //     .pipe(gulp.dest('src'))
// //     .pipe(reload({ stream:true }));
// // });

// // gulp.task('rcss', ['buildCss'], function(){
// //   return gulp.src(['src/rev/css/*.json', 'src/**/*'])
// //     .pipe(revCollector())
// //     .pipe(gulp.dest('src'))
// //     .pipe(reload({ stream:true }));
// // });

// // gulp.task('rjs', ['buildJs'], function(){
// //   return gulp.src(['src/rev/js/*.json', 'src/**/*'])
// //     .pipe(revCollector())
// //     .pipe(gulp.dest('src'))
// //     .pipe(reload({ stream:true }));
// // });

// // /**
// //  * browserSync服务监听
// //  *
// //  */
// // gulp.task('serve',['rimg', 'rjs', 'rcss', 'buildHtml'], function() {
// //   browserSync({
// //     server: {
// //       baseDir: './src/'
// //     }
// //   });

// //   //监听image文件
// //   gulp.watch( config.imageUrl, ['rimg']);
// //   //监听scss文件
// //   gulp.watch( config.cssUrl, ['rcss']);
// //   //监听js文件
// //   gulp.watch( config.jsUrl, ['rjs']);
// //   //监听html文件
// //   gulp.watch( config.htmlUrl, ['buildHtml']);
// // });

// // /**
// //  * 移动requirejs主文件
// //  */
// // gulp.task('move', function() {
// //   return gulp.src(['sources/javascripts/require.js'])
// //     .pipe(gulp.dest('src/js'));
// // });

// // /**
// //  * 版本号文件替换
// //  */
// // gulp.task('rev',['buildImg', 'buildJs', 'buildCss', 'buildHtml'], function() {
// //   return gulp.src(['src/rev/**/*.json', 'src/**/*'])  //- 读取 rev-manifest.json 文件以及需要进行css名替换的文件
// //       .pipe(revCollector())  //- 执行文件内css名的替换
// //       .pipe(gulp.dest('src'))
// //       .pipe(reload({ stream:true }));  //- 替换后的文件输出的目录
// // });

// // /**
// //  * 清理文件
// //  */
// // gulp.task('clean', function () {
// //   return gulp.src(['src/*','src/rev/*'], {read: false})
// //     .pipe(clean());
// // });

// // /**
// //  * default
// //  */
// // gulp.task('default',['clean'], function() {
// //   gulp.run('serve');
// // });


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
var reveasy = require("gulp-rev-easy");
var reveasy = require("gulp-rev");
// 给页面的引用添加版本号，清除页面引用缓存
// var rev = require('gulp-rev');

/* Setup scss path */
// var paths = {
//     scss: './src/sass/*.scss'
// };
//

// 使用gulp-rev-append给页面的引用添加版本号，清除页面引用缓存。
// cnpm install gulp-rev-append --save-dev
//  在前面加
//  .pipe(rev())

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

    .pipe(gulp.dest('dist/images'));
    // .pipe(notify({
    //     message: 'images  ok!'
    // }));
});

// 压缩首页
gulp.task('minify', function() {
    return gulp.src('index.shtml')
        .pipe(htmlmin({
            collapseWhitespace: true, //压缩html
            removeComments: true, //清除注释
        }))

    .pipe(rename("index.html"))
        .pipe(size())
        // .pipe(reveasy({
        //     suffix: 'duanyong'
        // }))
        .pipe(gulp.dest('./'));
    // .pipe(notify({
    //     message: 'html is  OK!'
    // }));

});

// 压缩子页
gulp.task('minicon', function() {
    return gulp.src('src/content/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true, //清除注释
        }))
        .pipe(size())
        // .pipe(reveasy({revType:'date', dateFormat:'yyyymmddHHmm' , suffix:'duanyong'}))
        .pipe(gulp.dest("./dist/content"));
})

/* Scripts task */
gulp.task('scripts', function() {
    return gulp.src([
            /* Add your JS files here, they will be combined in this order */
            'src/scripts/*.js'
        ])
        // .pipe(concat('main.js'))
        // .pipe(gulp.dest('dist/scripts'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(size())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
    // .pipe(notify({
    //     message: 'JS is OK!'
    // }));
});

/* Sass task */
gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        // .on('error', function (err) {
        //        console.error('Error!', err.message)
        //    })
        .pipe(sass().on('error', sass.logError))

    .pipe(gulp.dest('src/styles'));
    // .pipe(notify({
    //     message: 'SASS  is ok!'
    // }));
});

gulp.task('css', function() {
    return gulp.src('src/styles/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true, //是否美化属性值 默认：true 像这样：
            //-webkit-transform: rotate(45deg);
            //        transform: rotate(45deg);
            remove: true //是否去掉不必要的前缀 默认：true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(size())
        .pipe(minifycss())
        .pipe(gulp.dest('dist/styles'));
    // .pipe(notify({
    //     message: 'CSS is OK! '
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
gulp.task('default', ['sass', 'css', 'scripts', 'browser-sync', 'minify', 'minicon', 'minimg'], function() {
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
