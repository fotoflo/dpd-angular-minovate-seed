'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:FormsWizardCtrl
 * @description
 * # FormsWizardCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('FormWizardCtrl', function ($scope) {
    $scope.page = {
      title: 'Form Wizard',
      subtitle: 'Place subtitle here...'
    };
  });
