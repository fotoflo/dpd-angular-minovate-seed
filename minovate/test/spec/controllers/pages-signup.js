'use strict';

describe('Controller: PagesSignupCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var PagesSignupCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagesSignupCtrl = $controller('PagesSignupCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
