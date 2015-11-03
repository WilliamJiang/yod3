'use strict';

describe('Controller: RiskOfficerCtrl', function () {

  // load the controller's module
  beforeEach(module('yod3App'));

  var RiskOfficerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RiskOfficerCtrl = $controller('RiskOfficerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
