const gulp = require('gulp');
const sass = require('gulp-sass');
const stripCssComments = require('gulp-strip-css-comments');

// Função SASS
function compilaSass() {
  return gulp
    .src('css/scss/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(stripCssComments({
      preserve: false
    }))
    .pipe(gulp.dest('css/'))
}

gulp.task('sass', compilaSass);

// Função WATCH
function watch() {
  gulp.watch('css/scss/*.scss', compilaSass);
}

gulp.task('watch', watch);
gulp.task('default', gulp.parallel('watch', 'sass'));