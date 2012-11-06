# USE.JS
A simple asynchronous javascript module loader

## Examples


Let use.js know where your modules are located

	use.setup({
		path: 'path/to/modules/'
	});


Really simple module loading

	use('somemodule');

Module with callback

	use('somemodule', function(module) {
		//callback
		module.somefunction();
	});

Multiple modules with callback

	use('firstmodule secondmodule thirdmodule', function(first, second, third) {
		first.init();
		second.doSomething();
		third.getSome();
	});

