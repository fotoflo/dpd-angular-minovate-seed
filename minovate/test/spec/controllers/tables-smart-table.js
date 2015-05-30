'use strict';

describe('Controller: TablesSmartTableCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var TablesSmartTableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TablesSmartTableCtrl = $controller('TablesSmartTableCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
