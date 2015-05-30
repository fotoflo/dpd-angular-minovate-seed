'use strict';

describe('Controller: SidebarxslayoutCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var SidebarxslayoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebarxslayoutCtrl = $controller('SidebarxslayoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
