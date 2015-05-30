'use strict';

describe('Directive: todoEscape', function () {

  // load the directive's module
  beforeEach(module('minovateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<todo-escape></todo-escape>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the todoEscape directive');
  }));
});
