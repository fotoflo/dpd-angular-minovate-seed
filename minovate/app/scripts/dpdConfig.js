(function() {
'use strict';

/**
 * @ngdoc overview
 * @name minovateApp
 * @description
 * # minovateApp
 *
 * Main module of the application.
 */
angular
  .module('minovateApp')
  .value('dpdConfig', { 
	    collections: ['users'], 
	    serverRoot: 'http://localhost:2403/', // optional, defaults to same server
	    socketOptions: { reconnectionDelayMax: 3000 }, // optional socket io additional configuration
	    useSocketIo: false, // optional, defaults to false
	    noCache: true // optional, defaults to false (false means that caching is enabled, true means it disabled)
	});

})()

