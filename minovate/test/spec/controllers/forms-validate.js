'use strict';

describe('Controller: FormsValidateCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var FormsValidateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormsValidateCtrl = $controller('FormsValidateCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
