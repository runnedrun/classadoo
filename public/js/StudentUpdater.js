$ = require("jquery")

StudentUpdater = function(studentId) {
	var self = this
	var ref = new Firebase("vivid-inferno-6534.firebaseIO.com/users");

	self.update = function(props) {	  	  			
		var state = ref.child("" + studentId + "/state/global");      		
		state.update(props)		
	}  	

	self.remove = function(field) {	  	 
	    var state = ref.child("" + studentId + "/state/global" + field);      
	    state.remove();	  
	}

	self.updateOnEnter = function(event) {		
		var enterKeyCode = 13;  

		if (event.keyCode === enterKeyCode) {
			console.log("updating on enter");
			var target = $(event.target);
			var field = target.data("field");

			var value =  $(target).val() || $(target).html();

			if (value === "") {                        
				self.remove(field);        
			} else {				
				var obj = {}
				obj[field] = value;				
				self.update(obj);
			}           

			target.blur();
			event.preventDefault();         
		}     
	}
}