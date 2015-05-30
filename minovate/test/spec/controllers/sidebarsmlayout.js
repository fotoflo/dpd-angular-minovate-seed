'use strict';

describe('Controller: SidebarsmlayoutCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var SidebarsmlayoutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SidebarsmlayoutCtrl = $controller('SidebarsmlayoutCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
