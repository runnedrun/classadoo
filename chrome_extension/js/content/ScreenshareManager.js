ScreenshareManager = function () {	
	chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {		
		if (request.screenshareId) {
			console.log("got screen share ID!", request.screenshareId);
			window.postMessage({"sourceId": request.screenshareId }, "*")
		}
	})	

	respond("initiate.screenshare", function() {
		console.log("initiating screen sjhare!");
		chrome.runtime.sendMessage({screenshareRequest: true})
	})

	// window.addEventListener('message', function (event) {	
	//     // if invalid source
	//     if (event.source != window)
	//         return;
	            
	//     // if browser is asking whether extension is available
	//     if(event.data == 'are-you-there') {
	//         return window.postMessage('rtcmulticonnection-extension-loaded', '*');
	//     }

	//     // if it is something that need to be shared with background script
	//     if(event.data == 'get-sourceId') {
	//     	console.log("GETTING REQUEST FOR SOURCE ID!");
	//         // forward message to background script
	//         chrome.runtime.sendMessage({screenshareRequest: true})
	//         // chrome.runtime.sendMessage(event.data);
	//     }
	// }, false);
}