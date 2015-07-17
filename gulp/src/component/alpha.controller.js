/**
 * An extension of the main module. Extensions cannot define dependencies!
 */
angular.module('component')

	/**
	 * Example of a controller broken out into an extension of the main module file.
	 */
	.controller('alphaController', ['$scope', function($scope) {
		$scope.example = 'Welcome to Alpha';
	}]);