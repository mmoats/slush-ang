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
					.state('<%= moduleName %>', {
						abstract: true,
						templateProvider: ['$templateCache', function ($templateCache) {
							return $templateCache.get('component/component.partial.html')
						}],
						controller: 'componentController'
					})
					.state('<%= moduleName %>.example', {
						template: '<div>{{ test }}</div>',
						controller: function ($scope) {
							$scope.test = "testing";
						}
					})
			}

			function RouteDefault($state) {
				$state.go('<%= moduleName %>.example');
			}

}());
