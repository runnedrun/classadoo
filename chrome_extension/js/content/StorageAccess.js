StorageAccess = function(storageName) {	
	this.getAll = function() {
		var deferred = $.Deferred()

		var dataObj = {}
		dataObj[storageName] = {
			method: "get"			 			
		}

		chrome.runtime.sendMessage(dataObj, function(response){ 		
			deferred.resolve(response)		
		});

		return deferred.promise()
	}

	this.set = function(data) {
		var deferred = $.Deferred()

		var dataObj = {}
		dataObj[storageName] = {
			data: data,
			method: "set" 			
		}

		chrome.runtime.sendMessage(dataObj, function(response){ 		
			deferred.resolve(response)		
		});

		return deferred.promise()
	}	
}