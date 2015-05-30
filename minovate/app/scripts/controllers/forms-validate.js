'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:FormsValidateCtrl
 * @description
 * # FormsValidateCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('FormsValidateCtrl', function ($scope) {
    $scope.page = {
      title: 'Validation Elements',
      subtitle: 'Place subtitle here...'
    };

    // function to submit the form after all validation has occurred
		$scope.submitForm = function(isValid) {
      console.log('validate form');

			// check to make sure the form is completely valid
			if (isValid) {
				console.log('our form is amazing');
			} else {
        console.log('form is invalid');
      }

		};

    $scope.notBlackListed = function(value) {
      var blacklist = ['bad@domain.com','verybad@domain.com'];
      return blacklist.indexOf(value) === -1;
    };

  });
