LessonManager = function(manager) {
	var self  = this	
	var m = manager;
	var paused = false;	

	var hintPrompted = false;

	function promptHint()  {
		if (!hintPrompted) {
			m.setHintAllowed(true);
			m.setPromptHint(true);
			hintPrompted = true
		}
	}	

	function checkForTaskCompletion() {
		if (!paused && currentTask()) {			
			var atCorrectLocation = RegExp(currentTask().location).test(location.href);			
			if (atCorrectLocation && currentTask().check()) {				
				// task is complete						
				completeTask(m.taskIndex);
				fire("task.complete");
			}	

			if ((Date.now() - m.startTime) > 45000) {
				promptHint();
			} else if ((Date.now() - m.startTime) > 30000) {
				m.setHintAllowed(true);	
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
		console.log("stop", m.stopIndex);
		if (m.tasks && (typeof m.taskIndex !== undefined) && m.taskIndex !== null) {
			if (m.taskIndex > (m.tasks.length - 1)) {
				// the lesson is complete
				fire("lesson.complete", {});			
				m.setHintAllowed(false);
				m.setPromptHint(false);				
				m.setShowHint(false)
				pause()
			} else if ((typeof m.stopIndex !== undefined) && (m.taskIndex > m.stopIndex)) {						
				console.log("stop index hit");
				m.setHintAllowed(false);
				m.setPromptHint(false);				
				m.setShowHint(false)
				pause()
			} else {
				console.log("setting the new task!");
				paused = false;
				setStartTime();
				currentTask().start && currentTask().start();							
				fire("task.text", currentTask().description);
				m.setPromptHint(false); 	
				m.setHintAllowed(false); 	
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

	respond("tasks", newTask);
	respond("taskIndex", newTask);
	respond("stopIndex", newTask);

	setInterval(checkForTaskCompletion, 500);
}