DataManager = function(startingState) {	
	var globalStorage = new StorageAccess("globalStorage");
	var tabStorage = new StorageAccess("tabStorage");

	var self = this
	var localProps = ["tasks"];	
	var globalProps = 
		["lessonName", "taskIndex", "studentName", "stopIndex", 
		"startTime", "connectedToBackend", "needsHelp", "promptHint",
		"showHint", "hintAllowed", "taskNames", "xray", "syncClick", 
		"syncHover", "syncHighlight", "backSyncClick"];
	var staticProps = ["url"];
	var tabProps = ["toolbarOpen", "active"];

	// this fires off requests to background storage
	function set(key, storage, getState) {
		return function (value) {				
			var dataObj = {}			
			dataObj[key] = value
			return storage.set(dataObj);						
		}	
	}	

	// this updates the local data when background storage changes
	function localUpdate(prop, value) {						
		if (!Util.equivalent(self[prop], value) || (staticProps.indexOf(prop) > -1)) {
			self[prop] = value;
			fire(prop, value);
			fire("dataUpdate", {});
		}		
	}
		

	function initialize() {
		globalProps.forEach(function(prop) {
			self["set" + Util.capitalizeFirstLetter(prop)] = set(prop, globalStorage, globalState);
			self[prop] = startingState[prop];			
		})

		tabProps.forEach(function(prop) {			
			self["set" + Util.capitalizeFirstLetter(prop)] = set(prop, tabStorage, tabState);
			self[prop] = startingState[prop];			
		})

		localProps.forEach(function(prop) {			
			self["set" + Util.capitalizeFirstLetter(prop)] = function(value) { localUpdate(prop,value) };				
		})

		// update tab storage with the static values, if we're logged in
		tabStorage.set(tabState());						
	}

	function state(props) {
		return function() {
			var state = {};
			props.forEach(function(prop) {
				state[prop] = self[prop];
			})							
			return state
		}		
	}

	self.clear = function() {
		globalStorage.clear();
		localProps.forEach(function(prop) {
			self[prop] = null;
		})
		// tabStorage.set({});
	}	

	self.initialEvents = function() {
		(globalProps.concat(tabProps)).forEach(function(prop) {					
			(startingState[prop] !== undefined) && fire(prop, startingState[prop]);
		})		
	}

	var globalState = state(globalProps)
	var tabState = state(tabProps.concat(staticProps));	

	// static props
	self.url = document.location.toString();

	// respond to storage updates from the background	
	chrome.runtime.onMessage.addListener(function(request) {		
		var stateObj = request.storageUpdate
		if (stateObj) {										
			if (stateObj.type == "tab") {
				if (stateObj.data) {
					tabProps.forEach(function(prop) {				
						localUpdate(prop, stateObj.data[prop]);
					})					
				} else {
					console.log("deleting locally");
					tabProps.forEach(function(prop) {				
						localUpdate(prop, null);
					})					
				}				
			} else {
				if (stateObj.data) {					
					globalProps.forEach(function(prop) {	
						localUpdate(prop, stateObj.data[prop]);
					})								
				} else {
					console.log("deleting locally global");
					globalProps.forEach(function(prop) {				
						localUpdate(prop, null);
					})					
				}				
			}			
		} 		
	})

	initialize();
}