(function() {
'use strict';

/**
 * @ngdoc function
 * @name minovateApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the minovateApp
 */
angular.module('minovateApp')
  .factory('userService', userService);

  userService.$inject = [ '$log', 'dpd', '$http', 'dpdConfig', '$state', '$cookies'];

function userService($log, dpd, $http, dpdConfig, $state, $cookies){
  userService = this;

  userService.login = login;
  userService.logout = logout;
  userService.init = init;

  userService.init();

  return userService;



    /**
   * @ngdoc function
   * @name userService.init
   * @module minvateApp
   * @methodOf minvateApp.userService
   * @description logs a user in
   * @param {object} user object
   * ```
   * {
   *    password: "1234",
   *    username: "a"
   * }
   * ```
   * @returns {boolean} init status
   */

  function init(){
    dpd.users.get('me', function(user) {
      if (!user) {
        $state.go('core.login');
      }
    });
  }



    /**
   * @ngdoc function
   * @name userService.login
   * @module minvateApp
   * @methodOf minvateApp.userService
   * @description logs a user in
   * @param {object} user object
   * ```
   * {
   *    password: "1234",
   *    username: "a"
   * }
   * ```
   * @returns {boolean} login status
   */

  function login(user){
    $http.post( dpdConfig.serverRoot + 'users/login', { username: user.email, password: user.password})
      .then(
      function(session, error) {
        if (error) {
          alert(error.message);
          return false;
        } else {
          $cookies.sid = session.data.id;
          $state.go('app.dashboard');
        }
      });
  } // end login

      /**
   * @ngdoc function
   * @name userService.logout
   * @module minvateApp
   * @methodOf minvateApp.userService
   * @description logs a user out
   * ```
   * @returns {boolean} logout status
   */

  function logout(user){
    dpd.users.post('logout');
    return true;
  } // end login

}

})()