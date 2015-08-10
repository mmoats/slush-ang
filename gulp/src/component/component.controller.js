(function () {
	'use strict';

	angular
		.module('<%= moduleName %>')
			.controller('<%= moduleName %>Controller', <%= moduleName %>);

			<%= moduleName %>.$inject = ['$scope'];

			function <%= moduleName %>($scope) {
				$scope.example = 'Parent controller';
			}

}());
