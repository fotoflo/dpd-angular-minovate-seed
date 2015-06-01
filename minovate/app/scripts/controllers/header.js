'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('HeaderCtrl', function ($scope) {

    $scope.logout = function(){
      dpd.users.logout(); // this resets the sid cookie
      location.href = "/login.html";
      
    }         
  });
