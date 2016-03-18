DataManager = function() {
	var storedClientId = localStorage.getItem("clientId");	

	var clientId;
	if (!storedClientId) {
		var clientId = Util.guid();	
		localStorage.setItem("clientId", clientId)
	} else {
		clientId = storedClientId;
	}

	var ref = new Firebase("vivid-inferno-6534.firebaseIO.com/users/" + clientId);

	var self = this;

	// var globalStorage = new Storage("state");
	// var tabStorage = new TabStorage("tabState");	

	var globalStorage = ref.child("state/global");
	var tabStorage = ref.child("state/tab");	

	var tabCache = {}
	var globalCache = {}

	var tabListeners = {}
	function listenOnTabData(tabId) {
		return tabStorage.child(tabId).on("value", function(snapshot){
			tabCache[tabId] = snapshot.val();
			Message.send(tabId, {storageUpdate: snapshot.val()});
		})
	}	

	globalStorage.on("value", function(snapshot) {		
		globalCache = snapshot.val() || {}
		Message.sendToOpenTabs({storageUpdate: globalCache});
	})


	self.tabSet = function(tabId, props) {								
		if (!tabListeners[tabId]) {
			tabListeners[tabId] = listenOnTabData(tabId)
		} 

		tabStorage.child(tabId).update(props);				
	}

	self.tabClear = function(tabId) {
		var listener = tabListeners[tabId];
		tabStorage.child(tabId).off("value", listener);

		tabStorage.child(tabId).set(null);
	}

	self.globalSet = function(props) {
		globalStorage.update(props);		
	}

	self.tabGet = function(tabId) {		
		return tabCache[tabId]
	}

	self.globalGet = function() {
		return globalCache
	}
 
	self.getAllTabs = function() { return tabCache }

	self.getFullState = function() {
		return $.when(self.globalGet(), self.getAllTabs()).then(function(globalState, tabStates) {
			globalState.tabs = tabStates;			
			return globalState
		})
	}

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		if (request.tabStorage) { 			
			var method = Util.capitalizeFirstLetter(request.tabStorage.method);			
			var state = self["tab" + method](sender.tab.id, request.tabStorage.data)
			sendResponse(state);						
   		}

		if (request.globalStorage) {             
			var method = Util.capitalizeFirstLetter(request.globalStorage.method);
			var state = self["global" + method](request.globalStorage.data)			
			sendResponse(state)						
   		}   		
  	})
}