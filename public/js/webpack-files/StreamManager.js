StreamManager = function(displayState, classState) {
	this.start = function(studentId) {		
		classState.allClassUpdater().update({doScreenshare: false, screenshot: null});		

		var newScreenshareStudent = classState.studentUpdater(studentId)
		newScreenshareStudent.update({doScreenshare: 1000});		
	}

	this.stop = function(studentId) {
		var studentUpdater = classState.studentUpdater(studentId);

		studentUpdater.update({doScreenshare: false, screenshot: null})				
	}

	this.screenshot = function(studentId) {	
		var studentUpdater = classState.studentUpdater(studentId);	
		studentUpdater.update({doScreenshot: Date.now()})				
	}
}