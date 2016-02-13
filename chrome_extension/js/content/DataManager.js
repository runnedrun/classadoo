DataManager = function(startingState) {	
	var self = this
	var loadedProps = ["tasks"];
	var persistedProps = ["className", "lessonName", "taskIndex", "studentName", "stopIndex"];

	function set(prop) {
		return function (value) {
			self[prop] = value;
			BackgroundStorage.set("state", state());
			fire(prop, value);
		}	
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
			startingState[prop] && fire(prop, startingState[prop]);
		})
	}

	initialize();
}