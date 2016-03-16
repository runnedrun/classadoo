LessonLoader = function(appRequest, lessonRequest, env, dataManager) {
	var self = this;	
	var m = dataManager;

	function loadLessonForClass(className) {
		loadCurrentLessonName(className)
		.then(function(resp) {			
			return loadLesson(resp.class.currentLesson); 
		})		
		.then(function(lessonObj) {
			sendLessonToFrontend(lessonObj.text);

			// now that we know the lesson exists, set it in state
			m.globalSetProps({ lessonName: lessonObj.lessonName, className: className });			
		})
		.fail(function(error) {								
			Display("Could not load class or lesson.");
		});
	}

	function loadLesson(lessonName) {
		return lessonRequest.get("/lib/" + env + "/" + Util.spaceToUnderscore(lessonName) + ".js").then(function(resp) {
			return {text: resp, lessonName: lessonName}
		})
	}

	function loadCurrentLessonName(className) {
		return appRequest.get("/class_by_name?name="+className);
	}

	function sendLessonToFrontend(lessonText) {				
		Message.sendToAllTabs({lesson: lessonText});
	}

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {
			if (request.loadLesson) {
				loadLessonForClass(request.loadLesson);				
			}
		}
	)
}