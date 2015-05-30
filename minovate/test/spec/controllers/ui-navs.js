'use strict';

describe('Controller: UiNavsCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var UiNavsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UiNavsCtrl = $controller('UiNavsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
