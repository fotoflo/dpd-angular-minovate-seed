'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:HelpCtrl
 * @description
 * # HelpCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('HelpCtrl', function ($scope) {
     $scope.page = {
      title: 'Documentation',
      subtitle: 'Place subtitle here...'
    };
  });
