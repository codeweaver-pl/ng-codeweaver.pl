'use strict';

var expect = chai.expect;

describe('HelloController', function () {

  var ctrl;

  beforeEach(module('app.components'));
  beforeEach(inject(function (_$rootScope_, _$controller_) {
      var scope = _$rootScope_.$new();
      scope.name = 'John Snow';
      ctrl = _$controller_('HelloController', {
        $scope: scope
      });
    })
  );

  it('should exist', function () {
    //noinspection BadExpressionStatementJS,JSHint
    expect(ctrl).to.not.be.undefined;
  });

  it('should say hello properly', function () {
    expect(ctrl.sayHello()).to.equal('Hail John Snow');
  });
});