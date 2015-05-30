'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('LoginCtrl', function ($scope, $state) {
    $scope.login = function() {
      $state.go('app.dashboard');
    };
  });
