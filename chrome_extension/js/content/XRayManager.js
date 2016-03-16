XRayManager = new function() {
	var scriptUrl = chrome.extension.getURL("/x-ray/static-files/webxray.js")
	var scriptInserted = false;

	respond("xray", function() {
		if (!scriptInserted) {
			console.log("INSERTING SCRIPT");
			$("head").append("<script src='" + scriptUrl + "'></script>");
			scriptInserted = true;
		}		
	})
}