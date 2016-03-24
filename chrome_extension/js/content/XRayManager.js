XRayManager = new function() {
	var scriptUrl = chrome.extension.getURL("/x-ray/static-files/webxray.js")
	var cssUrl = chrome.extension.getURL("/x-ray/static-files/webxray.css");

	var scriptInserted = false;

	respond("xray", function() {
		if (!scriptInserted) {			
			console.log("INSERTING SCRIPT");
			$("head").append("<link href='" + cssUrl + "' rel='stylesheet' type='text/css'></link>");
			$("head").append("<script src='" + scriptUrl + "'></script>");

			if ('webxrayPreferences' in localStorage)
  				window.parent.postMessage(localStorage.webxrayPreferences, "*");
			else
				window.parent.postMessage("{}", "*");

			scriptInserted = true;
		}		
	})
}