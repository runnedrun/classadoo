ScreensharePrompter = function () {

	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {		
		// if (request.screenshareRequest) {			
		// 	console.log("received screen share request!");			
		// 	var pending = chrome.desktopCapture.chooseDesktopMedia(
		// 		['screen', 'window'],
		// 		sender.tab,
		// 		function (streamid) {
	 //                // communicate this string to the app so it can call getUserMedia with it                	                
	 //                chrome.tabs.sendMessage(sender.tab.id, {screenshareId: streamid}, function() {})
	 //                return false;
  //       		});            
		// }
	})
}