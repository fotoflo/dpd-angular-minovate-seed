'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:vectorMap
 * @description
 * # vectorMap
 */
angular.module('minovateApp')
  .directive('vectorMap', function () {
    return {
      restrict: 'AE',
      scope: {
        options: '='
      },
      link: function postLink(scope, element) {
        var options = scope.options;
        element.vectorMap(options);
      }
    };
  });
