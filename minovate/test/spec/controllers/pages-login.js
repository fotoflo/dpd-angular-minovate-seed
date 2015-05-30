'use strict';

describe('Controller: PagesLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var PagesLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagesLoginCtrl = $controller('PagesLoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
