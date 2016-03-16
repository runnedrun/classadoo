Message = new function() {	
	var self = this

	self.sendToAllTabs = function(message){
	    chrome.windows.getAll({populate: true}, function(windows){
	        $.each(windows,function(index,window){
	            $.each(window.tabs, function() {      	            	
	                self.send(this.id, message);
	            });
	        })
	    } )
	}

	self.send = function(tabId, message){
		console.log("sending message to", tabId, message);
	   	chrome.tabs.sendMessage(tabId, message, function() {});
	}
} 