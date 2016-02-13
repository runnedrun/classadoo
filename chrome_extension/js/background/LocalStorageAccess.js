LocalStorageAccess = new function() {
	this.getState = getState		
	this.setState = setState
	this.clearState = clearState

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

    function setStateProp(propName, prop) {
    	return getState().then(function(state){
    		state[propName] = prop;
    		setState(state)
    	}); 
    }

    function getStateProp(propName) {
    	return getState().then(function(state){
    		return state[propName]    		
    	}); 	
    }
}
