'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesChatCtrl
 * @description
 * # PagesChatCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('ChatCtrl', function ($scope, $resource) {
    $scope.inbox = $resource('scripts/jsons/chats.json').query();

    $scope.archive = function(index) {
      $scope.inbox.splice(index, 1);
    };
  });
