'use strict';

describe('Controller: UiportletsCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var UiportletsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UiportletsCtrl = $controller('UiportletsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
