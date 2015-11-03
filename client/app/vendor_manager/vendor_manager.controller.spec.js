'use strict';

describe('Controller: VendorManagerCtrl', function () {

  // load the controller's module
  beforeEach(module('yod3App'));

  var VendorManagerCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VendorManagerCtrl = $controller('VendorManagerCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
