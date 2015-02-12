/**
 * An extension of the main module. Extensions cannot define dependencies!
 */
angular.module('<%= moduleName %>')

    /**
     * Controller broken out into an extension of the main module file.
     */
    .controller('<%= controllerName %>Controller', ['$scope', function($scope) {

    }]);