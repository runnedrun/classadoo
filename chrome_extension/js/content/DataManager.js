DataManager = function(startingState) {	
	var self = this
	var localProps = ["tasks"];	
	var persistedProps = ["className", "lessonName", "taskIndex", "studentName", "stopIndex", "startTime"];		
	var staticProps = ["url"];
	var tabSpecificProps = ["toolbarOpen"];

	function set(prop) {
		return function (value) {
			self[prop] = value;
			BackgroundStorage.set("state", self.state());
			fire(prop, value);
			fire("dataUpdate", {});
		}	
	}

	function setForTab(prop) {
		return function (value) {
			self[prop] = value;			
			BackgroundStorage.setForTab(prop, value);
			fire(prop, value);
			fire("dataUpdate", {});
		}		
	}

	// used when being alerted of a data change from the background, so every open tab doesn't call back to persist data
	function setWithoutPersist(prop) {
		return function(value) {
			self[prop] = value;		
			fire(prop, value);	
		}
		
	}		

	function initialize() {
		persistedProps.forEach(function(prop) {
			self["set" + Util.capitalizeFirstLetter(prop)] = set(prop);
			self[prop] = startingState[prop];			
		})

		tabSpecificProps.forEach(function(prop) {			
			self["set" + Util.capitalizeFirstLetter(prop)] = setForTab(prop);			
			self[prop] = startingState[prop];
		})

		localProps.forEach(function(prop) {
			self["set" + Util.capitalizeFirstLetter(prop)] = setWithoutPersist(prop);	
		})
	}

	self.clear = function() {
		BackgroundStorage.clear("state");		
	}

	self.initialEvents = function() {
		(persistedProps + tabSpecificProps).forEach(function(prop) {					
			(startingState[prop] !== undefined) && fire(prop, startingState[prop]);
		})		
	}

	self.state = function() {
		var state = {};
		persistedProps.concat(staticProps).forEach(function(prop) {
			state[prop] = self[prop];
		})							
		return state
	}

	self.url = document.location.toString()


	chrome.runtime.onMessage.addListener(function(request) {
		var stateObj = request.setState
		if (stateObj) {			
			console.log("Getting the state!", stateObj);
			(persistedProps + tabSpecificProps).forEach(function(prop) {
				if (stateObj[prop] !== undefined) {
					setWithoutPersist(prop)(stateObj[prop]);	
				} 
			})
		} 		
	})

	initialize();
}