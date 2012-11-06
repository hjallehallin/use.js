use.module.demomodule = (function() {
	"use strict";
	var someFunction = function() {
		console.log("log from demomodule.js");
	};
	return {
		someFunction: someFunction
	};
}());