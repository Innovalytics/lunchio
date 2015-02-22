'use strict';

describe('Service: Allmealsservice', function () {

  // load the service's module
  beforeEach(module('lunchioApp'));

  // instantiate service
  var Allmealsservice;
  beforeEach(inject(function (_Allmealsservice_) {
    Allmealsservice = _Allmealsservice_;
  }));

  it('should do something', function () {
    expect(!!Allmealsservice).toBe(true);
  });

});
