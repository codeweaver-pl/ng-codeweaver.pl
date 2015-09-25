'use strict';

var expect = chai.expect;

describe('hello', function () {

  var $compile, $scope;

  beforeEach(module('app.components'));
  beforeEach(module('templates'));
  beforeEach(inject(function (_$rootScope_, _$compile_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
  }));

  it('should contain passed name', function () {
    //given
    var markup = '<hello name="Piotr"></hello>';

    //when
    var directive = helloDirective(markup);

    //then
    expect(directive.text()).to.contain('Hello Piotr');
  });

  function helloDirective(markup) {
    var directive = $compile(markup)($scope);
    $scope.$digest();
    return directive;
  }
});