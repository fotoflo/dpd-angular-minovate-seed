'use strict';

describe('Controller: BoxedlayoutCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var BoxedlayoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BoxedlayoutCtrl = $controller('BoxedlayoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
