(function() {
'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('DashboardCtrl', dashboardCtrl);

  dashboardCtrl.$inject = [ '$scope'];

function dashboardCtrl($scope){  
  $scope.page = {
    title: 'Dpd-angular-seed Dashboard',
    subtitle: 'This is dynamically loaded text from /controllers/dashboard.js'
  };

}

})()