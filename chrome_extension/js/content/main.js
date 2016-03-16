console.log("running the main!");

$(function() {		
	var globalRequest = (new StorageAccess("globalStorage")).get()
	var tabRequest = (new StorageAccess("tabStorage")).get()
		
	$.when(globalRequest, tabRequest).then(function(globalState, tabState){	
		var intialState = $.extend(globalState, tabState);				
		var manager = new DataManager(intialState);
		var lessonManager = new LessonManager(manager);
		var updateManager = new RemoteUpdateManager(manager);
		var loginManager = new LoginManager(manager);
		var lessonExecutor = new LessonExecutor(manager);
		var backgroundDisplay = new BackgroundDisplay();
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

		KeyBinding.keydown(KeyCode.escape, $(document), function(e) {			
			if (manager.toolbarOpen) {
				manager.setToolbarOpen(false);
			} else {
				manager.setToolbarOpen(true);
			}			
		})
	})	
})

// using this https://github.com/muaz-khan/RTCMultiConnection
// steps are: override DetectRTC.screen.extensionid with my extensions id - oombnfglplmogeagfpplabpeambpifip
// then I 
// psyche, lets just override DetectRTC.screen.getChromeExtensionStatus with something that always retursn true


// window.postMessage('rtcmulticonnection-extension-loaded', '*');