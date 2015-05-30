'use strict';

describe('Controller: ShopSingleInvoiceCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var ShopSingleInvoiceCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShopSingleInvoiceCtrl = $controller('ShopSingleInvoiceCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
