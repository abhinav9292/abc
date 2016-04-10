var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var mocha = require('gulp-mocha');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});

gulp.task('html',function(){
gulp.src('html/index.html')
  .pipe(gulp.dest('dist'))
  .pipe(browserSync.stream());

});

gulp.task('css',function(){
  gulp.src('css/style.sass')
  .pipe(sass({
        outputStyle : 'compressed'
      }))
      .pipe(rename('style.css'))
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.stream());
})

gulp.task('js', function() {
  return browserify('js/fact.js')
   .bundle()
   .pipe(source('bundle.js'))
   .pipe(buffer())
   .pipe(gulp.dest('dist/js'))
   .pipe(browserSync.stream());
});

gulp.task('watch', function() {
 gulp.watch('html/index.html', ['html']);
 gulp.watch('css/style.sass', ['sass']);
 gulp.watch('js/fact.js', ['js']);
 gulp.watch('test/*.spec.js', ['test']);
});

gulp.task('test', function() {
 gulp.src('test/fact.spec.js')
   .pipe(mocha({ reporter: 'nyan'}));
});

gulp.task('default', ['html', 'css', 'js']);
gulp.task('start', ['html', 'css', 'js', 'test', 'server', 'watch']);
