State = function(props, onUpdate) {	
	var self = this;

	props.forEach(function(prop) {
		self["set" + Util.capitalizeFirstLetter(prop)] = set(prop);
	})

	function set(propName) {
		return function(val) {
			self[propName] = val
			onUpdate && onUpdate(self);
		}
	}

	this.setFun = function(propName, val) {
		return function() { set(propName)(val) }
	}
}