LessonManager = function(manager) {
	var self  = this	
	var m = manager;

	function checkForTaskCompletion() {
		var currentTask = m.tasks && m.tasks[m.taskIndex];
		if (currentTask && currentTask.check()) {
			// task is complete			
			completeTask(m.taskIndex)
		} 
	}

	function completeTask(taskIndex) {				
		if (taskIndex === (m.tasks.length - 1)) {
			// the lesson is complete
			fire("lesson.complete", {});
		} else if (!m.stopIndex || !((taskIndex + 1) >= m.stopIndex)) {			
			manager.setTaskIndex(taskIndex + 1)
		}	
	}	

	setInterval(checkForTaskCompletion, 500);
}