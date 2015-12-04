'use strict';
 
angular
.module('wl-template.front', [])
.directive('wlTemplate', wlTemplate); 

function wlTemplate() {
	var directive = {
		restrict: 'AE',
		scope: {},
		template: '<bold>HERE</bold>',
		controllerAs: "vm",
		bindToController: true,
		link: linkFunc,
		controller: AppController
	};

	return directive;

	function linkFunc(scope, element, attr, ctl) {
		console.log('LINK FUNC');
	}


	function AppController() {
		console.log('APP CONTROLLER');
	}
}

