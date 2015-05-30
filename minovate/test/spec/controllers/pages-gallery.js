'use strict';

describe('Controller: PagesGalleryCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var PagesGalleryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagesGalleryCtrl = $controller('PagesGalleryCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
