DataManager = function(startingState) {	
	var globalStorage = new StorageAccess("globalStorage");
	var tabStorage = new StorageAccess("tabStorage");

	var self = this
	var localProps = ["tasks"];	
	var globalProps = ["className", "lessonName", "taskIndex", "studentName", "stopIndex", "startTime", "connectedToClass"];		
	var staticProps = ["url"];
	var tabProps = ["toolbarOpen", "needsHelp"];

	// this fires off requests to background storage
	function set(key, storage, getState) {
		return function (value) {						
			var stateCopy = getState();
			stateCopy[key] = value;
			return storage.set(stateCopy);			
		}	
	}	

	// this updates the local data when background storage changes
	function localUpdate(prop, value) {		
		if (self[prop] !== value || (staticProps.indexOf(prop) > -1)) {
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

		// update tab storage with the static values
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
		globalStorage.set({});
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
			(globalProps.concat(tabProps)).forEach(function(prop) {
				if (stateObj[prop] !== undefined) {					
					localUpdate(prop, stateObj[prop]);	
				} 
			})
		} 		
	})

	initialize();
}