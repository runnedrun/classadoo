LessonManager = function(manager) {
	var self  = this	
	var m = manager;
	var paused = false;	

	function checkForTaskCompletion() {
		if (!paused && currentTask()) {			
			var atCorrectLocation = RegExp(currentTask().location).test(location.href);			
			if (atCorrectLocation && currentTask().check()) {				
				// task is complete						
				completeTask(m.taskIndex);
				fire("task.complete");
			}	
		}
	}

	function pause() {
		if (!paused) {
			paused = true;
			fire("task.text", "No more tasks for now.");	
		}		
	}

	function completeTask(taskIndex) {				
		m.setTaskIndex(taskIndex + 1);								
	}		

	function newTask() {				
		if (m.tasks && m.taskIndex !== undefined && m.taskIndex !== null) {
			if (m.taskIndex > (m.tasks.length - 1)) {
				// the lesson is complete
				fire("lesson.complete", {});			
				pause()
			} else if (m.stopIndex && (m.taskIndex > m.stopIndex)) {						
				console.log("stop index hit");
				pause()
			} else {
				console.log("setting the new task!");
				paused = false;
				fire("task.text", currentTask().description); 	
			}			
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

	respond("stopIndex", newTask);

	setInterval(checkForTaskCompletion, 500);
}