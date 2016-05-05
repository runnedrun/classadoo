$(function() {
	var ref = new Firebase('https://classadoo-scratch.firebaseio.com/students')

	var students = {}

	ref.on("child_added", function(child) {
		ref.child(child.key()).on("value", function(snap) {
			var existingDisplay = $("#" + snap.key())			

			if (snap.val().editor) {
				if (existingDisplay.length) {
					existingDisplay.text(snap.val().editor.code)
					hljs.highlightBlock(existingDisplay[0]);
				} else {
					var newDisplay = $("<div id='" + snap.key() + "' class='student-display'>")
					newDisplay.click(function() {
						window.open("http://www.classadoo.com/scratchpad.html#" + snap.key());
					})

					var title = $("<div>").html(snap.key()).addClass("title");

					var preview = $("<pre></pre>")
					var code = $("<code></code>")
										
					code.text(snap.val().editor.code)

					newDisplay.append(title).append(preview.append(code));
					$(".display-container").append(newDisplay)	

					hljs.highlightBlock(preview[0]);
				}				
			}			
		})
	})	


})
