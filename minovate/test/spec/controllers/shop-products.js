'use strict';

describe('Controller: ShopProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var ShopProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopProductsCtrl = $controller('ShopProductsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
