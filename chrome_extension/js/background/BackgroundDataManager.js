DataManager = function() {
	var self = this;

	var globalStorage = new Storage("state");
	var tabStorage = new TabStorage("tabState");	

	self.tabSet = function(tabId, state) {		
		return tabStorage.set(tabId, state).then(function(data) {	      		
	  		Message.send(tabId, {storageUpdate: data});
	  		return data
		})
	}

	self.globalSet = function(state) {
		return globalStorage.set(state).then(function(data) {	      		
	  		Message.sendToAllTabs({storageUpdate: data});
	  		return data
		})
	}

	self.tabGet = function(tabId) {
		return tabStorage.get(tabId)
	}

	self.globalGet = function() {
		return globalStorage.get()
	}

	self.globalSetProps = function(props) {
		self.globalGet().then(function(state) {
			$.extend(state, props);			
			self.globalSet(state);
		})
	}

	self.tabSetProps = function(tabId, props) {
		self.tabGet(tabId).then(function(state) {
			$.extend(state, props);			
			self.tabSet(tabId, state);
		})
	}

	self.getFullState = function() {
		return $.when(self.globalGet(), tabStorage.getAllTabs()).then(function(globalState, tabStates) {
			globalState.tabs = tabStates;			
			return globalState
		})
	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.tabStorage) { 			
			var method = Util.capitalizeFirstLetter(request.tabStorage.method);			
			self["tab" + method](sender.tab.id, request.tabStorage.data).then(function(state) {
				sendResponse(state);
			});			
			return true
   		}

		if (request.globalStorage) {             
			var method = Util.capitalizeFirstLetter(request.globalStorage.method);
			self["global" + method](request.globalStorage.data).then(function(state) {									
				sendResponse(state)
			});

			return true
   		}   		
  	})
}