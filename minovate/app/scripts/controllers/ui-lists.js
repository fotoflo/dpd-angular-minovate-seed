'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:ListsCtrl
 * @description
 * # ListsCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('ListsCtrl', function ($scope) {

    $scope.page = {
      title: 'Lists',
      subtitle: 'Place subtitle here...'
    };

    $scope.list = [
      {
        id: 1,
        title: 'Item 1',
        items: []
      }, {
        id: 2,
        title: 'Item 2',
        items: [
          {
            id: 21,
            title: 'Item 2.1',
            items: [
              {
                id: 211,
                title: 'Item 2.1.1',
                items: []
              }, {
                id: 212,
                title: 'Item 2.1.2',
                items: []
              }
            ]
          }, {
            id: 22,
            title: 'Item 2.2',
            items: [
              {
                id: 221,
                title: 'Item 2.2.1',
                items: []
              }, {
                id: 222,
                title: 'Item 2.2.2',
                items: []
              }
            ]
          }
        ]
      }, {
        id: 3,
        title: 'Item 3',
        items: []
      }, {
        id: 4,
        title: 'Item 4',
        items: [
          {
            id: 41,
            title: 'Item 4.1',
            items: []
          }
        ]
      }, {
        id: 5,
        title: 'Item 5',
        items: []
      }, {
        id: 6,
        title: 'Item 6',
        items: []
      }, {
        id: 7,
        title: 'Item 7',
        items: []
      }
    ];

    $scope.list2 = [
      {
        id: 1,
        title: 'Item 1',
        items: []
      }, {
        id: 2,
        title: 'Item 2',
        items: [
          {
            id: 21,
            title: 'Item 2.1',
            items: [
              {
                id: 211,
                title: 'Item 2.1.1',
                items: []
              }, {
                id: 212,
                title: 'Item 2.1.2',
                items: []
              }
            ]
          }, {
            id: 22,
            title: 'Item 2.2',
            items: [
              {
                id: 221,
                title: 'Item 2.2.1',
                items: []
              }, {
                id: 222,
                title: 'Item 2.2.2',
                items: []
              }
            ]
          }
        ]
      }, {
        id: 3,
        title: 'Item 3',
        items: []
      }, {
        id: 4,
        title: 'Item 4',
        items: [
          {
            id: 41,
            title: 'Item 4.1',
            items: []
          }
        ]
      }, {
        id: 5,
        title: 'Item 5',
        items: []
      }, {
        id: 6,
        title: 'Item 6',
        items: []
      }, {
        id: 7,
        title: 'Item 7',
        items: []
      }
    ];

    /*$scope.editItem = function(scope) {
      scope.editing = true;
    };*/

    $scope.cancelEditingItem = function(scope) {
      scope.editing = false;
    };

    /*$scope.saveGroup = function(group) {
      group.save();
    };*/

    $scope.selectedItem = {};

    $scope.options = {};

    $scope.remove = function(scope) {
      scope.remove();
    };

    $scope.toggle = function(scope) {
      scope.toggle();
    };

    $scope.newSubItem = function(scope) {
      var nodeData;
      nodeData = scope.$modelValue;
      nodeData.items.push({
        id: nodeData.id * 10 + nodeData.items.length,
        title: nodeData.title + '.' + (nodeData.items.length + 1),
        items: []
      });
    };

    var getRootNodesScope = function($event) {
      var target = angular.element($event.target).parents('.tile').find('.angular-ui-tree');

      return target.scope();
    };

    $scope.collapseAll = function($event) {
      var scope = getRootNodesScope($event);
      scope.collapseAll();
    };

    $scope.expandAll = function($event) {
      var scope = getRootNodesScope($event);
      scope.expandAll();
    };

  });
