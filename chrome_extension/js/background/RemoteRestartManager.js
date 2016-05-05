RemoteRestartManager = function(dataManager) {
	var m = dataManager;

	m.listenOnGlobalProp("remoteRestart", function() {
		if (m.globalGet().remoteRestart) {			
			m.globalSet({remoteRestart: false}).then(function() {
				chrome.runtime.reload();	
			})				
		}		
	})
}