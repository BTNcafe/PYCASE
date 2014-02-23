require('../UPPERCASE/BOOT.js');

var
// origin BOOT
_BOOT = BOOT;

global.BOOT = function(params) {

	var
	// Python
	Python = require('rapydscript');

	params.MULTI_LANG_SUPPORT = {

		py : function(source, path) {

			var
			// output
			output = Python.OutputStream({
				beautify : true,
				private_scope : false
			});

			Python.parse(source, {
				filename : path
			}).print(output);

			return output.toString();
		}
	};

	return _BOOT(params);
};
