ProgressBar = function(dataManager, parent, size) {
	var m = dataManager;
	var self = this 
	var progressBarContainer = $("<div class='progress-bar-container'>");
	var progressMeter = $("<div class='progress-meter'>");
	// var unit = $("<div class='progress-unit'>");
	var cursor = $("<div class='first-progress cursor'>");
	var completeOverlay = $("<div class='complete-overlay'>Great!</div>");
	var numberOfFlashes;

	progressBarContainer.css("width", size);

	progressBarContainer.append(progressMeter).append(cursor);
	parent.append(progressBarContainer).append(completeOverlay);

	function complete() {
		numberOfFlashes = 0;
		flash();
		function flash() {
			completeOverlay.show();
			setTimeout(function() {
				completeOverlay.hide()
				numberOfFlashes += 1

				if (numberOfFlashes < 0) {
					// do nothing, the flashing has been cancelled
				} else if (numberOfFlashes < 3) {
					setTimeout(flash, 400);
				} else {
					completeOverlay.show();
				}
			}, 400)
		}		
	}

	function clearProgress() {
		progressMeter.css({width: 0});
	}

	function setProgress(progress){
		var stop = (m.stopIndex || (m.tasks && m.tasks.length - 1))
		var current = m.taskIndex;

		if (stop && current) {
			// because we stop AFTER incrementing task index	
			var goal = stop + 1		
			var width = (current / goal) * 100
			var cursorWidth = 1/goal * 100;			

			progressMeter.css({width: width + "%"}); 

			if (width == 100) {
				cursor.css({visibility: "hidden"});
			} else {
				cursor.css({width: cursorWidth, visibility: "shown"});
			}			
		}		
	}

	respond("stopIndex", setProgress);
	respond("tasks", setProgress);
	respond("taskIndex", setProgress);
	// respond("task.complete", complete)
}