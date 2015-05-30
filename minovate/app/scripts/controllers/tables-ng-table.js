'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesNgTableCtrl
 * @description
 * # TablesNgTableCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('TablesNgTableCtrl', function ($scope) {
    $scope.page = {
      title: 'ngTable',
      subtitle: 'Place subtitle here...'
    };
  })

  .controller('TableSortCtrl', function($scope, $filter, ngTableParams) {
    var data = [{name: 'Moroni', age: 50},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34}];

    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      sorting: {
        name: 'asc'     // initial sorting
      }
    }, {
      total: data.length, // length of data
      getData: function($defer, params) {
        // use build-in angular filter
        var orderedData = params.sorting() ?
            $filter('orderBy')(data, params.orderBy()) :
            data;

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });
  })

  .controller('TableFilterCtrl', function($scope, $filter, ngTableParams) {
    var data = [{name: 'Moroni', age: 50},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34}];

    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      filter: {
        name: 'M'       // initial filter
      },
      sorting: {
        name: 'asc'     // initial sorting
      }
    }, {
      total: data.length, // length of data
      getData: function($defer, params) {
        // use build-in angular filter
        var filteredData = params.filter() ?
            $filter('filter')(data, params.filter()) :
            data;
        var orderedData = params.sorting() ?
            $filter('orderBy')(filteredData, params.orderBy()) :
            data;

        params.total(orderedData.length); // set total for recalc pagination
        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });
  })

  .controller('TableEditCtrl', function($scope, $filter, $q, ngTableParams) {
    var data = [{id: 1, name: 'Moroni', age: 50, money: -10},
      {id: 2, name: 'Tiancum', age: 43,money: 120},
      {id: 3, name: 'Jacob', age: 27, money: 5.5},
      {id: 4, name: 'Nephi', age: 29,money: -54},
      {id: 5, name: 'Enos', age: 34,money: 110},
      {id: 6, name: 'Tiancum', age: 43, money: 1000},
      {id: 7, name: 'Jacob', age: 27,money: -201},
      {id: 8, name: 'Nephi', age: 29, money: 100},
      {id: 9, name: 'Enos', age: 34, money: -52.5},
      {id: 10, name: 'Tiancum', age: 43, money: 52.1},
      {id: 11, name: 'Jacob', age: 27, money: 110},
      {id: 12, name: 'Nephi', age: 29, money: -55},
      {id: 13, name: 'Enos', age: 34, money: 551},
      {id: 14, name: 'Tiancum', age: 43, money: -1410},
      {id: 15, name: 'Jacob', age: 27, money: 410},
      {id: 16, name: 'Nephi', age: 29, money: 100},
      {id: 17, name: 'Enos', age: 34, money: -100}
    ];

    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,           // count per page
      sorting: {
        name: 'asc'     // initial sorting
      }
    }, {
      total: data.length, // length of data
      getData: function($defer, params) {
        // use build-in angular filter
        var orderedData = params.sorting() ?
            $filter('orderBy')(data, params.orderBy()) :
            data;

        $defer.resolve($scope.users = orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });

    var inArray = Array.prototype.indexOf ?
      function (val, arr) {
        return arr.indexOf(val);
      } :
      function (val, arr) {
        var i = arr.length;
        while (i--) {
          if (arr[i] === val) {return i;}
        }
        return -1;
      };

    $scope.names = function() {
      var def = $q.defer(),
          arr = [],
          names = [];
      angular.forEach(data, function(item){
        if (inArray(item.name, arr) === -1) {
          arr.push(item.name);
          names.push({
            'id': item.name,
            'title': item.name
          });
        }
      });
      def.resolve(names);
      return def;
    };

    $scope.checkboxes = { 'checked': false, items: {} };

    // watch for check all checkbox
    $scope.$watch('checkboxes.checked', function(value) {
      angular.forEach($scope.users, function(item) {
        if (angular.isDefined(item.id)) {
          $scope.checkboxes.items[item.id] = value;
        }
      });
    });

    // watch for data checkboxes
    $scope.$watch('checkboxes.items', function() {
      if (!$scope.users) {
        return;
      }
      var checked = 0, unchecked = 0,
          total = $scope.users.length;
      angular.forEach($scope.users, function(item) {
        checked   +=  ($scope.checkboxes.items[item.id]) || 0;
        unchecked += (!$scope.checkboxes.items[item.id]) || 0;
      });
      if ((unchecked === 0) || (checked === 0)) {
        $scope.checkboxes.checked = (checked === total);
      }
      // grayed checkbox
      angular.element(document.getElementById('select_all')).prop('indeterminate', (checked !== 0 && unchecked !== 0));
    }, true);
  })

  .controller('TableColumnsCtrl', function($scope, $filter, ngTableParams) {
    var data = [{name: 'Moroni', age: 50},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34}];
    $scope.columns = [
      { title: 'Name', field: 'name', visible: true, filter: { 'name': 'text' } },
      { title: 'Age', field: 'age', visible: true }
    ];
    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      filter: {
        name: 'M'       // initial filter
      }
    }, {
      total: data.length, // length of data
      getData: function($defer, params) {
        // use build-in angular filter
        var orderedData = params.sorting() ?
            $filter('orderBy')(data, params.orderBy()) :
            data;

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });
  })

  .controller('TableGroupCtrl', function($scope, $filter, ngTableParams, $timeout) {
    $scope.rows = [{name: 'Moroni', age: 50, role: 'Administrator', date: '00/00/01'},
      {name: 'Tiancum', age: 43, role: 'Administrator', date: '00/00/01'},
      {name: 'Jacob', age: 27, role: 'Administrator', date: '00/00/01'},
      {name: 'Nephi', age: 29, role: 'Moderator', date: '00/00/01'},
      {name: 'Enos', age: 34, role: 'User', date: '00/00/01'},
      {name: 'Tiancum', age: 43, role: 'User', date: '00/00/01'},
      {name: 'Jacob', age: 27, role: 'User', date: '00/00/01'},
      {name: 'Nephi', age: 29, role: 'Moderator', date: '00/00/01'},
      {name: 'Enos', age: 34, role: 'User', date: '00/00/01'},
      {name: 'Tiancum', age: 43, role: 'Moderator', date: '00/00/01'},
      {name: 'Jacob', age: 27, role: 'User', date: '00/00/01'},
      {name: 'Nephi', age: 29, role: 'User', date: '00/00/01'},
      {name: 'Enos', age: 34, role: 'Moderator', date: '00/00/01'},
      {name: 'Tiancum', age: 43, role: 'User', date: '00/00/01'},
      {name: 'Jacob', age: 27, role: 'User', date: '00/00/01'},
      {name: 'Nephi', age: 29, role: 'User', date: '00/00/01'},
      {name: 'Enos', age: 34, role: 'User', date: '00/00/01'},
      {name: 'Micah', age: 29, role: 'Moderator', date: '00/00/01'},
      {name: 'Viviane', age: 34, role: 'Moderator', date: '00/00/01'},
      {name: 'Marconi', age: 43, role: 'User', date: '00/00/01'},
      {name: 'Leonan', age: 27, role: 'Administrator', date: '00/00/02'},
      {name: 'Arnaldo', age: 29, role: 'User', date: '00/00/02'},
      {name: 'Zuleide', age: 34, role: 'Moderator', date: '00/00/02'}];

    $scope.groupby = 'role'; //Default order IF null get table without groups(not possible ?)

    //dynamic grouping
    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 100          // count per page
    }, {
      groupBy: $scope.groupby,
      total: function () { return $scope.rows.length; }, // length of data
      getData: function($defer, params) {
        var orderedData = params.sorting() ?
            $filter('orderBy')($scope.rows, $scope.tableParams.orderBy()) :   $scope.rows;

        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });

    $timeout(function(){
      $scope.$watch('groupby', function(value){
        $scope.tableParams.settings().groupBy = value;
        console.log('Scope Value', $scope.groupby);
        console.log('Watch value', this.last);
        console.log('new table',$scope.tableParams);
        $scope.tableParams.reload();
      });
    }, 0);


  })

  .controller('TableRowCtrl', function ($scope, $filter, ngTableParams) {
    var data = [
      {name: 'Moroni', age: 50},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34},
      {name: 'Tiancum', age: 43},
      {name: 'Jacob', age: 27},
      {name: 'Nephi', age: 29},
      {name: 'Enos', age: 34}
    ];
    $scope.data = data;

    $scope.tableParams = new ngTableParams({
      page: 1,            // show first page
      count: 10,          // count per page
      filter: {
        //name: 'M'       // initial filter
      },
      sorting: {
        //name: 'asc'     // initial sorting
      }
    }, {
      total: data.length, // length of data
      getData: function ($defer, params) {
        // use build-in angular filter
        var filteredData = params.filter() ?
            $filter('filter')(data, params.filter()) :
            data;
        var orderedData = params.sorting() ?
            $filter('orderBy')(filteredData, params.orderBy()) :
            data;

        params.total(orderedData.length); // set total for recalc pagination
        $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
      }
    });

    $scope.changeSelection = function() {
      // console.info(user);
    };
  });
