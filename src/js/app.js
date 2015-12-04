'use strict';

angular.module('wl-template', [
	'ui.router',
	'wl-template.front'
])
.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('main', {
      url: "/",
      views: {
        'state' : { template: '<wl-template></wl-template>' }
      }
    });
}])
.run(runBlock);

runBlock.$inject = ['$state'];

function runBlock($state) {
  $state.go('main');
}
