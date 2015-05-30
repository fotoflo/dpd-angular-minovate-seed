'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:OffcanvaslayoutCtrl
 * @description
 * # OffcanvaslayoutCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('OffcanvaslayoutCtrl', function ($scope) {
    $scope.page = {
      title: 'Off-canvas sidebar',
      subtitle: 'On small devices'
    };
  });
