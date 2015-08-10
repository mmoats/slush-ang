(function () {
	'use strict';

	angular
		.module('<%= moduleName %>')
			.directive('<%= directiveName %>', <%= directiveName %>);

			function <%= directiveName %>() {
				return {
					require: '?ngModel',
					priority: 1000,
					link: function (scope, element, attrs, ngModelCtrl) {

					}
				}
			}

})();
