'use strict';

var gulp   = require('gulp'),
    config = require('../config');

gulp.task('watch', ['server', 'browser-sync'], function () {
  gulp.watch(config.views.src, ['views']);
  gulp.watch(config.scripts.src, ['browserify']);
});