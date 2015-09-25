'use strict';

var gulp          = require('gulp'),
    config        = require('../config'),
    browserSync   = require('browser-sync');

gulp.task('views', function () {

  return gulp.src(config.views.homeSrc)
    .pipe(gulp.dest(config.dist.root))
    .pipe(browserSync.stream({once: true}));
});

