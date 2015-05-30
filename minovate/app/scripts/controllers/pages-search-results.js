'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesSearchResultsCtrl
 * @description
 * # PagesSearchResultsCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('SearchResultsCtrl', function ($scope) {
    $scope.page = {
      title: 'Search Results',
      subtitle: 'Place subtitle here...'
    };
  });
