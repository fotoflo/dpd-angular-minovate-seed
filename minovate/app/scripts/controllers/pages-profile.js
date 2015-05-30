'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesProfileCtrl
 * @description
 * # PagesProfileCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('ProfileCtrl', function ($scope) {
    $scope.page = {
      title: 'Profile Page',
      subtitle: 'Place subtitle here...'
    };
  });
