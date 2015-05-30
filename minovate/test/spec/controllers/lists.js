'use strict';

describe('Controller: ListsCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var ListsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListsCtrl = $controller('ListsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
