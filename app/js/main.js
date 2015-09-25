'use strict';

var angular    = require('angular'),
    components = require('./components/module'),
    templates  = require('./templates');

angular.element(document)
  .ready(onDocumentReady);

function onDocumentReady() {

  angular.module('app', [components.name, templates.name])
    .controller('AppController', AppController);

  angular.bootstrap(document, ['app']);

  function AppController($scope, $rootScope) {
    $rootScope.pageTitle = 'ng-codeweaver.pl';
    $scope.greeting = 'Good day ';
  }
}