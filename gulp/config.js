'use strict';

var ngAnnotate = require('browserify-ngannotate'),
    ngHtml2Js  = require("browserify-ng-html2js");

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
    root:        '/',
    homeSrc:     'app/index.html',
    home:        '/index.html',
    templateSrc: 'app/**/*.tpl.html'
  },
  scripts:    {
    root: 'app/js',
    src:  'app/js/**/*.js'
  },
  test:       {
    karma: {
      configFile: 'test/karma.conf.js',
      action:     'run'
    },
    src:   'test/js/**/*.spec.js'
  },
  browserify: {
    bundler:    {
      entries:      ['./app/js/main.js'],
      debug:        true,
      cache:        {},
      packageCache: {},
      fullPaths:    !global.release
    },
    transforms: [
      ngAnnotate,
      ngHtml2Js({
        prefix:         '',
        module:         'templates',
        extension:      'tpl.html',
        requireAngular: true
      }),
      'brfs',
      'bulkify'
    ],
    bundle:     'bundle.js'
  }
};
