'use strict';

describe('Controller: RtlCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var RtlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RtlCtrl = $controller('RtlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
