BackgroundDisplay = function() {
	chrome.runtime.onMessage.addListener(function(request) {		
		if (request.display) {			
			ButterBar(request.display.message);
		}
	})
}