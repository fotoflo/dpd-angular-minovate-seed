'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:UiAlertsCtrl
 * @description
 * # UiAlertsCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('AlertsCtrl', function ($scope) {
     $scope.page = {
      title: 'Alerts & Notifications',
      subtitle: 'Place subtitle here...'
    };
  })

  .controller('AlertDemoCtrl', ['$scope', '$location', '$anchorScroll', '$timeout', function ($scope, $location, $anchorScroll, $timeout) {

    $scope.alerts = [];

    $scope.alertOptions = {
      colors: [
        {name:'primary'},
        {name:'success'},
        {name:'warning'},
        {name:'danger'},
        {name:'info'},
        {name:'default'},
        {name:'cyan'},
        {name:'amethyst'},
        {name:'green'},
        {name:'orange'},
        {name:'red'},
        {name:'greensea'},
        {name:'dutch'},
        {name:'hotpink'},
        {name:'drank'},
        {name:'blue'},
        {name:'lightred'},
        {name:'slategray'},
        {name:'darkgray'}
      ],
      durations: [
        {name:'never close', value: 9999*9999},
        {name:'1 second', value: 1000},
        {name:'5 seconds', value: 5000},
        {name:'10 seconds', value: 10000}
      ],
      icons: [
        {name: 'none', value: ''},
        {name: 'warning', value: 'fa-warning'},
        {name: 'check', value: 'fa-check'},
        {name: 'user', value: 'fa-user'}
      ],
      msg: 'Place alert text here...'
    };

    $scope.alertType = $scope.alertOptions.colors[2]; // warning

    $scope.alertDuration = $scope.alertOptions.durations[0]; // never close

    $scope.alertIcon = $scope.alertOptions.icons[0]; // none

    $scope.alertCloseable = true;

    $scope.alertCloseAll = true;

    $scope.alertFocus = true;

    $scope.showAlert = function() {

      var alert = {
        msg: $scope.alertOptions.msg,
        type: $scope.alertType.name,
        timeout: $scope.alertDuration.value,
        icon: $scope.alertIcon.value,
        closeable: $scope.alertCloseable,
        closeall: $scope.alertCloseAll,
        focus: $scope.alertFocus
      };

      if (alert.closeall) {
        $scope.alerts = [];
      }

      $scope.alerts.push(alert);

      if (alert.focus) {
        $location.hash('alertsPlaceholder');

        // call $anchorScroll()
        $anchorScroll();
      }

      $timeout(function() {

        $scope.alerts.splice($scope.alerts.indexOf(alert), 1);

      }, $scope.alerts[$scope.alerts.indexOf(alert)].timeout);

    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

  }])

  .controller('ToasterDemoCtrl',['$scope', 'toastr', 'toastrConfig', function ($scope, toastr, toastrConfig) {

    var openedToasts = [];

    $scope.toast = {
      colors: [
        {name:'primary'},
        {name:'success'},
        {name:'warning'},
        {name:'danger'},
        {name:'info'},
        {name:'default'},
        {name:'cyan'},
        {name:'amethyst'},
        {name:'green'},
        {name:'orange'},
        {name:'red'},
        {name:'greensea'},
        {name:'dutch'},
        {name:'hotpink'},
        {name:'drank'},
        {name:'blue'},
        {name:'lightred'},
        {name:'slategray'},
        {name:'darkgray'}
      ],
      icons: [
        {name: 'none', value: ''},
        {name: 'warning', value: 'fa-warning'},
        {name: 'check', value: 'fa-check'},
        {name: 'user', value: 'fa-user'}
      ],
      msg: 'Gnome & Growl type non-blocking notifications',
      title: 'This is toaster notification'
    };

    $scope.options = {
      position: 'toast-top-right',
      type: 'success',
      iconClass: $scope.toast.colors[1],
      iconType: $scope.toast.icons[2],
      timeout: '5000',
      extendedTimeout: '1000',
      html: false,
      closeButton: false,
      tapToDismiss: true,
      closeHtml: '<i class="fa fa-times"></i>'
    };

    $scope.$watchCollection('options', function(newValue) {
      toastrConfig.allowHtml = newValue.html;
      toastrConfig.extendedTimeOut = parseInt(newValue.extendedTimeout, 10);
      toastrConfig.positionClass = newValue.position;
      toastrConfig.timeOut = parseInt(newValue.timeout, 10);
      toastrConfig.closeButton = newValue.closeButton;
      toastrConfig.tapToDismiss = newValue.tapToDismiss;
      toastrConfig.closeHtml = newValue.closeHtml;
      toastrConfig.iconType = newValue.iconType;
    });

    $scope.clearLastToast = function() {
      var toast = openedToasts.pop();
      toastr.clear(toast);
    };

    $scope.clearToasts = function() {
      toastr.clear();
    };

    $scope.openToast = function() {

      var toast = toastr[$scope.options.type]($scope.toast.msg, $scope.toast.title, {
                    iconClass: 'bg-'+$scope.options.iconClass.name,
                    iconType: $scope.options.iconType.value
                  });

      openedToasts.push(toast);

    };

  }]);

