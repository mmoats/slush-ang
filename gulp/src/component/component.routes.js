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
							return $templateCache.get('<%= moduleName %>/<%= moduleName %>.partial.html')
						}],
						controller: '<%= moduleName %>Controller'
					})
					.state('<%= moduleName %>.alpha', {
						template: '<div>{{ test }}</div>',
						controller: function ($scope) {
							$scope.test = "testing";
						}
					})
			}

			function RouteDefault($state) {
				$state.go('<%= moduleName %>.alpha');
			}

}());
