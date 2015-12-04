(function() {
    'use strict';

    angular
    .module('wl-template', [
    	'ui.router',
    	'wl-template.front',
      'wl-template.dataservice'
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

    runBlock.$inject = ['$state', 'dataservice'];

    function runBlock($state, dataservice) {
      dataservice.initialize();
      $state.go('main');
    }
})();
