(function () {
	'use strict';

	angular
		.module('<%= moduleName %>')
			.controller('<%= controllerName %>', <%= controllerName %>);

			<%= controllerName %>.$inject = ['$scope'];

			function <%= controllerName %>($scope) {
				$scope.example = 'Parent controller';
			}

}());
