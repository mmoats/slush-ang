(function () {
	'use strict';

	angular
		.module('<%= moduleName %>')
			.factory('<%= filterName %>', <%= filterName %>);

			function <%= filterName %>() {
				return {

				}
			}

})();
