'use strict';

describe('Controller: TablesBootstrapCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var TablesBootstrapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TablesBootstrapCtrl = $controller('TablesBootstrapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
