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