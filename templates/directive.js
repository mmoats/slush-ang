/**
 * An extension of the main module. Extensions cannot define dependencies!
 */
angular.module('<%= moduleName %>')

    /**
     * Directive broken out into an extension of the main module file.
     */
    .directive('<%= directiveName %>', function () {
        return {
            restrict: "A",
            link: function(scope, element, attributes, controller){

            }
        }
    });