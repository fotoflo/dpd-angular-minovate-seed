'use strict';

describe('Controller: PagesProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var PagesProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagesProfileCtrl = $controller('PagesProfileCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
