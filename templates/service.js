(function () {
	'use strict';

	angular
		.module('<%= moduleName %>')
			.factory('<%= serviceName %>', <%= serviceName %>);

			function <%= serviceName %>() {
				return {

				}
			}

})();
