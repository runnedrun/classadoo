LocalStorageAccess = new function() {
	var self = this;

	self.getState = getTabbedState
    self.getFullState = getFullState
	self.setState = setState
	self.clearState = clearState

    self.getOpen = function(tabId) {
        return getStateProp("toolbarOpen", tabId);    
    }

	// set's and alerts the front end data manager, instead of the other way around. For when data is being changed from the background.
	self.forwardSet = function(propName, value, tabId) {
		setStateProp(propName, tabId)(value).then(function() {			
			var setState = {};
			setState[propName] = value;
            if (tabId) {
                sendMessage(tabId, {setState: setState});
            } else {
                sendMessageToAllTabs({setState: setState});    
            }			
		})
	}

    function getFullState() {
        deferred = $.Deferred() 
        chrome.storage.local.get("state", function(res) {             
            deferred.resolve(res.state || {});
        });
        return deferred.promise();         
    }

    function getTabbedState(tabId) {
    	return getFullState().then(function(state) {                  
            Object.keys(state).forEach(function(key) {                
                if (state[key].tabbed) {
                    state[key] = state[key][tabId];
                }
            })    
            return state     
        });
    }

    function setRawState(state) {
        deferred = $.Deferred();         
        chrome.storage.local.set({"state": state}, function() { deferred.resolve()});
        return deferred.promise();           
    }

    function setState(state, tabId) {    	    	
        getFullState().then(function(originalState) {
            Object.keys(state).forEach(function(key) {
                if (state[key].tabbed) {
                    mergeValueForTab(originalState, key, tabId)
                } else {
                    originalState[key] = state[key]
                }
            })
        })
    	setRawState(originalState);
    }

    function clearState(state) {
    	deferred = $.Deferred() 
    	chrome.storage.local.set({"state": {}}, function() { deferred.resolve()});
    	return deferred.promise();    		
    }

    function mergeValueForTab(state, propName, value, tabId) {        
        var originalValue = state[propName];

        if ((typeof originalValue) !== "object") {
            originalValue = {}
        }
              
        originalValue.tabbed = true;          
        originalValue[tabId] = value;

        state[propName] = originalValue;
        return state
    }

    function setStateProp(propName, tabId) {
    	return function(value) {
    		return getFullState().then(function(state){   
                if (tabId) {                    
                    mergeValueForTab(state, propName, value, tabId);
                } else {
                    state[propName] = value;
                }                

                chrome.storage.local.set({"state": state}, function() { deferred.resolve()});
    		}); 
    	}
    }

    function getStateProp(propName, tabId) {
		return getTabbedState(tabId).then(function(state){                
			return state[propName]    		
		}); 	
    }
}
