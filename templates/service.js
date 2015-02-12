/**
 * An extension of the main module. Extensions cannot define dependencies!
 */
angular.module('<%= moduleName %>')

    /**
     * Service broken out into an extension of the main module file.
     */
    .service('<%= serviceName %>', [ , function () {
        return {

        }
    }]);