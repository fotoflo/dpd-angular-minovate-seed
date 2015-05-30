'use strict';

describe('Controller: MailComposeCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var MailComposeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MailComposeCtrl = $controller('MailComposeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
