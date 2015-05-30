'use strict';

describe('Controller: ShopInvoicesCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var ShopInvoicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopInvoicesCtrl = $controller('ShopInvoicesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
