// gulpfile.js
var gulp = require('gulp');
   gutil = require('gulp-util');

gulp.task('log', function() {
  gutil.log('Workflows are awesome');
});

gulp.task('default', function () {
   console.log('Hello Gulp!') });
