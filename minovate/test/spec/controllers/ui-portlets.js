'use strict';

describe('Controller: UiPortletsCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var UiPortletsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UiPortletsCtrl = $controller('UiPortletsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
