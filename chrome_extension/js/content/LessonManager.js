LessonManager = function(manager) {
	var self  = this	
	var m = manager;
	var paused = false;	

	function checkForTaskCompletion() {		
		if (currentTask() && currentTask().check()) {
			// task is complete						
			completeTask(m.taskIndex);
		}
	}

	function pause() {
		if (!paused) {
			paused = true;
			fire("task.text", "No more tasks for now.");	
		}		
	}

	function completeTask(taskIndex) {				
		if (taskIndex === (m.tasks.length - 1)) {
			// the lesson is complete
			fire("lesson.complete", {});			
			pause()
		} else if (!m.stopIndex || !((taskIndex + 1) >= m.stopIndex)) {						
			m.setTaskIndex(taskIndex + 1);
		} else {
			pause()
		}
	}		

	function newTask(taskIndex) {
		if (currentTask()) {
			console.log("setting the new task!");
			paused = false;
			fire("task.text", currentTask().description); 
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
	respond("tasks", newTask);

	respond("taskIndex", setStartTime);
	respond("taskIndex", newTask);

	setInterval(checkForTaskCompletion, 500);
}