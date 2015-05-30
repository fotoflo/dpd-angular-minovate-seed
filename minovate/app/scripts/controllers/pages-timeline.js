'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesTimelineCtrl
 * @description
 * # PagesTimelineCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('TimelineCtrl', function ($scope) {
    $scope.page = {
      title: 'Timeline',
      subtitle: 'Place subtitle here...'
    };
  });
