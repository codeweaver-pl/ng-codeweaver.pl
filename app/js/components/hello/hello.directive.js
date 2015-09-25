'use strict';

var componentsModule = require('../module'),
    HelloController  = require('./hello.controller');

require('./hello.tpl.html');

componentsModule
  .directive('hello', hello);

function hello() {

  return {
    restrict:     'E',
    templateUrl:  'hello.tpl.html',
    scope:        {
      name: '@'
    },
    controller:   HelloController,
    controllerAs: 'vm'
  };
}