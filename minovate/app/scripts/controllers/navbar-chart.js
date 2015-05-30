'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:SparklineCtrl
 * @description
 * # sparklineCtrl navbar
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('SparklineCtrl', function ($scope) {
    $scope.navChart1 = {
      data: [5, 8, 3, 4, 6, 2, 1, 9, 7],
      options: {
        type: 'bar',
        barColor: '#92424e',
        barWidth: '6px',
        height: '36px'
      }
    };
    $scope.navChart2 = {
      data: [2, 4, 5, 3, 8, 9, 7, 3, 5],
      options: {
        type: 'bar',
        barColor: '#397193',
        barWidth: '6px',
        height: '36px'
      }
    };
  });
