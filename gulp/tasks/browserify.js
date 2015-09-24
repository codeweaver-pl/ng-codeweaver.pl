'use strict';

var gulp       = require('gulp'),
    config     = require('../config'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream');

gulp.task('browserify', function () {
  return browserify(config.browserify.init)
    .bundle()
    .pipe(source(config.browserify.bundle))
    .pipe(gulp.dest(config.dist.scripts));
});
