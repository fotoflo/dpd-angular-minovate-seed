'use strict';

describe('Controller: UiAlertsCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var UiAlertsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UiAlertsCtrl = $controller('UiAlertsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
