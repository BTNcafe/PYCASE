WebPageExample.JavaScript = CLASS({

	preset : function() {'use strict';
		return VIEW;
	},

	init : function(cls, inner, self) {'use strict';

		var
		// div
		div,

		// close.
		close;

		div = DIV({
			style : {
				fontSize : 50
			},
			children : [A({
				children : ['<-BACK'],
				onTap : function() {
					WebPageExample.GO('');
				}
			}), BR(), 'JavaScript!']
		}).appendTo(BODY);

		//OVERRIDE: self.close
		self.close = close = function(params) {
			div.remove();
		};
	}
});
