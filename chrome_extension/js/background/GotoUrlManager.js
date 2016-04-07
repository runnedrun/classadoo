GotoUrlManger = function(dataManager) {
	var m = dataManager;	
	
	m.listenOnGlobalProp("gotoUrl", function(gotoUrl) {
		if (gotoUrl) {
			openUrlOrGoToExistingTab(gotoUrl)	
		}		
	})

	function parseUrl(url) {
		var parser = document.createElement('a');
		parser.href = url;
		return parser
	}

	function onlyTimestampInPath(url) { 
		var parser = parseUrl(url)

		var queryKVs = parser.search.split("=");
		var onlyTimestamp = queryKVs[0] == "?__"		

		return onlyTimestamp
	}

	function openUrlOrGoToExistingTab(gotoUrl) {
		chrome.windows.getAll({populate: true}, function(windows){
			var alreadyOpenId; 

	        windows.forEach(function(window){
	            window.tabs.forEach(function(tab) {
	            	if (onlyTimestampInPath(gotoUrl)) {	            		
	            		var parsedTabUrl = parseUrl(tab.url);
	            		var parsedGotoUrl = parseUrl(gotoUrl);

	            		if (parsedTabUrl.path == parsedGotoUrl.path && parsedGotoUrl.host == parsedTabUrl.host) {
		            		alreadyOpenId = tab.id;	            		
		            	}
	            	} else {
	            		if (tab.url == gotoUrl) {
	            			alreadyOpenId = tab.id;	            		
	            		}
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