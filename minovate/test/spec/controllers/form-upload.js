'use strict';

describe('Controller: FormUploadCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var FormUploadCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FormUploadCtrl = $controller('FormUploadCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
