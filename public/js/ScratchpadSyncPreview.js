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
	var togglePreviewEl = $("#toggle-sync-preview")
	var liveEditorEl = $(liveEditor.container);	
	var topBarHeight = 52;

	togglePreviewEl.click(togglePreview);

	this.editor = previewEditor;

	function nonEditorHeight() {
		var classadooToolbar = $(".classadoo-toolbar");
		var classadooToolbarHeight = classadooToolbar.is(":visible") ? $(".classadoo-toolbar").height() : 0;		
		return (previewShown ? 300 : 0) + topBarHeight + classadooToolbarHeight;
	}

	function togglePreview() {
		var previewIframe = $("#sync-preview-preview");
		var livePreview = $("#preview");

		if (previewShown) {
			previewEl.hide();		
			previewIframe.hide();
			togglePreviewEl.text("Show preview");			
			previewShown = false;			
			livePreview.css({height: "100%", top: 0});			
			resizeLiveEditor();						
		} else {			
			previewEl.show();			
			previewIframe.show();		
			togglePreviewEl.text("Hide preview");	
			previewShown = true;

			var iframeHeight = window.innerHeight - nonEditorHeight();
			
			livePreview.css({height: iframeHeight, top:  nonEditorHeight()});			
			resizeLiveEditor();			
		}
	}	

	function resize() {
		liveEditor.resize();
		previewEditor.resize();
	}



	function resizeLiveEditor(){		
		var editorHeight = window.innerHeight - nonEditorHeight();
		console.log("changing editory heigh", editorHeight);
		liveEditorEl.css({"top": nonEditorHeight(), height: editorHeight});				
		setTimeout(resize, 200);		
	}
}