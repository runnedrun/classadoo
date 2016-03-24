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
			localTabUpdate(tabId, snapshot.val())
		})
	}	

	function localTabUpdate(tabId, update) {
		console.log("checking if we should update");
		var previous = tabCache[tabId] || {}
		var updated = Util.extend(previous, update);

		if (!Util.objectEq(previous, updated)) {
			console.log("updating");
			tabCache[tabId] = updated;
			Message.send(tabId, { storageUpdate: { type: "tab", data: updated } });
		}			
	}

	globalStorage.on("value", function(snapshot) {		
		globalCache = snapshot.val() || {}		
		Message.sendToOpenTabs({ storageUpdate: { type: "global", data: globalCache } });
	})


	self.tabSet = function(tabId, props) {								
		if (!tabListeners[tabId]) {
			tabListeners[tabId] = listenOnTabData(tabId)
		} 		

		localTabUpdate(tabId, props);
		tabStorage.child(tabId).update(props);				
	}

	self.tabClear = function(tabId) {
		var listener = tabListeners[tabId];
		tabStorage.child(tabId).off("value", listener);

		tabStorage.child(tabId).set(null);
	}

	self.globalClear = function(tabId) {		
		globalStorage.remove();
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