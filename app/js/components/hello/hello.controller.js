'use strict';

var componentsModule = require('../module');

componentsModule
  .controller('HelloController', HelloController);

/**
 * @ngInject
 */
function HelloController($scope, $rootScope) {
  var vm = this;

  $rootScope.pageTitle = 'ng-codeweaver.pl';
  vm.sayHello = sayHello;

  function sayHello() {
    return 'Hail ' + $scope.name;
  }
}

module.exports = HelloController;