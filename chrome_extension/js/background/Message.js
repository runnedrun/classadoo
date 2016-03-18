Message = function(dataManager) {	
	var self = this
	var m = dataManager;

	self.sendToAllTabs = function(message) {
	    chrome.windows.getAll({populate: true}, function(windows){
	        $.each(windows,function(index,window){
	            $.each(window.tabs, function() {      	            	
	                self.send(this.id, message);
	            });
	        })
	    } )
	}

	self.sendToOpenTabs = function(message) {
		var allTabData = m.getAllTabs();
		Object.keys(allTabData).forEach(function(tabId) {
			if (allTabData[tabId].toolbarOpen) {
		        self.send(Number(tabId), message);		           
	        }
		})
	}

	self.send = function(tabId, message){
		// console.log("sending message to", tabId, message);
	   	chrome.tabs.sendMessage(tabId, message, function() {});
	}
} 