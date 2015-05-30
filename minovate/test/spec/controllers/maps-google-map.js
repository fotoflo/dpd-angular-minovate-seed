'use strict';

describe('Controller: MapsGoogleMapCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var MapsGoogleMapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapsGoogleMapCtrl = $controller('MapsGoogleMapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
