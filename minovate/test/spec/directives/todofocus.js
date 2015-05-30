'use strict';

describe('Directive: todoFocus', function () {

  // load the directive's module
  beforeEach(module('minovateApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<todo-focus></todo-focus>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the todoFocus directive');
  }));
});
