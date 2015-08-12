(function () {
	'use strict';

	angular
		.module('<%= moduleName %>')
			.config(Routes)
			.run(RouteDefault);

			Routes.$inject = ['$stateProvider'];
			RouteDefault.$inject = ['$state'];

			function Routes($stateProvider) {
				$stateProvider
					.state('<%= routeName %>', {
						abstract: true,
						templateProvider: ['$templateCache', function ($templateCache) {
							return $templateCache.get('<%= routeName %>/<%= routeName %>.partial.html')
						}],
						controller: '<%= moduleName %>Controller',
						controllerAs: 'vm'
					})
			}

			function RouteDefault($state) {
				//$state.go('<%= routeName %>.childstate');
			}

})();
