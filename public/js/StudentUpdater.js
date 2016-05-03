$ = require("jquery")

StudentUpdater = function(parentRef, studentId) {
	var self = this

	var ref = parentRef.child(studentId);

	self.updateFun = function(props) {
		return function() {
			self.update(props);
		}
	}

	self.update = function(props) {	  	  			
		var state = ref.child("/state/global");      		
		state.update(props)		
	}  	

	self.remove = function(field) {	  	 
	    var state = ref.child("/state/global" + field);      
	    state.remove();	  
	}

	self.updateOnEnter = function(event) {		
		var enterKeyCode = 13;  

		if (event.keyCode === enterKeyCode) {			
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

	self.updateTab = function(tabId, props) {	  	  			
		var state = ref.child("/state/tab/" + tabId);      		
		state.update(props)		
	}  	

	self.updateActiveTab = function(allTabs, props) {		
		var activeTabId;
		Object.keys(allTabs).forEach(function(tabId) {        
		  if (allTabs[tabId].active) {
		    activeTab = allTabs[tabId]
		    activeTabId = tabId
		  }         
		})      
				
		self.updateTab(activeTabId, props)
	}

	self.push = function(propName, value) {
		var field = ref.child("/state/global/chatHistory");      		
		field.push(value)	
	}
}