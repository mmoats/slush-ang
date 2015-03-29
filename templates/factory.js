/**
 * An extension of the main module. Extensions cannot define dependencies!
 */
angular.module('<%= moduleName %>')

    /**
     * Factory broken out into an extension of the main module file.
     */
    .factory('<%= factoryName %>', function () {
        return {

        }
    });