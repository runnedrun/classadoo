var RemoteUpdateManager = function(dataManager) {
	var self = this;
	var m = dataManager;

	function connectToClass(className) {	
		if (className) {						
			chrome.runtime.sendMessage({connectToClass: className});		
		}		
	}
	
	respond("className", connectToClass);	
}