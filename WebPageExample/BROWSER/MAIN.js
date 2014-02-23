WebPageExample.MAIN = METHOD({

	run : function(m, params) {'use strict';

		WebPageExample.MATCH_VIEW({
			uris : [''],
			target : WebPageExample.Home
		});

		WebPageExample.MATCH_VIEW({
			uris : ['JavaScript'],
			target : WebPageExample.JavaScript
		});
		
		WebPageExample.MATCH_VIEW({
			uris : ['Python'],
			target : WebPageExample.Python
		});
	}
});
