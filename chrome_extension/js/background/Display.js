Display = function(message, type) {
	// types are dismissible and temporary
	chrome.tabs.getSelected(null, function(tab) {
		if (tab && tab.id > 0) {
			chrome.tabs.sendMessage(tab.id, { display: { message: message, type: type || "temporary" } })	
		}
	});
}