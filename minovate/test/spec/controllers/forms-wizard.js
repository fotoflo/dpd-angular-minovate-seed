'use strict';

describe('Controller: FormsWizardCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var FormsWizardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormsWizardCtrl = $controller('FormsWizardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
