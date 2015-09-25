'use strict';

var config = require('../config'),
    gulp   = require('gulp'),
    jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src([config.scripts.src])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});