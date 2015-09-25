'use strict';

module.exports =
  require('angular')
    .module('app.components', []);

require('bulk-require')(__dirname, ['./**/!(module).js']);