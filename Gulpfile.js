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
  reload = browserSync.reload,
  browserify = require('browserify'),
  // babelify = require('babelify'),
  // react = require('gulp-react'),
  source = require('vinyl-source-stream'),
  imagemin = require('gulp-imagemin');


var path = {
  build: {
    html: 'public/',
    js: 'public/js/',
    css: 'public/css/',
    img: 'public/img/'
  },
  src: {
    html: 'dev/*.pug',
    js: 'dev/js/main.js',
    style: 'dev/sass/main.scss',
    img: 'dev/img/*'
  },
  watch: {
    html: 'dev/template/**/*.pug',
    js: 'dev/js/**/*.js',
    style: 'dev/sass/**/*.scss',
    img: 'dev/img/*'
  },
  clean: './public'
}

gulp.task('component', function () {
  return browserify({entries: './app.jsx', extensions: ['.jsx'], debug: true})
      .transform('babelify', {presets: ['es2015', 'react']})
      .bundle()
      .pipe(source('bundle.js'))
      .pipe(gulp.dest('dist'));
});

gulp.task('image', () =>
    gulp.src(path.src.img)
        .pipe(imagemin())
        .pipe(gulp.dest(path.build.img))
);

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
    gulp.src('dev/sass/main.scss')
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
  'style',
  'image'
]);

// gulp.task('watch', ['component'], function () {
//   gulp.watch('*.jsx', ['component']);
// });

gulp.task('watch', function (){
  // watch([path.watch.js], function(ev, callback){
  //   gulp.watch('*.jsx', ['component']);
  // });
  watch([path.watch.js], function(ev, callback){
    gulp.start('js:build');
  });
  watch([path.watch.html], function(ev, callback){
    gulp.start('pug');
  });
  watch([path.watch.style], function(ev, callback){
    gulp.start('style');
  });
  watch([path.watch.img], function(ev, callback){
    gulp.start('image');
  });
})

gulp.task('clean', function(callback) {
  rimRaf(path.clean, callback);
});

gulp.task('default', ['build','webserver','watch']);