ScratchpadSyncPreview = function(liveEditor, ref) {	
	var previewShown = false;

	var previewEditor = ace.edit("sync-preview");
	previewEditor.setTheme("ace/theme/tomorrow_night_eighties");
	previewEditor.getSession().setMode("ace/mode/html");
	previewEditor.setHighlightActiveLine(false);
	previewEditor.getSession().setTabSize(2);	
	previewEditor.commands.removeCommand('gotoline');
	previewEditor.setShowPrintMargin(false);
	previewEditor.setReadOnly(true)

	var previewEl = $("#sync-preview")
	var previewIframe = $("#sync-preview-preview")
	var togglePreviewEl = $("#toggle-sync-preview")
	var liveEditorEl = $(liveEditor.container);
	var livePreview = $("#preview")
	var topBarHeight = 52;

	togglePreviewEl.click(togglePreview);

	this.editor = previewEditor;

	function nonEditorHeight() {
		var classadooToolbar = $(".classadoo-toolbar");

		var classadooToolbarHeight = classadooToolbar.is(":visible") ? $(".classadoo-toolbar").height() : 0;
		console.log("heihg", classadooToolbarHeight);
		return (previewShown ? 300 : 0) + topBarHeight + classadooToolbarHeight;
	}

	function togglePreview() {
		if (previewShown) {
			previewEl.hide();		

			previewIframe.hide();
			togglePreviewEl.text("Show preview");			
			previewShown = false;
			// liveEditorEl.css({"top": nonEditorHeight()});			
			resizeLiveEditor();			
			// setTimeout(resize, 200);
		} else {
			previewEl.show();
			console.log("asd", previewIframe)
			previewIframe.show();		
			togglePreviewEl.text("Hide preview");	
			previewShown = true;
			// liveEditorEl.css({"top": nonEditorHeight()});
			resizeLiveEditor();
			// setTimeout(resize, 200);		
		}
	}	

	function resize() {
		liveEditor.resize();
		previewEditor.resize();
	}

	function resizeLiveEditor(){		
		var editorHeight = document.body.scrollHeight - nonEditorHeight();

		console.log("changing editory heigh", editorHeight);
		liveEditorEl.css({"top": nonEditorHeight(), height: editorHeight});				
		setTimeout(resize, 200);		
	}
}