console.log("running the main!");

$(function() {				
	chrome.runtime.onMessage.addListener(
  		function(request, sender, sendResponse) {    	  			

    		if (request.initData) {    			
    			var data = request.initData
    			var toolbarIframe = $("<iframe>");
    			var chatIframe = $("<iframe>");
    			var toolbarHtml = data.toolbarHtml;
    			var chatHtml = data.chatHtml;
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
    			var scratchSyncManager = new ScratchSyncManager(manager);	  

    			var toolbarDeferred = new $.Deferred()
    			var chatDeferred = new $.Deferred()
    			new Toolbar(toolbarIframe, toolbarHtml, manager, function() {
    				toolbarDeferred.resolve();   				
    			});	

    			new ChatWindow(chatIframe, chatHtml, manager, function() {
    				chatDeferred.resolve();
    			});	
    			
    			$.when(toolbarDeferred, chatDeferred).then(function() {
    				manager.initialEvents();    			
    			})
			}								
		}      		
	)

	chrome.runtime.sendMessage({init: true});		
})