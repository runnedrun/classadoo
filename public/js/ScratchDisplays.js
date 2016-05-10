$(function() {
	var ref = new Firebase('https://classadoo-scratch.firebaseio.com/snapshot')

	var students = {}

	ref.on("child_added", function(child) {
		trackSnapshot(child.key());		
	})	
})

function rtRef(docId) {
	return new Firebase("https://classadoo-scratch.firebaseio.com/students/" + docId + "/editor/code");		
}

function snapshotRef(docId) {
	return new Firebase("https://classadoo-scratch.firebaseio.com/snapshot/" + docId);		
}

function trackRealTime(docId) {
	snapshotRef(docId).off("value");
	rtRef(docId).on("value", updateDisplay.bind({}, docId));
}

function trackSnapshot(docId) {	
	rtRef(docId).off("value");
	snapshotRef(docId).on("value", updateDisplay.bind({}, docId));				
}

function makeDisplayEditableAndRealtime(docId, static, editable) {
	return function(e) {
		console.log("back to real time")		

		static.hide();
		editable.show();
		// editable.focus();

		trackRealTime(docId);
	}
}

function makeDisplayStaticAndSnapshot(docId, static, editable) {
	return function(e) {
		console.log("back to snapshot")
		
		static.show();
		editable.hide();

		trackSnapshot(docId)
	}
}

function updateDisplay(docId, snap) {
	var existingDisplay = $("#" + docId)						

	var newCode = snap.val();
	
	if (existingDisplay.length) {
		existingDisplay.find("code").text(newCode)

		existingDisplay.find(".editable-display:not(:visible)").text(newCode)

		hljs.highlightBlock(existingDisplay.find("pre")[0]);
	} else {
		var newDisplay = $("<div id='" + docId + "' class='student-display'>")		

		var title = $("<div>").html(docId).addClass("title");

		var preview = $("<pre></pre>")
		var code = $("<code></code>")

		var editableDisplay = $("<pre class='editable-display' contentEditable='true'>")
							
		code.text(newCode)
		editableDisplay.text(newCode);

		newDisplay.append(title).append(preview.append(code)).append(editableDisplay);
		$(".display-container").append(newDisplay)	

		hljs.highlightBlock(preview[0]);

		preview.click(makeDisplayEditableAndRealtime(docId, preview, editableDisplay));
		editableDisplay.blur(makeDisplayStaticAndSnapshot(docId, preview, editableDisplay));

		editableDisplay.keydown(function(e) {
			// escape exits editable mode
			if (e.keyCode == 27) {
				console.log("making it static")
				makeDisplayStaticAndSnapshot(docId, preview, editableDisplay)()
			} else if (e.keyCode == 9) {
				console.log("rpevening tab")				
				return false;
			} 
		})

		editableDisplay.keyup(function(e) {			
			console.log("setitng!", editableDisplay[0].innerText);				
			rtRef(docId).set(editableDisplay[0].innerText);			
		});
	}							
}
