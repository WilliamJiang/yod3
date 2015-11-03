'use strict';

describe('Controller: IphoneCtrl', function () {

  // load the controller's module
  beforeEach(module('yod3App'));

  var IphoneCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IphoneCtrl = $controller('IphoneCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
