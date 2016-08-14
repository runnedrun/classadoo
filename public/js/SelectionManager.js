console.log()

SelectionManager = function(editor, ref) {
	ref.child("selections").on("child_added", highlightRange)

	function highlightRange(snapshot) {
		console.log("got child", snapshot);		
		var savedRange = snapshot.val();

		var range = editor.getSelectionRange();

		range.start = editor.session.doc.createAnchor(savedRange.start) 
		range.end = editor.session.doc.createAnchor(savedRange.end) 		

		console.log(savedRange, range)

		editor.session.addMarker(range, "clickable-text", "fullLine");	
	}
}