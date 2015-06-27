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
                templateProvider: ['$templateCache', function ($templateCache) {
                    return $templateCache.get('<%= moduleName %>.partial.html')
                }],
                controller: '<%= moduleName %>Controller'
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
    }]);
