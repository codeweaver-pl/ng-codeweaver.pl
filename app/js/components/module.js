'use strict';

module.exports =
  require('angular')
    .module('app.components', ['templates']);

require('bulk-require')(__dirname, ['./**/!(module).js']);