LoginManager = function(dataManager) {
	var m = dataManager

	// for when someone logs in from the toolbar
	respond("login", function(data) {		
		m.setStudentName(data.studentName).then(function() {
			chrome.runtime.sendMessage({loadLesson: data.className});
		});				
	})	

	// if someone is already logged when the toolbar is loaded
	respond("className", checkIfLessonShouldLoad)

	function checkIfLessonShouldLoad(className) {		
		if (className && !m.tasks) {			
			chrome.runtime.sendMessage({loadLesson: className});
		}
	}
}