'use strict';

describe('Controller: UiTreeCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var UiTreeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UiTreeCtrl = $controller('UiTreeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
