'use strict';

var componentsModule = require('../module'),
    HelloController  = require('./hello.controller');

componentsModule
  .directive('hello', hello);

function hello() {

  return {
    restrict:     'E',
    templateUrl:  'js/components/hello/hello.tpl.html',
    scope:        {
      name: '@'
    },
    controller:   HelloController,
    controllerAs: 'vm'
  };
}