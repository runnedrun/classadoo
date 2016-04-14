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

	var syncCache = false	

	var tabListeners = {}
	function listenOnTabData(tabId) {
		return tabStorage.child(tabId).on("value", function(snapshot){
			localTabUpdate(tabId, snapshot.val())
		})
	}	

	function localTabUpdate(tabId, update) {
		var previous = tabCache[tabId] || {}

		var diff = Util.objectDiff(previous, update)
		var diffKeys = Object.keys(diff);

		if (diffKeys.length) {			
			if (update) {
				tabCache[tabId] = update;
			} else {
				delete tabCache[tabId];
			}

			diffKeys.forEach(function(key) {
				fire("tab-" + key, diff[key]);
			})
			
			Message.send(Number(tabId), { storageUpdate: { type: "tab", data: update } });
		}			
	}

	function localGlobalUpdate(update) {		
		var previous = globalCache || {}

		var diff = Util.objectDiff(previous, update)
		var diffKeys = Object.keys(diff);

		if (diffKeys.length) {	
			console.log("updating global")		
			globalCache = update;

			diffKeys.forEach(function(key) {
				fire("global-" + key, diff[key]);
			})			

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

		localTabUpdate(tabId, Util.extend(tabCache[tabId], props));

		if (globalCache.studentName) {					
			if (syncCache) {
				syncCaches()
			} else{				
				tabStorage.child(tabId).update(props);				
			}
		} else {
			syncCache = true;
		}
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

		if (globalCache.studentName || props.studentName) {					
			if (syncCache) {
				syncCaches()
			} else{				
				globalStorage.update(props);					
			}
		} else {
			syncCache = true;
		}
	}

	self.tabGet = function(tabId) {		
		return tabCache[tabId] || {}
	}

	function syncCaches() {			
		globalStorage.update(globalCache);
		tabStorage.update(tabCache);
		syncCache = false;
	}

	self.globalGet = function() {
		return globalCache || {}
	}
 
	self.getAllTabs = function() { return tabCache }

	self.listenOnGlobalProp = function(prop, listener) {
		respond("global-" + prop, listener);
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