var gulp = require('gulp'),
  watch = require('gulp-watch'),
  preFixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
  pug = require('gulp-pug'),
  sourceMaps = require('gulp-sourcemaps'),
  rigger = require('gulp-rigger'),
  cssMin = require('gulp-minify-css'),
  rimRaf = require('rimraf'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload;

var path = {
  build: {
    html: 'public/',
    js: 'public/js/',
    css: 'public/css/'
  },
  src: {
    html: 'dev/*.pug',
    js: 'dev/js/main.js',
    style: 'dev/sass/main.scss'
  },
  watch: {
    html: 'dev/template/**/*.pug',
    js: 'dev/js/**/*.js',
    style: 'dev/sass/**/*.scss'
  },
  clean: './public'
}

gulp.task("webserver", function (){
  browserSync({
    server: {
      baseDir: "./public"
    },
    host:'localhost',
    port: 3005,
    tunnel: true
  });
});

gulp.task('pug', function buildHTML() {
  return gulp.src('dev/*.pug')

    .pipe(pug({
      pretty: true
    }))

    .pipe(gulp.dest('public/'))
    .pipe(reload({stream: true}));
});

gulp.task('js:build', function(){
  gulp.src(path.src.js)
  .pipe(rigger())
  .pipe(sourceMaps.init())
  .pipe(uglify())
  .pipe(sourceMaps.write())
  .pipe(gulp.dest(path.build.js))
  .pipe(reload({stream: true}));
});

gulp.task('style', function() {
    gulp.src('dev/sass/**/*.scss')
      .pipe(sourceMaps.init())
      .pipe(sass())
      .pipe(preFixer())
      .pipe(cssMin())
      .pipe(sourceMaps.write())
      .pipe(gulp.dest('public/css/'))
      .pipe(reload({stream: true}));
});

gulp.task('build', [
  'pug',
  'js:build',
  'style'
]);

gulp.task('watch', function (){
  watch([path.watch.js], function(ev, callback){
    gulp.start('js:build');
  });
  watch([path.watch.html], function(ev, callback){
    gulp.start('html:build');
  });
  watch([path.watch.style], function(ev, callback){
    gulp.start('style:build');
  });
})

gulp.task('clean', function(callback) {
  rimRaf(path.clean, callback);
});

gulp.task('default', ['build','webserver','watch']);