/*global use:true */
(function(window, $, undefined) {
	"use strict";
	var use = function(module, opts, callback) {
		// the use function is actually the load method of the prototype
		return new use.module.load(module, opts, callback);
	};

	// use module is actually the prototype
	use.module = use.prototype = {
		constructor: use,
		// this is the actual module loading function
		// parameters:
		// module - space (or comma) separated string of modules, sans extension
		// opts - object with custom options, will merge with default settings, if omitted, second parameter are used as the third
		// callback - a function, returns the modules, in the same order as parameter 1
		//
		load: function(module, opts, callback) {
			var options = use.settings, modules = module.split(/[ ,]+/), modulecount = modules.length, loaded = [];
			if(typeof opts === 'function') {
				callback = opts;
			}
			else {
				options = $.extend(true, {}, options, opts || {});
			}

			var loading = $.map(modules, function(module, key) {

				if(use.module[module]) {
					loaded[key] = use.module[module];
					return new $.Deferred().resolve();

				} else {
					return $.ajax({
						url: options.path + module + '.js',
						dataType: 'script',
						cache: options.cache
					}).always(function() {
						loaded[key] = use.module[module];
					}).error(function(xhr, status, message) {
						console.warn(status, message, "module: " + options.path + module + '.js');
					});
				}
			});

			$.when.apply(this, loading).then(function() {
					 // all modules loaded, fire callback:
					 if(callback && typeof callback === 'function') {
						callback.apply(use, loaded);
					}
				});

			return loading;

		},

	};

	use.setup = function(settings) {
		use.settings = $.extend({}, use.settings, settings);
	};
	use.settings = {
		path: 'modules/',
		cache: true
	};

	window.use = use;

}(window, jQuery));