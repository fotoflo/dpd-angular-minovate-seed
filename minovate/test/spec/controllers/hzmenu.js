'use strict';

describe('Controller: HzmenuCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var HzmenuCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HzmenuCtrl = $controller('HzmenuCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
