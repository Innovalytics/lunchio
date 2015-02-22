'use strict';

describe('Directive: foodSection', function () {

  // load the directive's module
  beforeEach(module('lunchioApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<food-section></food-section>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the foodSection directive');
  }));
});
