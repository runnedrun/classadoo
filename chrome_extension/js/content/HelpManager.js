HelpManager = function(dataManager){
	var m = dataManager;

	respond("help", function() {		
		if (m.needsHelp) {
			m.setNeedsHelp(false);	
		} else {
			m.setNeedsHelp(true);	
		}		
	})
}