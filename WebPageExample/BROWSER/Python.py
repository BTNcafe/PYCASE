WebPageExample.Python = CLASS({

	preset : def():
		return VIEW
	
	, init : def(cls, inner, self):
		
		div = DIV({
			style : {
				fontSize : 50
			},
			children : [A({
				children : ['<-BACK'],
				onTap : def():
					WebPageExample.GO('')
			}), BR(), 'Python!']
		}).appendTo(BODY)
		
		#OVERRIDE: self.close
		self.close = close = def(params):
			div.remove()
})
