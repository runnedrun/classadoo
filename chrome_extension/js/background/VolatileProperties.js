// any volatile browser propert we care about (active window, tab etc.) goes here

VolatileProperties = function(dataManager) {
	var self = this;
	var m = dataManager
	var lastRemovedTab = false;

	ActiveTab = function() {
		var self = this;

		chrome.tabs.onActivated.addListener(function(activeInfo) {
			m.getAllTabs().then(function(allTabStates) {
				var deferreds = Object.keys(allTabStates).map(function(tabId) {
					if (allTabStates[tabId].active && !(lastRemovedTab == tabId)) {												
						return m.tabSetProps(Number(tabId), { "active": false })
					}					
				})	

				$.when.apply($, deferreds).then(function() {
					m.tabSetProps(activeInfo.tabId, { "active": true });				
				})				
			})			
		})			
	}

	TabRemoved = function() {
		var self = this;

		chrome.tabs.onRemoved.addListener(function(tabId) {
			lastRemovedTab = tabId;
			m.tabSet(tabId, undefined)			
		})
	}

	new ActiveTab();
	new TabRemoved();
}
