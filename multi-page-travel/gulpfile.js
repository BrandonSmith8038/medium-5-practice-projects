var gulp = require('gulp');
const browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp
    .src('./scss/**/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./css'));
});

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './'
  });

  gulp.watch(['./scss/*.scss'], ['sass']);
  gulp.watch('./css/style.css').on('change', browserSync.reload);
  gulp.watch('./*.html').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
