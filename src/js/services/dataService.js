(function() {
  	'use strict';

	angular
	.module('wl-template.dataservice', [])
	.factory('dataservice', dataservice);

	dataservice.$inject = ['$http'];

	function dataservice($http) {
		var theData;
		
		var service =  {
			theData: theData,
			initialize: initialize
		};
		return service;

		function initialize() {
			console.log('DATASERVICE INIT');
		}
	}
})();