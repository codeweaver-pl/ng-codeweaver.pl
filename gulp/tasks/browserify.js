'use strict';

var gulp        = require('gulp'),
    config      = require('../config'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    watchify    = require('watchify'),
    browserSync = require('browser-sync');

gulp.task('browserify', ['views'], function () {

  var bundler = browserify(config.browserify.bundler);

  if (!global.release) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  config.browserify.transforms.forEach(function (transform) {
    bundler.transform(transform);
  });

  return rebundle();

  function rebundle() {

    return bundler.bundle()
      .on('error', console.log)
      .pipe(source(config.browserify.bundle))
      .pipe(gulp.dest(config.dist.scripts))
      .pipe(browserSync.stream({once: true}));
  }
});
