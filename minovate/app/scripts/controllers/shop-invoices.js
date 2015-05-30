'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:ShopOrdersCtrl
 * @description
 * # ShopOrdersCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .controller('InvoicesCtrl', function ($scope) {
    $scope.page = {
      title: 'Invoices',
      subtitle: 'Place subtitle here...'
    };
  })

  .controller('InvoicesTableCtrl', function ($scope, DTOptionsBuilder, DTColumnDefBuilder, DTColumnBuilder, $resource) {

    var vm = this;
    vm.invoices = [];
    vm.dtOptions = DTOptionsBuilder.newOptions()
      .withBootstrap()
      .withOption('order', [[1, 'asc']])
      .withDOM('<"row"<"col-md-8 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"pull-right"f>>>t<"row"<"col-md-4 col-sm-12"<"inline-controls"l>><"col-md-4 col-sm-12"<"inline-controls text-center"i>><"col-md-4 col-sm-12"p>>')
      .withLanguage({
        "sLengthMenu": 'View _MENU_ records',
        "sInfo":  'Found _TOTAL_ records',
        "oPaginate": {
          "sPage":    "Page",
          "sPageOf":  "of"
        }
      })
      .withPaginationType('input')
      //.withScroller()
      //.withOption("sScrollY", false)
      //.withOption("sScrollX")
      .withColumnFilter();


    vm.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0).notSortable(),
      DTColumnDefBuilder.newColumnDef(6).notSortable()
    ];

    vm.selectedAll = false;

    vm.selectAll = function () {

      if ($scope.selectedAll) {
        $scope.selectedAll = false;
      } else {
        $scope.selectedAll = true;
      }

      angular.forEach(vm.invoices, function(invoice) {
        invoice.selected = $scope.selectedAll;
      });
    };

    $resource('http://www.filltext.com/?rows=300&id={index}&date={date|01-01-2012,01-01-2015}&invoicefor={firstName}~{lastName}&status=["paid","unpaid","sent","cancelled"]&total={numberLength|3}}&selected=false&pretty=true').query().$promise.then(function(invoices) {
      vm.invoices = invoices;
    });

  });
