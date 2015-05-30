'use strict';

/**
 * @ngdoc directive
 * @name minovateApp.directive:toastrInject
 * @description
 * # toastrInject - fontawesome support for angular-toastr plugin
 */
angular.module('minovateApp')
  /* jshint ignore:start */
  .run(['$templateCache', function($templateCache) {
    'use strict';

    $templateCache.put('templates/toastr/toastr.html',
            "<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\n" +
            "  <i class=\"fa {{iconType}}\"></i>\n" +
            "  <div ng-switch on=\"allowHtml\">\n" +
            "    <div ng-switch-default ng-if=\"title\" class=\"{{titleClass}}\">{{title}}</div>\n" +
            "    <div ng-switch-default class=\"{{messageClass}}\">{{message}}</div>\n" +
            "    <div ng-switch-when=\"true\" ng-if=\"title\" class=\"{{titleClass}}\" ng-bind-html=\"title\"></div>\n" +
            "    <div ng-switch-when=\"true\" class=\"{{messageClass}}\" ng-bind-html=\"message\"></div>\n" +
            "  </div>\n" +
            "</div>"
    );

  }])

  .constant('toastrConfig', {
    allowHtml: false,
    closeButton: false,
    closeHtml: '<button>&times;</button>',
    containerId: 'toast-container',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },
    messageClass: 'toast-message',
    positionClass: 'toast-top-right',
    tapToDismiss: true,
    timeOut: 5000,
    titleClass: 'toast-title',
    toastClass: 'toast'
  })

  .factory('toastr', ['$animate', '$compile', '$document', '$rootScope', '$sce', 'toastrConfig', '$q', function($animate, $compile, $document, $rootScope, $sce, toastrConfig, $q) {

    var container, index = 0, toasts = [];
    var containerDefer = $q.defer();

    var toast = {
      clear: clear,
      error: error,
      info: info,
      remove: remove,
      success: success,
      warning: warning
    };

    return toast;

    /* Public API */
    function clear(toast) {
      if (toast) {
        remove(toast.toastId);
      } else {
        for (var i = 0; i < toasts.length; i++) {
          remove(toasts[i].toastId);
        }
      }
    }

    function error(message, title, optionsOverride) {
      var type = _getOptions().iconClasses.error;
      return _buildNotification(type, message, title, optionsOverride);
    }

    function info(message, title, optionsOverride) {
      var type = _getOptions().iconClasses.info;
      return _buildNotification(type, message, title, optionsOverride);
    }

    function success(message, title, optionsOverride) {
      var type = _getOptions().iconClasses.success;
      return _buildNotification(type, message, title, optionsOverride);
    }

    function warning(message, title, optionsOverride) {
      var type = _getOptions().iconClasses.warning;
      return _buildNotification(type, message, title, optionsOverride);
    }

    function remove(toastId) {
      var toast = findToast(toastId);

      if (toast) { // Avoid clicking when fading out

        $animate.leave(toast.el).then(function() {
          if (toast.scope.options.onHidden) {
            toast.scope.options.onHidden();
          }
          toast.scope.$destroy();
          var index = toasts.indexOf(toast);
          toasts.splice(index, 1);
          var maxOpened = toastrConfig.maxOpened;
          if (maxOpened && toasts.length >= maxOpened) {
            toasts[maxOpened - 1].open.resolve();
          }
          if (lastToast()) {
            container.remove();
            container = null;
            containerDefer = $q.defer();
          }
        });
      }

      function findToast(toastId) {
        for (var i = 0; i < toasts.length; i++) {
          if (toasts[i].toastId === toastId) {
            return toasts[i];
          }
        }
      }

      function lastToast() {
        return !toasts.length;
      }
    }

    /* Internal functions */
    function _buildNotification(type, message, title, optionsOverride)
    {
      if (typeof title === 'object') {
        optionsOverride = title;
        title = null;
      }

      return _notify({
        iconClass: type,
        message: message,
        optionsOverride: optionsOverride,
        title: title
      });
    }

    function _getOptions() {
      return angular.extend({}, toastrConfig);
    }

    function _createOrGetContainer(options) {
      if(container) { return containerDefer.promise; }

      container = angular.element('<div></div>');
      container.attr('id', options.containerId);
      container.addClass(options.positionClass);
      container.css({'pointer-events': 'auto'});

      var body = $document.find('body').eq(0);

      $animate.enter(container, body).then(function() {
        containerDefer.resolve();
      });

      return containerDefer.promise;
    }

    function _notify(map) {
      var options = _getOptions();

      var newToast = createToast();

      toasts.push(newToast);

      if (maxOpenedNotReached()) {
        newToast.open.resolve();
      }

      newToast.open.promise.then(function() {
        _createOrGetContainer(options).then(function() {
          if (options.newestOnTop) {
            $animate.enter(newToast.el, container).then(function() {
              newToast.scope.init();
            });
          } else {
            $animate.enter(newToast.el, container, container[0].lastChild).then(function() {
              newToast.scope.init();
            });
          }
        });
      });

      return newToast;

      function createScope(toast, map, options) {
        if (options.allowHtml) {
          toast.scope.allowHtml = true;
          toast.scope.title = $sce.trustAsHtml(map.title);
          toast.scope.message = $sce.trustAsHtml(map.message);
        } else {
          toast.scope.title = map.title;
          toast.scope.message = map.message;
        }

        toast.scope.toastType = toast.iconClass;
        toast.scope.toastId = toast.toastId;

        toast.scope.options = {
          extendedTimeOut: options.extendedTimeOut,
          messageClass: options.messageClass,
          onHidden: options.onHidden,
          onShown: options.onShown,
          tapToDismiss: options.tapToDismiss,
          timeOut: options.timeOut,
          titleClass: options.titleClass,
          toastClass: options.toastClass,
          //iconType added for fontawesome
          iconType: options.iconType
        };

        if (options.closeButton) {
          toast.scope.options.closeHtml = options.closeHtml;
        }
      }

      function createToast() {
        var newToast = {
          toastId: index++,
          scope: $rootScope.$new(),
          open: $q.defer()
        };
        newToast.iconClass = map.iconClass;
        if (map.optionsOverride) {
          options = angular.extend(options, map.optionsOverride);
          newToast.iconClass = map.optionsOverride.iconClass || newToast.iconClass;
        }

        createScope(newToast, map, options);

        newToast.el = createToastEl(newToast.scope);

        return newToast;
      }

      function createToastEl(scope) {
        var angularDomEl = angular.element('<div toast></div>');
        return $compile(angularDomEl)(scope);
      }

      function maxOpenedNotReached() {
        return options.maxOpened && toasts.length <= options.maxOpened || !options.maxOpened;
      }
    }

  }])
  /* jshint ignore:end */

  .directive('toast', function () {
    return {
      link: function(scope) {
        //scope iconType added for fontawesome
        scope.iconType = scope.options.iconType;
      }
    };
  });

