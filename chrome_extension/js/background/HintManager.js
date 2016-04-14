HintManager = function(dataManager, hintPrefix) {
	var m = dataManager
	var hintWindow;
	var savedWindowState = {};	

	function showHint(taskName) {
		var hintUrl = hintPrefix + taskName + ".html"		

		chrome.windows.getLastFocused(function(focusedWindow) {
			savedWindowState = {id: focusedWindow.id, width: focusedWindow.width, left: focusedWindow.left};			
			chrome.system.display.getInfo(function(infos) {
				var info = infos[0];
				var width = info.workArea.width / 2;		 			 

		 		chrome.windows.update(focusedWindow.id, {left: width, width: width}, function() {
		 			openHintWindow(hintUrl);
		 		})		 		
			})			
		})
	}	

	function openHintWindow(url) {
		chrome.system.display.getInfo(function(infos) {
		 	// arbitarily select the first display
		 	var info = infos[0];

		 	var width = info.workArea.width / 2;
		 	var height = info.workArea.height;		 	

		 	if (hintWindow) {
		 		chrome.windows.get(hintWindow.id, function(window) {
		 			if (window) {
		 				console.log("exisitn window");
			 			chrome.windows.update(hintWindow.id, { focused: true, left: 0, top: 0, width: width, height: height })	
			 			chrome.tabs.query({windowId: window.id, index: 0}, function(tabs) {			 				
			 				chrome.tabs.update(tabs[0].id, {url: url, active: true});
			 			})						 			 		
			 		} else  {
			 			createNewWindow();
			 		}
		 		})				
			} else {				
				createNewWindow();
			}		 	

			function createNewWindow() {
				chrome.windows.create({ url: url, left: 0, top: 0, width: width, height: height }, function(newWindow) {
					hintWindow = newWindow
				})				
			}
		})					
	} 

	function closeHint() {
		if (savedWindowState)
			console.log('updatingthis stufff', "Asdfss");
			chrome.windows.update(savedWindowState.id, {width: savedWindowState.width, left: savedWindowState.left});

		if (hintWindow)
			chrome.windows.remove(hintWindow.id);		
	}

	m.listenOnGlobalProp("showHint", function(taskName) {
		console.log("showing hint!", taskName);
		if (taskName) {
			showHint(taskName)
		} else {
			closeHint()
		}
	})	
}