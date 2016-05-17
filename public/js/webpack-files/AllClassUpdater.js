$ = require("jquery")

AllClassUpdater = function(students, ref) {
	var self = this	

	self.update = function(props) {	  	  	
		Object.keys(students).forEach(function(id) {
			console.log("updating student", id);
			var state = ref.child("" + id + "/state/global");      
			state.update(props)
		})
	}  

	self.updateBasedOnStudent = function(fieldName, callback) {		
		var userIds = Object.keys(students);		

		userIds.forEach(function(id) {
			var value = callback(students[id]);			
			var stateRef = ref.child("" + id + "/state/global");      

			obj = {}
			obj[fieldName] = value;
			stateRef.update(obj);
		})
	}

	self.remove = function(field) {	  
	  Object.keys(students).forEach(function(id) {
	    var state = ref.child("" + id + "/state/global/" + field);      
	    state.remove();
	  })
	}

	self.updateOnEnter = function(manipulateValue) {		
		return function(event) {
			var enterKeyCode = 13;  

			if (event.keyCode === enterKeyCode && !event.shiftKey) {
				console.log("updating on enter");
				var target = $(event.target);
				var field = target.data("field");

				var value =  $(target).val() || $(target).html();

				if (value === "") {                        
					self.remove(field);        
				} else {				
					var obj = {}
					var finalValue = manipulateValue ? manipulateValue(value) : value;					
					obj[field] = finalValue;				
					self.update(obj);
				}           

				target.blur();
				event.preventDefault();         
			}     
		}		
	}	

	self.updateForActiveTab = function(prop) {
		Object.keys(students).forEach(function(id) {
			var activeTabId = getActiveTab(id).id;
			ref.child("" + id + "/state/tab/" + activeTabId).update(prop);
		})		
	}

	function getActiveTab(id) {
      var allTabs = students[id].tab;
      var activeTab;
      Object.keys(allTabs).forEach(function(tabId) {        
        if (allTabs[tabId].active) {
          activeTab = allTabs[tabId]
          activeTab.id = tabId            
        }         
      })      
      return activeTab;
    }
}