'use strict';

describe('Controller: ShopSingleOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var ShopSingleOrderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopSingleOrderCtrl = $controller('ShopSingleOrderCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
