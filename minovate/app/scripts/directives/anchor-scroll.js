'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:anchorScroll
 * @description
 * # anchorScroll
 */
angular.module('minovateApp')
  .directive('anchorScroll', ['$location', '$anchorScroll', function($location, $anchorScroll) {
    return {
      restrict: 'AC',
      link: function(scope, el, attr) {
        el.on('click', function(e) {
          $location.hash(attr.anchorScroll);
          $anchorScroll();
        });
      }
    };
  }]);
