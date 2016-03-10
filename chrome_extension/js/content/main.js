console.log("running the main!");

$(function() {	
	BackgroundStorage.get("state").then(function(intialState){				
		var manager = new DataManager(intialState);
		var lessonManager = new LessonManager(manager);
		var updateManager = new RemoteUpdateManager(manager);
		var lessonExecutor = new LessonExecutor(manager);
		var errorDisplay = new ErrorDisplay();
		var screenshareManager = new ScreenshareManager();

		chrome.runtime.sendMessage({getToolbarHtml: true});
    	chrome.runtime.onMessage.addListener(
	  		function(request, sender, sendResponse) {    	  			
	    		if (request.html) {
	    			var iframe = $("<iframe>");
	    			new Toolbar(iframe, request.html, manager);
	    			manager.initialEvents();
				}				
			}      		
		)			
	})
})

// using this https://github.com/muaz-khan/RTCMultiConnection
// steps are: override DetectRTC.screen.extensionid with my extensions id - oombnfglplmogeagfpplabpeambpifip
// then I 
// psyche, lets just override DetectRTC.screen.getChromeExtensionStatus with something that always retursn true


// window.postMessage('rtcmulticonnection-extension-loaded', '*');