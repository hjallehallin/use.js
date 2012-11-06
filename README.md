# USE.JS
A simple asynchronous javascript module loader

### Examples

#### Let use.js know where your modules are located
```js
	use.setup({
		path: 'path/to/modules/'
	});
```


#### Really simple module loading

	use('somemodule');

#### Module with callback

	use('somemodule', function(module) {
		//callback
		module.somefunction();
	});

#### Multiple modules with callback

	use('firstmodule secondmodule thirdmodule', function(first, second, third) {
		first.init();
		second.doSomething();
		third.getSome();
	});


#### Example of a module
```js
	use.module.demomodule = (function() {
		"use strict";
		var someFunction = function() {
			console.log("log from demomodule.js");
		};
		return {
			someFunction: someFunction
		};
	}());
```

### Stuff to do

* Pub/sub to decouple the modules
* Combine and minify the modules if needed