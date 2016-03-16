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

		if (request.sendState) {				
			if(socket) {
				console.log("sending state to server");
				m.getFullState().then(function(state) {
					socket.emit("state.update", state);		
				})				
			} 
		} 
	})	

	self.sendMessage = function(message) {
		if (socket) {
			socket.emit("message", message);
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