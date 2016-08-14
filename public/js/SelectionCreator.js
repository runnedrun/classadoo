SelectionCreator = function(editor, ref) {
	console.log("E", editor)

	var highlightKeyBinding = KeyBinding.keydown(KeyCode.tilde, $(document), function(e) {		
		var highlightedRange = editor.getSelectionRange();		
			
		highlightedRange.start = editor.session.doc.createAnchor(highlightedRange.start) 
		highlightedRange.end = editor.session.doc.createAnchor(highlightedRange.end) 		

		console.log(highlightedRange);

		 editor.session.addMarker(highlightedRange,"clickable-text", "fullLine");
		 e.preventDefault();
		 return false;
	})
}