'use strict';

var ngAnnotate = require('browserify-ngannotate'),
 brfs= require('brfs');

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
    bundler:       {
      entries:      ['./app/js/main.js'],
      debug:        true,
      cache:        {},
      packageCache: {},
      fullPaths:    !global.release
    },
    transforms: [
      ngAnnotate,
      'brfs',
      'bulkify'
    ],
    bundle:     'bundle.js'
  }
};
