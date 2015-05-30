'use strict';

describe('Controller: TablesDatatablesCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var TablesDatatablesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TablesDatatablesCtrl = $controller('TablesDatatablesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
