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
		return lessonRequest.get(Util.spaceToUnderscore(lessonName) + ".js").then(function(resp) {
			return resp
		})
	}

	chrome.runtime.onMessage.addListener(
		function(request, sender, sendResponse) {			
			if (request.loadLesson) {
				loadAndSendLesson(request.loadLesson, sender.tab.id);				
			}
		}
	)
}