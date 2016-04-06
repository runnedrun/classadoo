HelpManager = function(dataManager){
	var m = dataManager;

	respond("help", function() {
		// chrome.runtime.sendMessage({startScreenshare: true});
		if (m.needsHelp) {
			m.setNeedsHelp(false);	
		} else {
			m.setNeedsHelp(true);	
		}		
	})
}