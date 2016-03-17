BackgroundDisplay = function(dataManager) {
	var m = dataManager;

	chrome.runtime.onMessage.addListener(function(request) {		
		if (request.display && m.toolbarOpen) {			
			ButterBar(request.display.message);
		}
	})
}