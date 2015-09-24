(function () {
  'use strict';

// create and bootstrap application
  angular.element(document).ready(function () {

    var dependencies = [];

    // mount on window for testing
    window.app = angular.module('app', dependencies).controller('AppController', function($scope, $rootScope) {
      $rootScope.pageTitle = 'ng-codeweaver.pl';
      $scope.greeting = 'HELLO !';
    });

    angular.bootstrap(document, ['app']);
  });
})();