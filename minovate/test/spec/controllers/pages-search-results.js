'use strict';

describe('Controller: PagesSearchResultsCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var PagesSearchResultsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagesSearchResultsCtrl = $controller('PagesSearchResultsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
