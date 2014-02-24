// run: nodemon WebPageExample.js

require('./PYCASE/BOOT.js');

BOOT({
	CONFIG : {
		defaultBoxName : 'WebPageExample',
		isDevMode : true
	},
	SERVER_CONFIG : {
		isNotUsingDB : true
	}
});
