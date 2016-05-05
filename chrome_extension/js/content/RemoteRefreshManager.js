RemoteRefreshManager = function(dataManager) {
	var m = dataManager;

	function refreshPage() {
		if (m.remoteRefresh) {			
			m.setRemoteRefresh(false);
			window.location.reload();			
		} 
	}

	respond("remoteRefresh", refreshPage);
}