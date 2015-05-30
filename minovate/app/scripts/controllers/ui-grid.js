'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:UiGridCtrl
 * @description
 * # UiGridCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('GridCtrl', function ($scope) {
    $scope.page = {
      title: 'Grid',
      subtitle: 'Place subtitle here...'
    };
  });
