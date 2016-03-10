LessonManager = function(manager) {
	var self  = this	
	var m = manager;	

	function checkForTaskCompletion() {		
		if (currentTask() && currentTask().check()) {
			// task is complete			
			completeTask(m.taskIndex)
		}
	}

	function completeTask(taskIndex) {				
		if (taskIndex === (m.tasks.length - 1)) {
			// the lesson is complete
			fire("lesson.complete", {});
		} else if (!m.stopIndex || !((taskIndex + 1) >= m.stopIndex)) {			
			m.setTaskIndex(taskIndex + 1);
		}	
	}	

	function currentTask() {
		return m.tasks && m.tasks[m.taskIndex || 0];
	}

	function setStartTime() {
		if (currentTask()) {
			m.setStartTime(Date.now());
		}
	}

	respond("tasks", setStartTime);
	respond("taskIndex", setStartTime);

	setInterval(checkForTaskCompletion, 500);
}