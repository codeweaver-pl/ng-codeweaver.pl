'use strict';

var gulp    = require('gulp'),
    config  = require('../config'),
    express = require('express');

gulp.task('server', function () {

  express()
    .use(express.static(config.dist.root))
    .get(config.views.root, onGet)
    .listen(config.ports.server);

  function onGet(req, res) {
    res.redirect(config.views.home);
  }
});