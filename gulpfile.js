var gulp = require('gulp');
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
var rev = require("gulp-rev");
var revCollector = require('gulp-rev-collector');
var clean = require('gulp-clean');
var zip = require('gulp-zip');
var runSequence = require('run-sequence');
var fingerprint = require('gulp-fingerprint');
var RevAll = require('gulp-rev-all');
var override = require('gulp-rev-css-url');
// 先清完空之前的文件
gulp.task('clean', function() {
  return gulp.src(['dist/*', 'tmp/*'], {
      read: false
    })
    .pipe(clean());
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
    .pipe(gulp.dest('tmp/images'))
});
// 压缩首页
gulp.task('minify', function() {
  return gulp.src('src/index.shtml')
    .pipe(htmlmin({
      collapseWhitespace: true, //压缩html
      removeComments: true, //清除注释
    }))
    .pipe(rename("index.html"))
    .pipe(size())
    .pipe(gulp.dest('htmltmp/'));
});

gulp.task('revhtml', function() {
    return gulp.src(['src/rev/**/*.json', 'htmltmp/*.html'])
        .pipe(revCollector({
            replaceReved: true,
        }))
        .pipe(gulp.dest('dist'));
});



// 压缩子页
gulp.task('minicon', function() {
    return gulp.src('src/content/*.html')
      // .pipe(revCollector({
      //   replaceReved: true,
      // }))
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true, //清除注释
      }))
      // .pipe(size())
      .pipe(gulp.dest("tmp/content"));
  })
  /* Scripts task */
gulp.task('scripts', function() {
  return gulp.src(['src/scripts/*.js'])
    .pipe(size())
    .pipe(uglify())
    .pipe(gulp.dest('tmp/scripts'));
});
/* Sass task */
gulp.task('sass', function() {
  gulp.src('src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/styles'));
});

gulp.task('css', function() {
  return gulp.src('src/revstyles/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: true, //是否美化属性值 默认：true 像这样：
      //-webkit-transform: rotate(45deg);
      //        transform: rotate(45deg);
      remove: true //是否去掉不必要的前缀 默认：true
    }))
    .pipe(size())
    // .pipe(rev())
    .pipe(gulp.dest('./tmp/styles/'));

    // .pipe(gulp.dest("src/rev/css/"));

  // .pipe(size())

})


gulp.task('revall', function() {
    return gulp.src('./tmp/**/*')
        .pipe(rev())
        .pipe(override())
        .pipe(gulp.dest('./dist/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('src/rev'));
});




/* Reload task */
gulp.task('bs-reload', function() {
  browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
  browserSync.init(['dist/styles/*.css', 'dist/scripts/*.js'], {
    server: {
      baseDir: './dist'
    }
  });
});

/* Watch scss, js and html files, doing different things with each. */
gulp.task('default', ['build'], function() {
  /* Watch scss, run the sass task on change. */
  gulp.watch(['src/sass/main.scss'], ['sass'])
    /* Watch app.js file, run the scripts task on change. */
  gulp.watch(['src/scripts/*.js'], ['scripts'])
  gulp.watch(['src/images/*.{png,jpg,gif,ico}'], ['minimg'])
  gulp.watch(['src/styles/*.css'], ['css'])
  gulp.watch(['src/*.shtml'], ['minify'])
  gulp.watch(['src/content/*.html'], ['minicon'])
    /* Watch .html files, run the bs-reload task on change. */
  gulp.watch(['dist/index.html', 'dist/content/*.html'], ['bs-reload']);
});

gulp.task('build', function(done) {
  runSequence(
    ['clean'], ['minimg'], ['sass'], ['css'], ['scripts', 'browser-sync', 'minify', 'minicon'],['revall'],['revhtml'] ,done);
});
