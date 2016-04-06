ScreenshareManager = function() {
	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {			
			if (request.startScreenshare) {
				chrome.desktopCapture.chooseDesktopMedia(["screen"], function(streamId) {
					if (streamId) {
						// fire("startStream", {streamId: streamId});
						Message.send(sender.tab.id, {streamId: streamId})
					}
				});
			}
		}
	)
}