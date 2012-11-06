### USE.JS
A simple asynchronous javascript module loader
	
	use.setup({
		path: 'path/to/modules'
	});
	use('somemodule', function(module) {
		//callback
		module.somefunction();
	});

