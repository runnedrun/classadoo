ScreenshotManager = function(dataManager) {
	var m = dataManager;
	var stream = false;

	function capture() {
		var deferred  = new $.Deferred();
		chrome.tabs.captureVisibleTab(null, {}, function (image) {   			
   			deferred.resolve(image);
		});	

		return deferred.promise();
	}	

	function screenshot() {
		capture().then(function(dataUrl) {
			console.log("Actuall captured")
			m.globalSet({doScreenshot: false, screenshot: {img: dataUrl, timestamp: Firebase.ServerValue.TIMESTAMP }});
		})					
	}

	function streamCapture() {
		var speed = Number(m.globalGet().doScreenshare)
		console.log("maybe captureing", speed);
		if (speed) {
			console.log("actuing captureing")
			screenshot()
			setTimeout(streamCapture, speed);
		}						
	}	

	m.listenOnGlobalProp("doScreenshot", function(shouldCapture) {
		if (shouldCapture) {
			screenshot()
		} 		
	})

	m.listenOnGlobalProp("doScreenshare", streamCapture);
}