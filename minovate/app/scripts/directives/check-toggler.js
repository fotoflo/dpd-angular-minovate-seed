'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:checkToggler
 * @description
 * # checkToggler
 */
angular.module('minovateApp')
  .directive('checkToggler', function () {
    return {
      restrict: 'E',
      link: function postLink(scope, element) {
        element.on('click', function(){

          if (element.hasClass('checked')) {
            element.removeClass('checked');
          } else {
            element.addClass('checked');
          }

        });
      }
    };
  });
