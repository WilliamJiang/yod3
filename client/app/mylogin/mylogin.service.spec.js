'use strict';

describe('Service: mylogin', function () {

  // load the service's module
  beforeEach(module('yod3App'));

  // instantiate service
  var mylogin;
  beforeEach(inject(function (_mylogin_) {
    mylogin = _mylogin_;
  }));

  it('should do something', function () {
    expect(!!mylogin).toBe(true);
  });

});
