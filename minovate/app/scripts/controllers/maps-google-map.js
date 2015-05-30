'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:MapsGoogleMapCtrl
 * @description
 * # MapsGoogleMapCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('GoogleMapCtrl', function ($scope) {
    $scope.page = {
      title: 'Google Maps',
      subtitle: 'Place subtitle here...'
    };

  })

  .controller('Map1Ctrl', function ($scope) {
    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 14 };
    $scope.options = {scrollwheel: false};
  })

  .controller('Map2Ctrl', function($scope) {
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4, bounds: {}};
    $scope.options = {scrollwheel: false};
    $scope.drawingManagerOptions = {
      drawingMode: google.maps.drawing.OverlayType.MARKER,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          google.maps.drawing.OverlayType.CIRCLE,
          google.maps.drawing.OverlayType.POLYGON,
          google.maps.drawing.OverlayType.POLYLINE,
          google.maps.drawing.OverlayType.RECTANGLE
        ]
      },
      circleOptions: {
        fillColor: '#ffff00',
        fillOpacity: 1,
        strokeWeight: 5,
        clickable: false,
        editable: true,
        zIndex: 1
      }
    };
    $scope.markersAndCircleFlag = true;
    $scope.drawingManagerControl = {};
    $scope.$watch('markersAndCircleFlag', function() {
      if (!$scope.drawingManagerControl.getDrawingManager) {
        return;
      }
      var controlOptions = angular.copy($scope.drawingManagerOptions);
      if (!$scope.markersAndCircleFlag) {
        controlOptions.drawingControlOptions.drawingModes.shift();
        controlOptions.drawingControlOptions.drawingModes.shift();
      }
      $scope.drawingManagerControl.getDrawingManager().setOptions(controlOptions);
    });
  })

  .controller('Map3Ctrl', function($scope) {
    $scope.map = {center: {latitude: 51.219053, longitude: 4.404418 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.showWeather = true;
  })

  .controller('Map4Ctrl', function($scope, $log) {
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680}, zoom: 4};
    $scope.options = {scrollwheel: false};
    $scope.marker = {
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      show: false,
      id: 0
    };

    $scope.windowOptions = {
      visible: false
    };

    $scope.onClick = function () {
      $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function () {
      $scope.windowOptions.visible = false;
    };

    $scope.title = 'Window Title!';
  });
