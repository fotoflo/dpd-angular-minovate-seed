'use strict';

describe('Controller: TypographyCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var TypographyCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TypographyCtrl = $controller('TypographyCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
