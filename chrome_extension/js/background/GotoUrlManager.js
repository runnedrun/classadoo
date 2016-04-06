GotoUrlManger = function(dataManager) {
	var m = dataManager;	
	
	m.listenOnGlobalProp("gotoUrl", function(gotoUrl) {
		if (gotoUrl) {
			openUrlOrGoToExistingTab(gotoUrl)	
		}		
	})

	function openUrlOrGoToExistingTab(gotoUrl) {
		chrome.windows.getAll({populate: true}, function(windows){
			var alreadyOpenId; 

	        windows.forEach(function(window){
	            window.tabs.forEach(function(tab) {      	            	
	            	if (tab.url == gotoUrl) {
	            		alreadyOpenId = tab.id;	            		
	            	}
	            });
	        })

	        if (alreadyOpenId) {
	        	chrome.tabs.update(alreadyOpenId, {selected: true});
	        } else {
	        	chrome.tabs.create({ url: gotoUrl });
	        }
		})	
	}
}