'use strict';

describe('Controller: MapsVectorMapCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var MapsVectorMapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapsVectorMapCtrl = $controller('MapsVectorMapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
