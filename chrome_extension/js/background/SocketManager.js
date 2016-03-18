SocketManager = function(socket, dataManager) {
	var self = this;		
	var socket;
	var m = dataManager;

	socket.on("connect", connected);		
	socket.on("reconnect", connected);	
	socket.on("connect_error", disconnected);

	self.emit = function(name, message) {
		if (socket) {
			socket.emit(name, message);
		}
	}

	function connected() {
		console.log("connected to class socket");		
		m.globalSetProps({ "connectedToBackend": true });
	}

	function disconnected() {
		console.log("error connecting to class socket");		
		m.globalSetProps({ "connectedToBackend": false });
	}
}