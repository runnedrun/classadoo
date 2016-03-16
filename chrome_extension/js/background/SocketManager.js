SocketManager = function(domain, dataManager) {
	var self = this;		
	var socket;
	var m = dataManager;	

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
		var className = request.connectToClass;		

		if (className) {			
			console.log("connecting to class");			
			socket = io(domain);

			socket.on("connect", connected);		
			socket.on("reconnect", connected);	
			socket.on("connect_error", disconnected);
		}
	})	

	self.emit = function(name, message) {
		if (socket) {
			socket.emit(name, message);
		}
	}

	function connected() {
		console.log("connected to class socket");		
		m.globalSetProps({ "connectedToClass": true });
	}

	function disconnected() {
		console.log("error connecting to class socket");		
		m.globalSetProps({ "connectedToClass": false });
	}
}