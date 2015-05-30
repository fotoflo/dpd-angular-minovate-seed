'use strict';

describe('Controller: PagesTimelineCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var PagesTimelineCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PagesTimelineCtrl = $controller('PagesTimelineCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
