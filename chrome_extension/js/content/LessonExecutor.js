LessonExecutor = function(dataManager) {	
	var m = dataManager;

	chrome.runtime.onMessage.addListener(function(request) {				
		if (request.lesson) {									
			execute(request.lesson);
		}
	})

	function execute(lessonText) {
		eval(lessonText);
		// this exec will set the var __importedLesson		
		m.setTasks(__importedLesson);
		!m.taskIndex && m.setTaskIndex(0);
	}
}