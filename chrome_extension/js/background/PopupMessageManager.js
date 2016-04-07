console.log("popo up load")

PopupMessageManager = function(dataManager) {
	console.log("popo up init")
	var m = dataManager

	var popupHeight = 200;
	var popupWidth = 400;
	var existingWindow; 

	function popupUrl(message) {
		return "/html/message-popup.html?__=" + Date.now() + "#" + message
	}

	m.listenOnGlobalProp("popupMessage", function(message) {
		console.log("popo up receive")
		if (message) {
			// remove the timestamp we use to ensure uniqueness
			var displayMessage = message.split("%%")[0];						

			if (existingWindow) {
				chrome.windows.get(existingWindow.id, function(exWindow) {
					if (exWindow) {
						chrome.tabs.update(existingWindow.tabs[0].id, {url: popupUrl(displayMessage), active: true })
						chrome.windows.update(existingWindow.id, { focused: true })
					} else {
						createNewWindow(displayMessage)
					}
				})				
			} else {
				createNewWindow(displayMessage)
			}			 
		}
	})

	function createNewWindow(message) {
		chrome.system.display.getInfo(function(infos) {
		 	// arbitarily select the first display
		 	var info = infos[0];

		 	var width = info.workArea.width;
		 	var height = info.workArea.height;
		 	var top = Math.floor(height / 2 - popupHeight / 2);
		 	var left = Math.floor(width / 2 - popupWidth / 2);

		 	chrome.windows.create({ url: popupUrl(message), left: left, top: top, width: popupWidth, height: popupHeight }, function(newWindow) {
		 		existingWindow = newWindow
		 	})
		})					
	} 	
}