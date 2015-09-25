'use strict';

var gulp          = require('gulp'),
    config        = require('../config'),
    browserSync   = require('browser-sync'),
    templateCache = require('gulp-angular-templatecache');

gulp.task('views', function () {

  gulp.src(config.views.homeSrc)
    .pipe(gulp.dest(config.dist.root));

  return gulp.src(config.views.templateSrc)
    .pipe(templateCache({
      standalone: true,
      moduleSystem: "Browserify"
    }))
    .pipe(gulp.dest(config.dist.root))
    .pipe(browserSync.stream({once: true}));
});

