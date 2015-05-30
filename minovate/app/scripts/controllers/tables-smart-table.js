'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesSmartTableCtrl
 * @description
 * # TablesSmartTableCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('TablesSmartTableCtrl', function ($scope) {
    $scope.page = {
      title: 'Smart Table',
      subtitle: 'Place subtitle here...'
    };
  })

  .controller('BasicTableCtrl', ['$scope', '$filter', function ($scope) {
    var firstnames = ['Laurent', 'Blandine', 'Olivier', 'Max'];
    var lastnames = ['Renard', 'Faivre', 'Frere', 'Eponge'];
    var dates = ['1987-05-21', '1987-04-25', '1955-08-27', '1966-06-06'];
    var id = 1;

    function generateRandomItem(id) {

      var firstname = firstnames[Math.floor(Math.random() * 3)];
      var lastname = lastnames[Math.floor(Math.random() * 3)];
      var birthdate = dates[Math.floor(Math.random() * 3)];
      var balance = Math.floor(Math.random() * 2000);

      return {
        id: id,
        firstName: firstname,
        lastName: lastname,
        birthDate: new Date(birthdate),
        balance: balance
      };
    }

    $scope.rowCollection = [];

    for (id; id < 5; id++) {
      $scope.rowCollection.push(generateRandomItem(id));
    }

    //copy the references (you could clone ie angular.copy but then have to go through a dirty checking for the matches)
    $scope.displayedCollection = [].concat($scope.rowCollection);

    //add to the real data holder
    $scope.addRandomItem = function addRandomItem() {
      $scope.rowCollection.push(generateRandomItem(id));
      id++;
    };

    //remove to the real data holder
    $scope.removeItem = function removeItem(row) {
      var index = $scope.rowCollection.indexOf(row);
      if (index !== -1) {
        $scope.rowCollection.splice(index, 1);
      }
    };

    $scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
    $scope.selectedPredicate = $scope.predicates[0];
  }])

  .controller('RowTableCtrl', ['$scope', '$filter', function (scope) {
    var
        nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'],
        familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

    function createRandomItem() {
      var
          firstName = nameList[Math.floor(Math.random() * 4)],
          lastName = familyName[Math.floor(Math.random() * 4)],
          age = Math.floor(Math.random() * 100),
          email = firstName + lastName + '@whatever.com',
          balance = Math.random() * 3000;

      return{
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        balance: balance
      };
    }

    scope.itemsByPage=10;

    scope.rowCollection = [];
    for (var j = 0; j < 200; j++) {
      scope.rowCollection.push(createRandomItem());
    }
  }])

  .controller('PipeTableCtrl', ['$scope', '$timeout', function ($scope, $timeout) {
    var nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'];
    var familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];
    var promise = null;


    $scope.isLoading = false;
    $scope.rowCollection = [];


    function createRandomItem() {
      var
          firstName = nameList[Math.floor(Math.random() * 4)],
          lastName = familyName[Math.floor(Math.random() * 4)],
          age = Math.floor(Math.random() * 100),
          email = firstName + lastName + '@whatever.com',
          balance = Math.random() * 3000;

      return{
        firstName: firstName,
        lastName: lastName,
        age: age,
        email: email,
        balance: balance
      };
    }

    function getAPage() {
      $scope.rowCollection=[];
      for (var j = 0; j < 20; j++) {
        $scope.rowCollection.push(createRandomItem());
      }
    }

    $scope.callServer = function getData(tableState, tableController) {

      //here you could create a query string from tableState
      //fake ajax call
      $scope.isLoading = true;

      $timeout(function () {
        getAPage();
        $scope.isLoading = false;
      }, 2000);

    };

    getAPage();

  }]);


