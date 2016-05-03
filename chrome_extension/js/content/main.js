console.log("running the main!");

$(function() {				
	chrome.runtime.onMessage.addListener(
  		function(request, sender, sendResponse) {    	  			

    		if (request.initData) {    			
    			var data = request.initData
    			var toolbarIframe = $("<iframe>");
    			var chatIframe = $("<iframe>");
    			var scratchPreviewIframe = $("<iframe>");
    			var toolbarHtml = data.toolbarHtml;
    			var chatHtml = data.chatHtml;    			
    			var scratchPreviewHtml = data.scratchPreviewHtml;

    			var globalData = data.globalData;
    			var tabData = data.tabData;

    			var initialState = $.extend(globalData, tabData);				    			
    			var manager = new DataManager(initialState);
    			var lessonManager = new LessonManager(manager);
    			// var updateManager = new RemoteUpdateManager(manager);
    			var loginManager = new LoginManager(manager);
    			var lessonExecutor = new LessonExecutor(manager);
    			var backgroundDisplay = new BackgroundDisplay(manager);		
    			var helpManager = new HelpManager(manager);				
    			var scratchPadSJsRunner = new ScratchPadJsRunner();				
    			var xrayManager = new XRayManager(manager);
    			var pageSyncManager = new PageSyncManager(manager);	  


    			var toolbarDeferred = new $.Deferred()
    			var chatDeferred = new $.Deferred()
    			var scratchPreviewDeferred = new $.Deferred()

    			new Toolbar(toolbarIframe, toolbarHtml, manager, function() {
    				toolbarDeferred.resolve();   				
    			});	

    			new ChatWindow(chatIframe, chatHtml, manager, function() {
    				chatDeferred.resolve();
    			});	

    			if (window.location.href.indexOf("scratchpad.io")) {
    				new ScratchSyncManager(scratchPreviewIframe, scratchPreviewHtml, manager, function() {
    					scratchPreviewDeferred.resolve()
    				});
    			} else {
    				scratchPreviewDeferred.resolve()
    			}
    			
    			$.when(toolbarDeferred, chatDeferred, scratchPreviewDeferred).then(function() {    				
    				console.log("init", data);
    				manager.initialEvents();    			
    			})
			}								
		}      		
	)

	chrome.runtime.sendMessage({init: true});		
})