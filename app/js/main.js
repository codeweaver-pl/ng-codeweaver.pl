'use strict';

var angular    = require('angular'),
    components = require('./components/module');

angular.element(document)
  .ready(onDocumentReady);

function onDocumentReady() {

  angular.module('app', [components.name])
    .controller('AppController', AppController);

  angular.bootstrap(document, ['app']);

  function AppController($scope, $rootScope) {
    $rootScope.pageTitle = 'gymbook-client-web-browserify ';
    $scope.greeting = 'Good day ';
  }
}