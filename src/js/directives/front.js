(function() {
	'use strict';
	 
	angular
	.module('wl-template.front', [])
	.directive('wlTemplate', wlTemplate); 

	function wlTemplate() {
		var directive = {
			restrict: 'AE',
			scope: {},
			templateUrl: 'templates/front-tpl.html',
			controllerAs: "us",
			bindToController: true,
			link: linkFunc,
			controller: AppController
		};

		return directive;

		function linkFunc(scope, element, attr, ctl) {
			console.log('LINK FUNC ', ctl.alpha);
		}

		AppController.$inject = ['dataservice'];

		function AppController(dataservice) {
			var vm = this;
			vm.alpha = dataservice.getAlpha();
			console.log('APP CONTROLLER ', vm.alpha);
		}
	}
})();

