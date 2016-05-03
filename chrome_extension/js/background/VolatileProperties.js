// any volatile browser propert we care about (active window, tab etc.) goes here

VolatileProperties = function(dataManager) {
	var self = this;
	var m = dataManager
	var lastRemovedTab = false;

	ActiveTab = function() {
		var self = this;

		chrome.tabs.onActivated.addListener(function(activeInfo) {
			setActiveTab(activeInfo.tabId)						
		})			

		chrome.tabs.onUpdated.addListener(function(tabId, changeInfo){
		  if (changeInfo.url === undefined){
		    setActiveTab(tabId)
		  }
		});

		function setActiveTab(tabId) {
			var allTabs = m.getAllTabs()
			Object.keys(allTabs).map(function(tabId) {
				if (allTabs[tabId] && allTabs[tabId].active && !(lastRemovedTab == tabId)) {												
					m.tabSet(tabId, {active: false})
				}					
			})				
			m.tabSet(tabId, { "active": true });	
		}
	}

	TabRemoved = function() {
		var self = this;

		chrome.tabs.onRemoved.addListener(function(tabId) {
			lastRemovedTab = tabId;
			m.tabClear(tabId, null);
		})
	}

	new ActiveTab();
	new TabRemoved();
}
