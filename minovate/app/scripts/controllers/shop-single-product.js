'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:ShopSingleProductCtrl
 * @description
 * # ShopSingleProductCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('SingleProductCtrl', function ($scope) {
    $scope.page = {
      title: 'Single Product',
      subtitle: 'Place subtitle here...'
    };
  });
