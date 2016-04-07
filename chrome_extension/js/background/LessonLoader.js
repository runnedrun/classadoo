LessonLoader = function(lessonRequest, dataManager) {
	var self = this;	
	var m = dataManager;

	function loadAndSendLesson(lessonName, tabId) {		
		loadLesson(lessonName) 		
		.then(function(lessonText) {
			Message.send(tabId, {lesson: lessonText});
			// now that we know the lesson exists, set it in state			
			m.globalSet({ lessonName: lessonName });			
		})
		.fail(function(error) {		
			console.log("ERRRROR while loading lesson");						
			Display("Could not load lesson.");
		});
	}

	function loadLesson(lessonName) {
		return lessonRequest.get(Util.spaceToUnderscore(lessonName).toLowerCase() + ".js")
	}

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {			
			if (request.loadLesson) {
				console.log("loaindingnig lesson");
				loadAndSendLesson(request.loadLesson, sender.tab.id);				
			}
		}
	)
}