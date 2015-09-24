'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {

  browserSync({
    port:  config.ports.browser,
    ui:    {
      port: config.ports.ui
    },
    proxy: 'localhost:' + config.ports.server
  });
});
