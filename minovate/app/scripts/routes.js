(function() {
'use strict'

angular
  .module('minovateApp')
  .config(['$stateProvider', '$urlRouterProvider', router]);

function router($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/app/dashboard');

  $stateProvider

  .state('app', {
    abstract: true,
    url: '/app',
    templateUrl: 'views/tmpl/app.html'
  })
  //dashboard
  .state('app.dashboard', {
    url: '/dashboard',
    controller: 'DashboardCtrl',
    templateUrl: 'views/tmpl/dashboard.html',
    resolve: {
      plugins: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load([
          'scripts/vendor/datatables/datatables.bootstrap.min.css'
        ]);
      }]
    }
  })
  //ui
  .state('app.ui', {
    url: '/ui',
    template: '<div ui-view></div>'
  })
  //ui/typography
  .state('app.ui.typography', {
    url: '/typography',
    controller: 'TypographyCtrl',
    templateUrl: 'views/tmpl/ui/typography.html',
    resolve: {
      plugins: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load([
          'scripts/vendor/google-code-prettify/prettify.css',
          'scripts/vendor/google-code-prettify/sons-of-obsidian.css',
          'scripts/vendor/google-code-prettify/prettify.js'
        ]);
      }]
    }
  })
  //ui/lists
  .state('app.ui.lists', {
    url: '/lists',
    controller: 'ListsCtrl',
    templateUrl: 'views/tmpl/ui/lists.html'
  })
  //ui/buttons&icons
  .state('app.ui.buttons-icons', {
    url: '/buttons-icons',
    controller: 'ButtonsIconsCtrl',
    templateUrl: 'views/tmpl/ui/buttons-icons.html'
  })
  //ui/navs&accordions
  .state('app.ui.navs', {
    url: '/navs',
    controller: 'NavsCtrl',
    templateUrl: 'views/tmpl/ui/navs.html'
  })
  //ui/modals
  .state('app.ui.modals', {
    url: '/modals',
    controller: 'ModalsCtrl',
    templateUrl: 'views/tmpl/ui/modals.html'
  })
  //ui/tiles
  .state('app.ui.tiles', {
    url: '/tiles',
    controller: 'TilesCtrl',
    templateUrl: 'views/tmpl/ui/tiles.html'
  })
  //ui/portlets
  .state('app.ui.portlets', {
    url: '/portlets',
    controller: 'PortletsCtrl',
    templateUrl: 'views/tmpl/ui/portlets.html'
  })
  //ui/grid
  .state('app.ui.grid', {
    url: '/grid',
    controller: 'GridCtrl',
    templateUrl: 'views/tmpl/ui/grid.html'
  })
  //ui/widgets
  .state('app.ui.widgets', {
    url: '/widgets',
    controller: 'WidgetsCtrl',
    templateUrl: 'views/tmpl/ui/widgets.html'
  })
  //ui/alerts & notifications
  .state('app.ui.alerts', {
    url: '/alerts',
    controller: 'AlertsCtrl',
    templateUrl: 'views/tmpl/ui/alerts.html'
  })
  //ui/general
  .state('app.ui.general', {
    url: '/general',
    controller: 'GeneralCtrl',
    templateUrl: 'views/tmpl/ui/general.html'
  })
  //ui/tree
  .state('app.ui.tree', {
    url: '/tree',
    controller: 'TreeCtrl',
    templateUrl: 'views/tmpl/ui/tree.html'
  })
  //forms
  .state('app.forms', {
    url: '/forms',
    template: '<div ui-view></div>'
  })
  //forms/common
  .state('app.forms.common', {
    url: '/common',
    controller: 'FormsCommonCtrl',
    templateUrl: 'views/tmpl/forms/common.html',
    resolve: {
      plugins: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load([
          'scripts/vendor/slider/bootstrap-slider.js',
          'scripts/vendor/touchspin/jquery.bootstrap-touchspin.js',
          'scripts/vendor/touchspin/jquery.bootstrap-touchspin.css',
          'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
        ]);
      }]
    }
  })
  //forms/validate
  .state('app.forms.validate', {
    url: '/validate',
    controller: 'FormsValidateCtrl',
    templateUrl: 'views/tmpl/forms/validate.html'
  })
  //forms/wizard
  .state('app.forms.wizard', {
    url: '/wizard',
    controller: 'FormWizardCtrl',
    templateUrl: 'views/tmpl/forms/wizard.html'
  })
  //forms/upload
  .state('app.forms.upload', {
    url: '/upload',
    controller: 'FormUploadCtrl',
    templateUrl: 'views/tmpl/forms/upload.html',
    resolve: {
      plugins: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load([
          'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
        ]);
      }]
    }
  })
  //forms/imgcrop
  .state('app.forms.imgcrop', {
    url: '/imagecrop',
    controller: 'FormImgCropCtrl',
    templateUrl: 'views/tmpl/forms/imgcrop.html',
    resolve: {
      plugins: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load([
          'scripts/vendor/filestyle/bootstrap-filestyle.min.js'
        ]);
      }]
    }
  })
      //app core pages (errors, login,signup)
  .state('core', {
    abstract: true,
    url: '/core',
    template: '<div ui-view></div>'
  })
  //login
  .state('core.login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'views/tmpl/pages/login.html'
  })
  //signup
  .state('core.signup', {
    url: '/signup',
    controller: 'SignupCtrl',
    templateUrl: 'views/tmpl/pages/signup.html'
  })
  //forgot password
  .state('core.forgotpass', {
    url: '/forgotpass',
    controller: 'ForgotPasswordCtrl',
    templateUrl: 'views/tmpl/pages/forgotpass.html'
  })
  //page 404
  .state('core.page404', {
    url: '/page404',
    templateUrl: 'views/tmpl/pages/page404.html'
  })
  //page 500
  .state('core.page500', {
    url: '/page500',
    templateUrl: 'views/tmpl/pages/page500.html'
  })

  //documentation
  .state('app.help', {
    url: '/help',
    controller: 'HelpCtrl',
    templateUrl: 'views/tmpl/help.html'
    })
}

})()