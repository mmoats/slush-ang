/**
 * An extension of the main module. Extensions cannot define dependencies!
 */
angular.module('<%= moduleName %>')

	/**
	 * Example of a controller broken out into an extension of the main module file.
	 */
	.controller('betaController', ['$scope', '$state', function($scope, $state) {
		$scope.example = $state.params.data;
	}]);