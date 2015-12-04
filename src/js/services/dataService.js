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
			return $http.get('data.json')
    		.then(getDataComplete)
    		.catch(getDataFailed);

		    function getDataComplete(response) {
		      theData = response.data;
		      console.log('VALID RESPONSE ', theData);
		    }

		    function getDataFailed(error) {
		      console.log('Error - ' + error.data);
		    }  
		}
	}
})();