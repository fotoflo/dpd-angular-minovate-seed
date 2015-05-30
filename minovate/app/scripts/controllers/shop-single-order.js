'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:ShopSingleOrderCtrl
 * @description
 * # ShopSingleOrderCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('SingleOrderCtrl', function ($scope) {
    $scope.page = {
      title: 'Single Order',
      subtitle: 'Place subtitle here...'
    };
  });
