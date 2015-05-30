'use strict';

describe('Directive: offcanvasSidebar', function () {

  // load the directive's module
  beforeEach(module('minovateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<offcanvas-sidebar></offcanvas-sidebar>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the offcanvasSidebar directive');
  }));
});
