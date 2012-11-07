/*global use:true*/
(function($) {
	"use strict";
	use.setup({
		path: 'modules/'
	});
	
	use('demomodule', function(module) {
		module.someFunction();
	});
}(jQuery));