var gulp            = require('gulp'),
    useref          = require('gulp-useref'),
    gulpif          = require('gulp-if'),
    uglify          = require('gulp-uglify'),
    minifyCss       = require('gulp-minify-css'),
    compass         = require('gulp-compass');
    plumber         = require('gulp-plumber');


gulp.task('compass', function() {
  gulp.src('./app/scss/structure.scss')
  .pipe(plumber())
  .pipe(compass({
    css: 'app/css',
    sass: 'app/scss',
    image: 'app/images'
  }))
  .pipe(minifyCss())
  .pipe(gulp.dest('app/css'));
});

gulp.task('default', ['compass'], function () {
    return gulp.src('app/*.html')
        .pipe(useref.assets())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', minifyCss()))
        .pipe(useref.restore())
        .pipe(useref())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('app/**/*.scss', ['compass']).on('change', function(event){
    console.log('File: ' + event.path + ' was updated.')
  });
});