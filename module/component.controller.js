(function () {
	'use strict';

	angular
		.module('<%= moduleName %>')
			.controller('componentController', component);

			component.$inject = ['$scope'];

			function component($scope) {
				$scope.example = 'Parent controller';
			}

}());
