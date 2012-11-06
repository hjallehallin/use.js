/*global use:true*/
(function($) {
	"use strict";
	use.setup({
		path: 'path/to/modules'
	});
	use('demomodule', function(module) {
		module.someFunction();
	});


}(jQuery));