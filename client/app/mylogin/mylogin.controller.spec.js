'use strict';

describe('Controller: MyloginCtrl', function () {

  // load the controller's module
  beforeEach(module('yod3App'));

  var MyloginCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyloginCtrl = $controller('MyloginCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
