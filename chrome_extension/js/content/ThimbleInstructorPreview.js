ThimbleInstructorPreview = function() {
	var CSS = {
		instructorEditor: {
			height: "150px",
			background: "black",
		}
	}		

	function insertInstructorPreview() {		
		var instructorPreview = $("<div>test</div>").css(CSS.instructorEditor);	
		// liveEditorWrapper.css("top", liveEditorWrapper.position().top + 150);
		console.log("appending", $("#editor-holder"), location.href);
		instructorPreview.insertBefore($("#editor-holder"));		
	}

	function waitForLoaded() {
		if ($("#editor-holder").length) {			
			insertInstructorPreview();
		} else {
			setTimeout(waitForLoaded, 100);
		}
	}

	waitForLoaded();
}

$(function() {
	new ThimbleInstructorPreview()	
})
