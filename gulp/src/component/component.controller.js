(function () {
	'use strict';

	angular
		.module('<%= moduleName %>')
			.controller('<%= moduleName %>Controller', <%= moduleName %>);

			//<%= moduleName %>.$inject = ['$scope'];

			function <%= moduleName %>() {
				var vm = this;

				vm.example = 'Parent controller';
			}

})();
