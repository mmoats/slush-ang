/**
 * <%= moduleName %> module description
 * @dependencies
 */
angular.module('<%= moduleName %>', [
	'ui.router'
])
    /**
     * Module configuration for UI Router states
     * @param (object) $stateProvider
     */
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			.state('component', {
				abstract: true,
				templateUrl: './module.partial.html',
				controller: '<%= moduleName %>Controller'
			})

		    /** Example state without params */
			.state('component.alpha', {
				templateUrl: './alpha.partial.html',
				controller: 'alphaController'
			})

		    /** Example state with params */
			.state('component.beta', {
                params: {
                    data:'undefined'
                },
				templateUrl: './beta.partial.html',
				controller: 'betaController'
			});
	}])

    /**
     * Controllers can be in the main module file or they can be
     * split out into other files if the main file becomes too large.
     */
	.controller('<%= moduleName %>Controller', ['$scope', function ($scope) {
		$scope.example = 'Parent controller';
	}])

    /**
     * Module initialization. Loads in the default module state.
     */
	.run(['$state', function ($state) {
        //$state.go('component.alpha');
		$state.go('component.beta', {data: 'Initial load state in Beta'});
	}]);
