BackgroundStorage = new function() {	
	this.get = function(property) {
		var deferred = $.Deferred()
		chrome.runtime.sendMessage({	 	
	 		storage: {	 			
	 			method: "get",
	 			prop: property        	
	 		}            
		}, function(response){ 		
			deferred.resolve(response)		
		});

		return deferred.promise()
	}

	this.set = function(property, data) {
		var deferred = $.Deferred()
		chrome.runtime.sendMessage({	 	
	 		storage: {	 	
	 			data: data,		
	 			method: "set",
	 			prop: property        	
	 		}            
		}, function(response){ 		
			deferred.resolve(response)		
		});

		return deferred.promise()
	}

	this.setForTab = function(property, data) {
		var deferred = $.Deferred()
		chrome.runtime.sendMessage({getTabId: true}, function(resp) {			
			chrome.runtime.sendMessage({	 	
		 		tabStorage: {	 	
		 			data: data,			 			
		 			method: set,
		 			prop: property + resp.tabId
		 		}            
			}, function(response){ 		
				deferred.resolve(response)		
			});
		})		

		return deferred.promise()
	}

	this.clear = function(property) {
		var deferred = $.Deferred()		
		chrome.runtime.sendMessage({	 	
	 		storage: {	 		 			
	 			method: "clear",
	 			prop: property        	
	 		}            
		}, function(response){ 		
			deferred.resolve(response)		
		});

		return deferred.promise()
	}	
}