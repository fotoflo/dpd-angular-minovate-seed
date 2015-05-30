'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:UiPortletsCtrl
 * @description
 * # UiPortletsCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('PortletsCtrl', function ($scope) {
    $scope.page = {
      title: 'Portlets',
      subtitle: 'Place subtitle here...'
    };
  });
