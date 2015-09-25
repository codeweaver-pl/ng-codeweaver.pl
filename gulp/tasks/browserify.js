'use strict';

var gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    config      = require('../config'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    watchify    = require('watchify'),
    browserSync = require('browser-sync'),
    _           = require('lodash');

function buildScript() {

  var bundler = browserify(config.browserify.bundler);

  if (!global.release) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle);
  }

  config.browserify.transforms.forEach(function (transform) {
    console.log("");
    bundler.transform(transform, {});
  });

  return rebundle();

  function rebundle() {
    gutil.log('rebundle');

    var stream = bundler.bundle();

    return stream
      .on('error', console.log)
      .pipe(source(config.browserify.bundle))
      .pipe(gulp.dest(config.dist.scripts))
      .pipe(browserSync.stream({once: true}));
  }
}

gulp.task('browserify', function () {

  return buildScript();
});
