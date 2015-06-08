(function() {
'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('HeaderCtrl', headerCtrl);

 headerCtrl.$inject = ['$scope', 'userService', '$state'];

function headerCtrl($scope, userService, $state) {
	
	$scope.logout = function(){
	  userService.logout(); // this resets the sid cookie
	  $state.go( "core.login" );
	}         
}

})()