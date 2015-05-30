'use strict';

describe('Controller: ShopOrdersCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var ShopOrdersCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopOrdersCtrl = $controller('ShopOrdersCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
