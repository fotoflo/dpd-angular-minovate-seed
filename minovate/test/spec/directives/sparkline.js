'use strict';

describe('Directive: sparkline', function () {

  // load the directive's module
  beforeEach(module('minovateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<sparkline></sparkline>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the sparkline directive');
  }));
});
