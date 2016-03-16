var RemoteUpdateManager = function(dataManager) {
	var self = this;
	var m = dataManager;

	function connectToClass(className) {	
		if (className) {						
			chrome.runtime.sendMessage({connectToClass: className});		
		}		
	}

	function sendState() {
		if (m.connectedToClass) {
			console.log("sending state!");
			chrome.runtime.sendMessage({ sendState: true });		
		} else {
			console.log("not connected to class, cannot send update");
		}		
	}
	
	respond("className", connectToClass);
	respond("dataUpdate", sendState);	
}