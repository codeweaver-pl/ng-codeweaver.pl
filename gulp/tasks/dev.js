'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function (cb) {
  cb = cb || function() {};

  runSequence(['views', 'browserify'], 'watch', cb);
});

