'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:TablesDatatablesCtrl
 * @description
 * # TablesDatatablesCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')

  .controller('TablesDatatablesCtrl', function ($scope) {

    $scope.page = {
      title: 'DataTables',
      subtitle: 'Place subtitle here...'
    };

  })

  .controller('BasicDatatableCtrl', function ($scope, DTOptionsBuilder, DTColumnBuilder, $resource) {

    var vm = this;
    vm.message = '';

    function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
      // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
      angular.element('td', nRow).unbind('click');
      angular.element('td', nRow).bind('click', function() {
        $scope.$apply(function() {
          vm.someClickHandler(aData);
        });
        angular.element('.row_selected').removeClass('row_selected');
        angular.element(nRow).addClass('row_selected');
      });
      return nRow;
    }

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        return $resource('http://www.filltext.com/?rows=300&id={index}&firstName={firstName}&lastName={lastName}&pretty=true').query().$promise;
    })

      .withPaginationType('full_numbers')
      .withBootstrap()
      // Activate col reorder plugin
      .withColReorder()
      .withColReorderCallback(function() {
        console.log('Columns order has been changed with: ' + this.fnOrder());
      })
      .withOption('rowCallback', rowCallback);

    vm.dtColumns = [
      DTColumnBuilder.newColumn('id').withTitle('ID'),
      DTColumnBuilder.newColumn('firstName').withTitle('First name'),
      DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];

    function someClickHandler(info) {
      vm.message = info.id + ' - ' + info.firstName;
    }

    vm.someClickHandler = someClickHandler;

  })

  .controller('ChangeDatatableCtrl', function ($scope, $resource, DTOptionsBuilder, DTColumnDefBuilder) {

    var vm = this;

    function _buildPerson2Add(id) {
      return {
        id: id,
        firstName: 'Foo' + id,
        lastName: 'Bar' + id
      };
    }
    function addPerson() {
      vm.persons.push(angular.copy(vm.person2Add));
      vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }
    function modifyPerson(index) {
      vm.persons.splice(index, 1, angular.copy(vm.person2Add));
      vm.person2Add = _buildPerson2Add(vm.person2Add.id + 1);
    }
    function removePerson(index) {
      vm.persons.splice(index, 1);
    }

    vm.persons = $resource('http://www.filltext.com/?rows=16&id={index}&firstName={firstName}&lastName={lastName}&pretty=true').query();
    vm.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withBootstrap();
    vm.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1),
      DTColumnDefBuilder.newColumnDef(2),
      DTColumnDefBuilder.newColumnDef(3).notSortable()
    ];
    vm.person2Add = _buildPerson2Add(1);
    vm.addPerson = addPerson;
    vm.modifyPerson = modifyPerson;
    vm.removePerson = removePerson;

  })

  .controller('ResponsiveDatatableCtrl', function ($scope, DTOptionsBuilder, DTColumnBuilder) {

    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromSource('http://www.filltext.com/?rows=300&id={index}&firstName={firstName}&lastName={lastName}&tel={phone|format}&address={streetAddress}&city={city}&state={usState|abbr}&zip={zip}&pretty=true')
      .withPaginationType('full_numbers')
      .withBootstrap()
      // Active Responsive plugin
      .withOption('responsive', true);
    vm.dtColumns = [
      DTColumnBuilder.newColumn('id').withTitle('ID'),
      DTColumnBuilder.newColumn('firstName').withTitle('First name'),
      DTColumnBuilder.newColumn('lastName').withTitle('Last name'),
      // .notVisible() does not work in this case. Use .withClass('none') instead
      DTColumnBuilder.newColumn('tel').withTitle('Phone').withClass('none'),
      DTColumnBuilder.newColumn('address').withTitle('Street Address').withClass('none'),
      DTColumnBuilder.newColumn('city').withTitle('City').withClass('none'),
      DTColumnBuilder.newColumn('state').withTitle('State').withClass('none'),
      DTColumnBuilder.newColumn('zip').withTitle('Zip').withClass('none')
    ];
  })

  .controller('AdvancedDatatableCtrl', function ($scope, DTOptionsBuilder, DTColumnBuilder) {

    var vm = this;

    function stateChange(iColumn, bVisible) {
      console.log('The column', iColumn, ' has changed its status to', bVisible);
    }

    vm.dtOptions = DTOptionsBuilder.fromSource('http://www.filltext.com/?rows=300&id={index}&firstName={firstName}&lastName={lastName}&pretty=true')
      // Add Bootstrap compatibility
      .withBootstrap()
      // Active ColVis plugin
      .withColVis()
      // Add a state change function
      .withColVisStateChange(stateChange)
      // Exclude the last column from the list
      .withColVisOption('aiExclude', [2])
      // Add Table tools compatibility
      .withTableTools('scripts/vendor/datatables/TableTools/swf/copy_csv_xls_pdf.swf')
      .withTableToolsButtons([
        'copy',
        'print', {
          'sExtends': 'collection',
          'sButtonText': 'Save',
          'aButtons': ['csv', 'xls', 'pdf']
        }
      ]);
    vm.dtColumns = [
      DTColumnBuilder.newColumn('id').withTitle('ID'),
      DTColumnBuilder.newColumn('firstName').withTitle('First name'),
      DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];


  });
