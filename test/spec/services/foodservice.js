'use strict';

describe('Service: Foodservice', function () {

  // load the service's module
  beforeEach(module('lunchioApp'));

  // instantiate service
  var Foodservice;
  beforeEach(inject(function (_Foodservice_) {
    Foodservice = _Foodservice_;
  }));

  it('should do something', function () {
    expect(!!Foodservice).toBe(true);
  });

});
