'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:PagesGalleryCtrl
 * @description
 * # PagesGalleryCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('GalleryCtrl', function ($scope) {

    $scope.page = {
      title: 'Gallery',
      subtitle: 'Place subtitle here...'
    };

    $scope.images = [
      {
        src: 'http://lorempixel.com/800/600/cats/1',
        title: 'Sed ut perspiciatis unde',
        category: 'cats',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/cats/2',
        title: 'Quis autem vel eum iure',
        category: 'cats',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/cats/3',
        title: 'Temporibus autem quibusdam',
        category: 'cats',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/cats/4',
        title: 'Neque porro quisquam est',
        category: 'cats',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/cats/5',
        title: 'Et harum quidem rerum',
        category: 'cats',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/animals/6',
        title: 'Nemo enim ipsam voluptatem',
        category: 'animals',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/animals/7',
        title: 'At vero eos et accusamus',
        category: 'animals',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/animals/8',
        title: 'Itaque earum rerum hic tenetur',
        category: 'animals',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/animals/9',
        title: 'Ut enim ad minima veniam',
        category: 'animals',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/animals/10',
        title: 'Temporibus autem quibusdam',
        category: 'animals',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/city/1',
        title: 'Neque porro quisquam est',
        category: 'cities',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/city/2',
        title: 'Nam libero tempore',
        category: 'cities',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/city/3',
        title: 'Neque porro quisquam est',
        category: 'cities',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/city/4',
        title: 'Nam libero tempore',
        category: 'cities',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/city/5',
        title: 'Neque porro quisquam est',
        category: 'cities',
        selected: false
      },{
        src: 'http://lorempixel.com/800/600/city/6',
        title: 'Nam libero tempore',
        category: 'cities',
        selected: false
     }
    ];

    $scope.selectedAll = false;
    $scope.isSelected = false;

    $scope.selectAll = function () {

      if ($scope.selectedAll) {
        $scope.selectedAll = false;
        $scope.isSelected = false;
      } else {
        $scope.selectedAll = true;
        $scope.isSelected = true;
      }

      angular.forEach($scope.images, function(image) {
        image.selected = $scope.selectedAll;
      });
    };

    $scope.selectImage = function(index) {

      var i = 0;

      if ($scope.images[index].selected) {
        $scope.images[index].selected = false;
      } else {
        $scope.images[index].selected = true;
        $scope.isSelected = true;
      }

      angular.forEach($scope.images, function(image) {
        if (image.selected) {
          i++;
        }
      });

      if (i === 0) {
        $scope.isSelected = false;
      }
    };

  });
