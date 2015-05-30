/**
 * Sometimes for quick navigation, it can be useful to allow an end user to
 * enter which page they wish to jump to manually. This paging control uses a
 * text input box to accept new paging numbers (arrow keys are also allowed
 * for), and four standard navigation buttons are also presented to the end
 * user.
 *
 *  @name Navigation with text input
 *  @summary Shows an input element into which the user can type a page number
 *  @author [Allan Jardine](http://sprymedia.co.uk)
 *
 *  @example
 *    $(document).ready(function() {
 *        $('#example').dataTable( {
 *            "sPaginationType": "input"
 *        } );
 *    } );
 */

$.fn.dataTableExt.oPagination.input = {
  "fnInit": function (oSettings, nPaging, fnDraw) {
    var oLang = oSettings.oLanguage.oPaginate;
    var oPaging = oSettings.oInstance.fnPagingInfo();

    var fnClickHandler = function (e) {
      e.preventDefault();
      if (oSettings.oApi._fnPageChange(oSettings, e.data.action)) {
        fnDraw(oSettings);
      }
    };

    $(nPaging).append(
      '<div class="pagination-panel"> ' + oLang.sPage + ' ' +
      '<a href="#" class="btn btn-sm btn-default prev disabled" title="' + oLang.sPrevious + '"><i class="fa fa-angle-left"></i></a>' +
      '<input type="text" class="pagination-panel-input form-control input-sm input-inline w-40" maxlenght="5" style="text-align:center; margin: 0 6px">' +
      '<a href="#" class="btn btn-sm btn-default next disabled" title="' + oLang.sNext + '"><i class="fa fa-angle-right"></i></a> ' +
      oLang.sPageOf + ' <span class="pagination-panel-total"></span>' +
      '</div>'
    );

    var els = $('a', nPaging);

    $(els[0]).bind('click.DT', {
      action: "previous"
    }, fnClickHandler);
    $(els[1]).bind('click.DT', {
      action: "next"
    }, fnClickHandler);

    $('.pagination-panel-input', nPaging).bind('change.DT', function (e) {
      var oPaging = oSettings.oInstance.fnPagingInfo();
      e.preventDefault();
      var page = parseInt($(this).val());
      if (page > 0 && page <= oPaging.iTotalPages) {
        if (oSettings.oApi._fnPageChange(oSettings, page - 1)) {
          fnDraw(oSettings);
        }
      } else {
        $(this).val(oPaging.iPage + 1);
      }
    });

    $('.pagination-panel-input', nPaging).bind('keypress.DT', function (e) {
      var oPaging = oSettings.oInstance.fnPagingInfo();
      if (e.which == 13) {
        var page = parseInt($(this).val());
        if (page > 0 && page <= oSettings.oInstance.fnPagingInfo().iTotalPages) {
          if (oSettings.oApi._fnPageChange(oSettings, page - 1)) {
            fnDraw(oSettings);
          }
        } else {
          $(this).val(oPaging.iPage + 1);
        }
        e.preventDefault();
      }
    });
  },

  "fnUpdate": function (oSettings, fnDraw) {
    var iListLength = 5;
    var oPaging = oSettings.oInstance.fnPagingInfo();
    var an = oSettings.aanFeatures.p;
    var i, j, sClass, iStart, iEnd, iHalf = Math.floor(iListLength / 2);

    if (oPaging.iTotalPages < iListLength) {
      iStart = 1;
      iEnd = oPaging.iTotalPages;
    } else if (oPaging.iPage <= iHalf) {
      iStart = 1;
      iEnd = iListLength;
    } else if (oPaging.iPage >= (oPaging.iTotalPages - iHalf)) {
      iStart = oPaging.iTotalPages - iListLength + 1;
      iEnd = oPaging.iTotalPages;
    } else {
      iStart = oPaging.iPage - iHalf + 1;
      iEnd = iStart + iListLength - 1;
    }

    for (i = 0, iLen = an.length; i < iLen; i++) {
      var wrapper = $(an[i]).parents(".dataTables_wrapper");

      if (oPaging.iTotal <= 0) {
        $('.dataTables_paginate, .dataTables_length', wrapper).hide();
      } else {
        $('.dataTables_paginate, .dataTables_length', wrapper).show();
      }

      if (oPaging.iTotalPages <= 0) {
        $('.dataTables_paginate, .dataTables_length .seperator', wrapper).hide();
      } else {
        $('.dataTables_paginate, .dataTables_length .seperator', wrapper).show();
      }

      $('.pagination-panel-total', an[i]).html(oPaging.iTotalPages);
      $('.pagination-panel-input', an[i]).val(oPaging.iPage + 1);

      // Remove the middle elements
      $('li:gt(1)', an[i]).filter(':not(.next)').remove();

      // Add the new list items and their event handlers
      for (j = iStart; j <= iEnd; j++) {
        sClass = (j == oPaging.iPage + 1) ? 'class="active"' : '';
        $('<li ' + sClass + '><a href="#">' + j + '</a></li>')
          .insertBefore($('li.next:first', an[i])[0])
          .bind('click', function (e) {
            e.preventDefault();
            oSettings._iDisplayStart = (parseInt($('a', this).text(), 10) - 1) * oPaging.iLength;
            fnDraw(oSettings);
          });
      }

      // Add / remove disabled classes from the static elements
      if (oPaging.iPage === 0) {
        $('a.prev', an[i]).addClass('disabled');
      } else {
        $('a.prev', an[i]).removeClass('disabled');
      }

      if (oPaging.iPage === oPaging.iTotalPages - 1 || oPaging.iTotalPages === 0) {
        $('a.next', an[i]).addClass('disabled');
      } else {
        $('a.next', an[i]).removeClass('disabled');
      }
    }
  }
};
