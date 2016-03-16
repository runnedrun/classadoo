ServerDataSync = function(dataManager, socketManager) {
	var s = socketManager;
	var m = dataManager;

	respond("storageUpdate", function() {
		m.getFullState().then(function(state) {			
			s.emit("state.update", state);					
		})		
	});
}