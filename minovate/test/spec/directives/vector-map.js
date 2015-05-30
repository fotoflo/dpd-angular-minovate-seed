'use strict';

describe('Directive: vectorMap', function () {

  // load the directive's module
  beforeEach(module('minovateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<vector-map></vector-map>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the vectorMap directive');
  }));
});
