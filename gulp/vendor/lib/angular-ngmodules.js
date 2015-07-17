(function(angular) {
	/**
	 * Constructor class for ngModules. Initializes modules on dom ready.
	 * @param  {HTMLElement}  element     root element to locate ngModules
	 */
	function ngModules(element) {
		var _this = this;
		this.element = element;
		this.extensions = [];
		angular.element(element).ready(function() {
			init.call(_this);
		});
	}

	/**
	 * Checks if value given is a string.
	 * @param  {mixed}  value  object to check
	 * @return {boolean}
	 */
	function isString(value) { return typeof value === 'string'; }

	/**
	 * Retrieves a NG attribute from given element.
	 * @param  {HTMLElement}  element  element to retrieve attribute off of
	 * @param  {string}       ngAttr   attribute property minus ng- prefix
	 * @return {string}
	 */
	function getNgAttribute(element, ngAttr) {
		var attr, i;
		element = angular.element(element);
		for (i=0; i < ngAttrPrefixes.length; ++i) {
			attr = ngAttrPrefixes[i] + ngAttr;
			if (isString(attr = element.attr(attr))) {
				return attr;
			}
		}
		return null;
	}

	/**
	 * Bootstraps individual module.
	 * @private
	 * @param  {HTMLElement}  element   root element to load module
	 * @param  {int}          position  index of module loaded in page
	 * @param  {array}        modules   array of module names
	 */
	function bootstrap(element, position, modules) {
		var
			_this  = this,
			config = { strictDi: getNgAttribute(element, 'strict-di') !== null },
			name   = setName.call(this, modules.join(',')),
			injector;
		ngelements.push(element); // store element for unload

		if (this.extensions && this.extensions.length)
			modules = modules.concat(this.extensions);
		injector = angular.bootstrap(element, modules, config);
		ngmodules.push({
			key: position,
			name: name,
			element: lookup.call(this, position),
			injector: injector,
			unload: function() { _this.unload(this.key); }
		});
	}

	/**
	 * Locates modules in root element.
	 * @private
	 */
	function init() {
		var i, elements, modules;

		elements = lookup.call(this);
		for (i = 0; i < elements.length; i++) {
			modules = getNgAttribute(elements[i], 'module') || '';
			bootstrap.call(this, elements[i], i, modules.replace(/\s/g, '').split(','));
		}
	}

	/**
	 * Finds ngModules in root element.
	 * @param  {int}  [id]  the index of the module to return
	 * @return {HTMLElement}  if id param passed
	 * @return {array}        if id is null, an array of HTMLElements are returned
	 */
	function lookup(id) {
		var i, j, found, name, elements = [];
		for (i = 0; i < ngAttrPrefixes.length; i++) {
			name = (ngAttrPrefixes[i] + 'module').replace(':', '\\:');
			if (this.element.querySelectorAll) {
				found = this.element.querySelectorAll('[' + name + ']');
				if (id || id === 0) return found[id];
				for (j = 0; j < found.length; j++) {
					elements.push(found[j]);
				}
			}
		}
		return elements;
	}

	/**
	 * Generates a camel case module name for reference.
	 * @private
	 * @param {string}  input  module name to store
	 * @return {string}
	 */
	function setName(input) {
		return input.toLowerCase().replace(/[^a-zA-Z0-9](.)/g, function() {
			return arguments[1].toUpperCase();
		});
	}

	/**
	 * Loops through all initialized ngModules.
	 * @param  {Function} callback the function called on each iteration
	 */
	ngModules.prototype.forEach = function forEach(callback) {
		angular.forEach(ngmodules, function(module) {
			callback(module);
		});
	};

	/**
	 * Retrieves ngModule by name or index.
	 * @param  {mixed}  name  can be given ngModule name or index
	 * @return {ngModule}
	 */
	ngModules.prototype.get = function get(name) {
		if (!isString(name)) return ngmodules[name];
		for (var i = 0; i < ngmodules.length; i++) {
			if (ngmodules[i] && ngmodules[i].name === name) return ngmodules[i];
		}
		return undefined;
	};

	/**
	 * Gives a list of all initialize ngModule names.
	 * @return {array}
	 */
	ngModules.prototype.list = function list() {
		return ngmodules.map(function(obj) {
			return obj.name;
		});
	};

	/**
	 * Destroys a loaded ngModule by name or index.
	 * @param  {mixed}  key  can be given ngModule name or index
	 */
	ngModules.prototype.unload = function unload(name) {
		var i, key;
		if (!isString(name)) {
			key = name;
		} else {
			for (i = 0; i < ngmodules.length; i++) {
				if (ngmodules[i] && ngmodules[i].name === name) {
					key = i;
					break;
				}
			}
		}
		angular.element(ngmodules[key].element).replaceWith(ngelements[key]);
		delete ngmodules[key];
		delete ngelements[key];
	};

	if (angular) {
		var
			ngmodules = [],
			ngelements = [],
			ngAttrPrefixes = ['ng-', 'data-ng-', 'ng:', 'x-ng-'];
		angular.ngmodules = new ngModules(document); // jshint ignore:line
	}
})(window.angular);
