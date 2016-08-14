SelectionCopier = function(instructorEditor, liveEditor, $instructorEditor, $liveEditor) {
	$instructorEditor.click(checkIfHighlightClickedAndCopy)	

	function checkIfHighlightClickedAndCopy(e) {
		var cursor = instructorEditor.selection.getCursor()
		var session = instructorEditor.getSession();
		var instructorDoc = session.getDocument();
		var markers = session.getMarkers();


		console.log("markers", markers);

		var textToCopy;
		Object.keys(markers).forEach(function(markerId) {
			var marker = markers[markerId];			

			if (marker.range && cursorInMarker(cursor, marker) && !isEmptyMarker(marker)) {				
				textToCopy = instructorDoc.getTextRange(marker.range);
				return false;
			}
		})

		console.log("coping", textToCopy);

		if (textToCopy) {
			var liveDoc = liveEditor.getSession().getDocument();
			var docLength = liveDoc.getLength();			
			liveDoc.insertNewLine(docLength);
			liveDoc.insert({row: docLength + 1, column: 0}, textToCopy);
			liveEditor.focus();
			liveEditor.gotoLine(docLength + 1);
		}
 	}

 	function isEmptyMarker(marker) {
   		return (marker.range.start.row == marker.range.end.row) && (marker.range.start.column == marker.range.end.column)
  	}

	function cursorInMarker(cursor, marker) {
		return (cursor.row >= marker.range.start.row) &&
			(cursor.row <= marker.range.end.row) &&
			(cursor.column >= marker.range.start.column) &&
			(cursor.column <= marker.range.end.column) 

	}
}