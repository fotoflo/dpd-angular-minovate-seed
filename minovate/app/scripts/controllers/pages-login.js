(function() {
'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesLoginCtrl
 * @description
 * # PagesLoginCtrl
 * Controller of the minovateApp
 */
angular
	.module('minovateApp')
	.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$scope', '$state', 'userService'];

function LoginCtrl($scope, $state, userService) {
 
    $scope.login = function() {
    	var user = $scope.user;
		userService.login(user);
    };
}

})()