'use strict';

var ngAnnotate = require('browserify-ngannotate'),
    transforms = [ngAnnotate];

module.exports = {
  ports:      {
    browser: 3000,
    ui:      3001,
    server:  3002
  },
  dist:       {
    root:    'dist',
    scripts: 'dist/js/',
    out:     'dist/**'
  },
  views:      {
    root: '/',
    home: '/index.html',
    src:  'app/**/*.html'
  },
  scripts:    {
    src: 'app/js/**/*.js'
  },
  browserify: {
    init:   {
      entries:   'app/js/main.js',
      debug:     true,
      transform: transforms
    },
    bundle: 'bundle.js'
  }
};
