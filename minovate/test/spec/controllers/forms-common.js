'use strict';

describe('Controller: FormsCommonCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var FormsCommonCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormsCommonCtrl = $controller('FormsCommonCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
