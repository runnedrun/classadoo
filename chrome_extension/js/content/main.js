console.log("running the main!");

$(function() {		
	var globalRequest = (new StorageAccess("globalStorage")).getAll()
	var tabRequest = (new StorageAccess("tabStorage")).getAll()
		
	$.when(globalRequest, tabRequest).then(function(globalState, tabState){	
		console.log("loaded!");
		var intialState = $.extend(globalState, tabState);				
		var manager = new DataManager(intialState);
		var lessonManager = new LessonManager(manager);
		// var updateManager = new RemoteUpdateManager(manager);
		var loginManager = new LoginManager(manager);
		var lessonExecutor = new LessonExecutor(manager);
		var backgroundDisplay = new BackgroundDisplay(manager);		
		var helpManager = new HelpManager(manager);				

		chrome.runtime.sendMessage({getToolbarHtml: true});
    	chrome.runtime.onMessage.addListener(
	  		function(request, sender, sendResponse) {    	  			
	    		if (request.html) {
	    			var iframe = $("<iframe>");
	    			new Toolbar(iframe, request.html, manager, function() {
	    				manager.initialEvents();    				    			
	    			});		    			
				}

				if (request.streamId) {
					console.log("about to get the mediaaaa");
					console.log("streamIDDD", request.streamId);

					window.postMessage({type: "openStream", streamId: request.streamId}, "*");
					// navigator.webkitGetUserMedia({
				 //        audio: false,
				 //        video: {
				 //            mandatory: {
				 //               chromeMediaSource: "desktop",
				 //               chromeMediaSourceId: request.streamId,
				 //               maxWidth: 1920,
				 //               maxHeight: 1080
				 //           },
				 //           optional: [{
				 //               googTemporalLayeredScreencast: true
				 //           }]
				 //        }   
					// },
					// function(stream) {
					//     console.log("STREEEAM", stream)
					// },
					// function onError(errors) {
					//     console.log('Failed to get user media.', errors);
					// }) 
				}				
			}      		
		)			

		// KeyBinding.keydown(KeyCode.escape, $(document), function(e) {						
		// 	if (manager.toolbarOpen) {
		// 		manager.setToolbarOpen(false);
		// 	} else {
		// 		manager.setToolbarOpen(true);
		// 	}			
		// })
	})	
})