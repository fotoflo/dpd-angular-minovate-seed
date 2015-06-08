angular
  .module('minovateApp')
  .run(['$rootScope', '$state', '$stateParams', 'userService', run])


function run($rootScope, $state, $stateParams, dpd) {

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.$on('$stateChangeSuccess', function(event, toState) {

    event.targetScope.$watch('$viewContentLoaded', function () {

      angular.element('html, body, #content').animate({ scrollTop: 0 }, 200);

      setTimeout(function () {
        angular.element('#wrap').css('visibility','visible');

        if (!angular.element('.dropdown').hasClass('open')) {
          angular.element('.dropdown').find('>ul').slideUp();
        }
      }, 200);
    });
    $rootScope.containerClass = toState.containerClass;
  });
}