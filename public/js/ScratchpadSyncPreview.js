ScratchpadSyncPreview = function(liveEditor, ref) {	
	var previewShown = false;
	this.merged = true;
	var self = this;

	var previewEditor = ace.edit("sync-preview");
	previewEditor.setTheme("ace/theme/tomorrow_night_eighties");
	previewEditor.getSession().setMode("ace/mode/html");
	previewEditor.setHighlightActiveLine(false);
	previewEditor.getSession().setTabSize(2);	
	previewEditor.commands.removeCommand('gotoline');
	previewEditor.setShowPrintMargin(false);
	previewEditor.setReadOnly(true)

	this.editor = previewEditor;

	var previewEl = $("#sync-preview")	
	var togglePreviewEl = $("#toggle-sync-preview");
	var toggleMergeEl = $(".merge-button");
	var liveEditorEl = $(liveEditor.container);	
	var topBarHeight = 52;

	togglePreviewEl.click(togglePreview);
	toggleMergeEl.click(toggleMerge);

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
			if (!self.merged) {				
				showPreviewFrame();
			}			

			previewEl.show();			
			togglePreviewEl.text("Hide preview");	
			previewShown = true;			
			resizeLiveEditor();			
		}
	}	

	function resize() {
		liveEditor.resize();
		previewEditor.resize();
	}

	function showPreviewFrame() {
		var previewIframe = $("#sync-preview-preview");
		var livePreview = $("#preview");

		previewIframe.show();		
		var iframeHeight = window.innerHeight - nonEditorHeight();	
		livePreview.css({height: iframeHeight, top:  nonEditorHeight()});			
	}

	function hidePreviewFrame() {
		var previewIframe = $("#sync-preview-preview");
		var livePreview = $("#preview");

		previewIframe.hide();
		livePreview.css({height: "100%", top: 0});			
	}

	function toggleMerge() {
		var previewIframe = $("#sync-preview-preview");
		var livePreview = $("#preview");

		if (!self.merged) {			
			hidePreviewFrame();
			toggleMergeEl.html("Unmerge");
			merged = true;
		} else {
			showPreviewFrame();
			toggleMergeEl.html("Merge");
			merged = false;
		}		
	}

	function resizeLiveEditor(){		
		var editorHeight = window.innerHeight - nonEditorHeight();
		console.log("changing editory heigh", editorHeight);
		liveEditorEl.css({"top": nonEditorHeight(), height: editorHeight});				
		setTimeout(resize, 200);		
	}
}