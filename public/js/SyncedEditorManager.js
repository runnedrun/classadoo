SyncedEditorManager = function (editor, $editorEl, getPreviewContent, previewFrame, editorRef, noInboundUpdates) {
  var self = this

	var intro = ""

	// script locations	
  var firebase = '<script src="https://cdn.firebase.com/js/client/2.4.2/firebase.js"></script>'
  var jquery = '<script src="https://code.jquery.com/jquery-2.2.3.min.js"></script>'  
  var currentlyInsertedJs = "";

	 // On data change, re-render the code in the iframe.
  editor.on('input', function(e) {       
    refreshPage($("#preview")[0], editor);  
  });

	function refreshPage(editor) { 
		if (previewFrame.contentWindow) {
			var iframedoc = previewFrame.contentWindow.document   
			if (iframedoc.body) {      
			  var code = getPreviewContent();      

			  iframedoc.body.innerHTML =  jquery + "\n\n" + firebase + "\n\n" + code;

			  autoRefreshJsIfNecessary(code);      
			}          
		}    
  }

  function autoRefreshJsIfNecessary(code) {    
    var hiddenFrame = $("#hidden-frame")[0];

    var idoc = $(hiddenFrame.contentWindow.document);
    idoc[0].body.innerHTML = code;
    var scripts = idoc.find("script");

    var scriptsAreClean = true;
    var scriptString = scripts.map(function(i, el) {
      if (el) {
        var code = el.innerHTML;

        try {
          eval(code); 
          return code
        } catch (e) {
          console.log("error in JS, not refreshing", e);            
          scriptsAreClean = false
          return false;
        }            
      }            
    }).toArray().join("")    

    if (scriptsAreClean && (currentlyInsertedJs != scriptString)) {      
      currentlyInsertedJs = scriptString; 

      refreshPageWithJs();
    } 
  }

  function refreshPageWithJs() {  
    var $iframe = $(previewFrame);

    var newFrame = $("<iframe id='" + previewFrame.id + "'>");

    var frameHeight = $iframe.height();
    var frameWidth = $iframe.width();
    var offset  = $iframe.offset()
    var frameTop  = offset.top;
    var frameLeft  = offset.left;
    var frameTop  = offset.top;    

    newFrame.css({"height": frameHeight, width: frameWidth, top: frameTop, left: frameLeft});
    var code = getPreviewContent();

    var html = jquery + "\n\n" + firebase + "\n\n" + code;
    var manager = new IframeManager(newFrame);    

    $iframe.replaceWith(newFrame);    
    manager.setIframeContent(html);      
    previewFrame = newFrame[0]; 
  }

  self.refreshJs = refreshPageWithJs;

  function isEmptyMarker(marker) {
    return (marker.range.start.row == marker.range.end.row) && (marker.range.start.column == marker.range.end.column)
  }

  function persistCode() {    	
		// Get cursor position
    var startrow = editor.selection.getRange().start.row;
    var startcolumn = editor.selection.getRange().start.column;
    var endrow = editor.selection.getRange().end.row;
    var endcolumn = editor.selection.getRange().end.column;

    var markers = editor.getSession().getMarkers();

    var selections = {};

    // we only add selections if we're not reading inbound updates, otherwise infinite loop
    if (noInboundUpdates) {      
      Object.keys(markers).forEach(function(markerId) {
        var marker = markers[markerId]     

        if (marker.range && !isEmptyMarker(marker) && marker.clazz == "clickable-text") {
          selections[markerId] = {start: {row: marker.range.start.row, column: marker.range.start.column}, end: {row: marker.range.end.row, column: marker.range.end.column}};
        } 
      })
    }    
    
    // If nothing is highlighted, ship contents of editor and cursor data to Firebase    
    if (startrow == endrow && startcolumn == endcolumn) {    	
      editorRef.set({code: editor.getValue(), cursor: editor.selection.getCursor(), lastTyped: Date.now(), selections: selections});
    }        
  }

  function updateEditor(dataSnapshot) {
    console.log("updating")    
  	editor.setValue(dataSnapshot.child('code').val() || "");      
    var selections = dataSnapshot.child("selections").val();
    if (selections) {
      addSelectionMarkers(selections);
    }    
    
    // Clear selection and move cursor to where it needs to be
    editor.clearSelection();
    if (dataSnapshot.child('cursor').val() === null) {
      editor.moveCursorToPosition({column: 0, row: 0});  
    } else {
      editor.moveCursorToPosition(dataSnapshot.child('cursor').val());  
    }    
  }

  function clearCurrentMarkers() {
    var markers = editor.getSession().getMarkers();    
    Object.keys(markers).forEach(function(markerId) {
      editor.getSession().removeMarker(markers[markerId]);
    })
  }

  function addSelectionMarkers(selections) {    
    clearCurrentMarkers();

    Object.keys(selections).forEach(function(selectionId) {
      var savedRange = selections[selectionId];
      console.log("saved range", savedRange)

      var range = editor.getSelectionRange();

      range.start = editor.session.doc.createAnchor(savedRange.start) 
      range.end =  editor.session.doc.createAnchor(savedRange.end) ;

      console.log("heres the rnag", range);

      editor.session.addMarker(range, "clickable-text", "text");  
    })    
  }

  // firebase listening

  editorRef.once('value', function(dataSnapshot) {  	
    if (dataSnapshot.val() === null ) {
      editor.setValue(intro);
    } else {
      updateEditor(dataSnapshot)
    }
  })
  
  // When code changes, put it into the editor
  if (!noInboundUpdates) {
    editorRef.on('value', updateEditor);    
  }
  
  if (!editor.getReadOnly()) {
  	// On keyup, save the code and cursor data to firebase
  	$editorEl.keyup(persistCode);
  }  

  // read only mode stuff 
  // var readOnlyRef = editorRef.child('read_only');

  // readOnlyRef.on("value", function(snapshot) {
  //   var isReadOnly = snapshot.val();    
  //   editor.setReadOnly(isReadOnly);    
  // })
}