'use strict';

var gulp        = require('gulp'),
    runSequence = require('run-sequence'),
    config      = require('../config'),
    _           = require('lodash');

gulp.task('dev', ['clean'], function (cb) {

  cb = cb || _.noop();

  config.test.karma.action = 'watch';

  runSequence(['views', 'browserify'], 'watch', cb);
});

