'use strict';

var angular = require('angular');

angular.element(document)
  .ready(onDocumentReady);

function onDocumentReady() {

  angular.module('app', [])
    .controller('AppController', AppController);

  angular.bootstrap(document, ['app']);

  function AppController($scope, $rootScope) {
    $rootScope.pageTitle = 'ng-codeweaver.pl';
    $scope.greeting = 'HELLO';
  }
}