Display = function(message, type) {
	// types are dismissible and temporary
	chrome.tabs.getSelected(null, function(tab) {
		if (tab) {
			chrome.tabs.sendMessage(tab.id, { display: { message: message, type: type || "temporary" } })	
		}
	});
}