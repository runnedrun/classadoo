console.log("running the main!");

$(function() {	
	BackgroundStorage.get("state").then(function(intialState){				
		var manager = new DataManager(intialState);
		var lessonManager = new LessonManager(manager);
		var updateManager = new UpdateManager(manager);		

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