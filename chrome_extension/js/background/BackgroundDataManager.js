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
		console.log("checking if we should update tab");
		var previous = tabCache[tabId] || {}
		if (!Util.objectEq(previous, update)) {
			console.log("updating");
			if (update) {
				tabCache[tabId] = update;
			} else {
				delete tabCache[tabId];
			}
			
			Message.send(Number(tabId), { storageUpdate: { type: "tab", data: update } });
		}			
	}

	function localGlobalUpdate(update) {
		console.log("checking if we should update global");
		var previous = globalCache || {}

		if (!Util.objectEq(previous, update)) {
			console.log("updating");
			globalCache = update;
			Message.sendToOpenTabs({ storageUpdate: { type: "global", data: update } });
		}			
	}

	globalStorage.on("value", function(snapshot) {		
		localGlobalUpdate(snapshot.val());
	})


	self.tabSet = function(tabId, props) {								
		if (!tabListeners[tabId]) {
			tabListeners[tabId] = listenOnTabData(tabId)
		} 		

		localTabUpdate(tabId, Util.extend(tabCache, props));
		tabStorage.child(tabId).update(props);				
	}

	self.tabClear = function(tabId) {
		var listener = tabListeners[tabId];
		tabStorage.child(tabId).off("value", listener);
		localTabUpdate(tabId, {});
		tabStorage.child(tabId).remove();
	}

	self.globalClear = function(tabId) {		
		localGlobalUpdate({});
		globalStorage.remove();
	}

	self.globalSet = function(props) {
		localGlobalUpdate(Util.extend(globalCache, props));
		globalStorage.update(props);		
	}

	self.tabGet = function(tabId) {		
		return tabCache[tabId]
	}

	self.globalGet = function() {
		return globalCache
	}
 
	self.getAllTabs = function() { return tabCache }

	self.listenOnGlobalProp = function(prop, listener) {
		var ref = globalStorage.child(prop);
		var ignoreItems = true;

		ref.on('value', function(snapshot) {
			if (ignoreItems) {
				ignoreItems	= false;
			} else {
				listener(snapshot.val())
			}					  	
		});
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