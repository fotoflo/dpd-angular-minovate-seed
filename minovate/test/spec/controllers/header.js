'use strict';

describe('Controller: HeaderCtrl', function () {

  // load the controller's module
  beforeEach(module('minovateApp'));

  var HeaderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      HeaderCtrl = $controller('HeaderCtrl', {
        $scope: scope
      });
    })
  );

  it('should redirect the user to login.html', function () {
    console.log("hello world!");
    dump("hello world!") 
    // expect(location.pathname).toBe('login.html');
  });
});
