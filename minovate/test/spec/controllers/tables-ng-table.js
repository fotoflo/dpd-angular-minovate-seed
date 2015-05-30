'use strict';

describe('Controller: TablesNgTableCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var TablesNgTableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TablesNgTableCtrl = $controller('TablesNgTableCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
