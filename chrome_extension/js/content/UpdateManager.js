var UpdateManager = function(dataManager) {
	var self = this;
	var m = dataManager;

	function connectToClass(className) {
		// a bunch of socket.io stuff here
		chrome.runtime.sendMessage({connectToClass: className}, function(connected) {
			console.log("connected", connected);
		});

		var currentTasks = [
			SampleTask1,
			SampleTask2
		]

		m.setLessonName("Lesson 1");
		m.setTasks(currentTasks);
		m.setTaskIndex(0);		
	}

	respond("className", connectToClass)
}