LoginManager = function(dataManager) {
	var m = dataManager

	// for when someone logs in from the toolbar
	respond("login", function(data) {		
		m.setStudentName(data.studentName).then(function() {
			chrome.runtime.sendMessage({loadLesson: data.lessonName});
		});				
	})	

	// if someone is already logged when the toolbar is loaded
	respond("lessonName", checkIfLessonShouldLoad)
	respond("toolbarOpen", checkIfLessonShouldLoad)

	function checkIfLessonShouldLoad() {		
		console.log("checking if lesson should load", m.lessonName, m.tasks);
		if (m.lessonName && !m.tasks && m.toolbarOpen) {									
			chrome.runtime.sendMessage({loadLesson: m.lessonName});
		}
	}
}