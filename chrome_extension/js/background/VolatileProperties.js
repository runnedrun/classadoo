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
			chrome.tabs.query({active: true, lastFocusedWindow: true}, function(activeTabs) {								
				var activeTab = activeTabs[0]

				var allTabs = m.getAllTabs();
				
				Object.keys(allTabs).map(function(tabId) {				
					if (Number(tabId) != activeTab.id) {												
						m.tabSet(tabId, {active: false})
					}
				})				

				m.tabSet(activeTab.id, { "active": true, url: activeTab.url });					
			})			
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
