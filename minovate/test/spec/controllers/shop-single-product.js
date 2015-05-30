'use strict';

describe('Controller: ShopSingleProductCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var ShopSingleProductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopSingleProductCtrl = $controller('ShopSingleProductCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
