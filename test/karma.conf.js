'use strict';

//var istanbul = require('browserify-istanbul');
//var isparta  = require('isparta');

var ngAnnotate = require('browserify-ngannotate'),
    ngHtml2Js  = require("browserify-ng-html2js");

module.exports = function (config) {

  config.set({
    basePath:      '../',
    frameworks:    ['browserify', 'mocha', 'chai'],
    preprocessors: {
      'app/js/**/*.js': ['browserify']
    },
    browsers:      ['Chrome'],
    //reporters:     ['progress', 'coverage'],
    reporters:     ['progress'],
    autoWatch:     true,
    browserify:    {
      debug:     true,
      transform: [
        ngAnnotate,
        ngHtml2Js({
          prefix:         '',
          module:         'templates',
          extension:      'tpl.html',
          requireAngular: true
        }),
        'brfs',
        'bulkify'
        //,
        //istanbul({
        //  instrumenter: isparta,
        //  ignore: ['**/node_modules/**', '**/test/**']
        //})
      ]
    },
    proxies:       {
      '/': 'http://localhost:9876/'
    },
    urlRoot:       '/__karma__/',
    files:         [
      'app/js/main.js',
      'node_modules/angular-mocks/angular-mocks.js',
      'node_modules/lodash/index.js',
      'test/**/*.js'
    ]
  });
};
