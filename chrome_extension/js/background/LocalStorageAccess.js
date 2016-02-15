LocalStorageAccess = new function() {
	var self = this;

	self.getState = getState		
	self.setState = setState
	self.clearState = clearState

	// set's and alerts the front end data manager, instead of the other way around. For when data is being changed from the background.
	self.forwardSet = function(propName, value) {
		setStateProp(propName)(value).then(function() {			
			var setState = {};
			setState[propName] = value;
			sendMessageToAllTabs({setState: setState});
		})
	}

	self.getOpen = getStateProp("toolbarOpen");

    function getState() {
    	deferred = $.Deferred() 
    	chrome.storage.local.get("state", function(res) { deferred.resolve(res.state) });
    	return deferred.promise();    	
    }

    function setState(state) {    	
    	deferred = $.Deferred() 
    	chrome.storage.local.set({"state": state}, function() { deferred.resolve()});
    	return deferred.promise();    	
    }

    function clearState() {
    	deferred = $.Deferred() 
    	chrome.storage.local.set({"state": {}}, function() { deferred.resolve()});
    	return deferred.promise();    		
    }

    function setStateProp(propName) {
    	return function(value) {
    		return getState().then(function(state){    			
	    		state[propName] = value;
	    		setState(state)
    		}); 
    	}
    }

    function getStateProp(propName) {
    	return function() {
    		return getState().then(function(state){
    			return state[propName]    		
    		}); 	
    	}
    }
}
