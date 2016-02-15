DataManager = function(startingState) {	
	var self = this
	var loadedProps = ["tasks"];
	var persistedProps = ["className", "lessonName", "taskIndex", "studentName", "stopIndex", "toolbarOpen"];

	function set(prop) {
		return function (value) {
			self[prop] = value;
			BackgroundStorage.set("state", state());
			fire(prop, value);
		}	
	}

	// used when being alerted of a data change from the background, so every open tab doesn't call back to persist data
	function setWithoutPersist(prop, value) {
		self[prop] = value;		
		fire(prop, value);
	}	

	function state() {
		var state = {};
		persistedProps.forEach(function(prop) {
			state[prop] = self[prop];
		})		
		return state
	}

	function initialize() {
		persistedProps.concat(loadedProps).forEach(function(prop) {
			self["set" + Util.capitalizeFirstLetter(prop)] = set(prop);
			self[prop] = startingState[prop];			
		})
	}

	self.clear = function() {
		BackgroundStorage.clear("state");		
	}

	self.initialEvents = function() {
		persistedProps.forEach(function(prop) {					
			(startingState[prop] !== undefined) && fire(prop, startingState[prop]);
		})
	}

	chrome.runtime.onMessage.addListener(function(request) {		
		var stateObj = request.setState
		if (stateObj) {
			console.log("Getting the state!", stateObj);
			var propsToSet = Object.keys(stateObj);			
			propsToSet.forEach(function(prop) {
				setWithoutPersist(prop, stateObj[prop]);
			})			
		} 		
	})

	initialize();
}