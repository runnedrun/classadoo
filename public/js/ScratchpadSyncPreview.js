ScratchpadSyncPreview = function(instructorEditor, liveEditor, $instructorEditor, $liveEditor, instructorPreview, livePreview) {	
	var previewShown = false;
	this.merged = true;
	var self = this;

	this.editor = instructorEditor;
	
	var toggleInstructorDisplayEl = $("#toggle-instructor-display");
	var toggleMergeEl = $(".merge-button");
	var liveEditorEl = $(liveEditor.container);	
	var topBarHeight = 52;

	toggleInstructorDisplayEl.click(toggleInstructorDisplay);
	toggleMergeEl.click(toggleMerge);

	this.editor = instructorEditor;

	function nonEditorHeight() {
		var classadooToolbar = $(".classadoo-toolbar");
		var classadooToolbarHeight = classadooToolbar.is(":visible") ? $(".classadoo-toolbar").height() : 0;		
		return (previewShown ? 300 : 0) + topBarHeight + classadooToolbarHeight;
	}

	function toggleInstructorDisplay() {
		if (previewShown) {
			$instructorEditor.hide();		
			instructorPreview.hide();
			toggleInstructorDisplayEl.text("Show preview");			
			previewShown = false;			
			livePreview.css({height: "100%", top: 0});			
			resizeLiveEditor();						
		} else {		
			if (!self.merged) {				
				showPreviewFrame();
			}			

			$instructorEditor.show();
			instructorPreview.show();			
			toggleInstructorDisplayEl.text("Hide preview");	
			previewShown = true;			
			resizeLiveEditor();			
		}
	}	

	function resize() {
		liveEditor.resize();
		instructorEditor.resize();
	}

	function showPreviewFrame() {
		instructorPreview.show();		
		var iframeHeight = window.innerHeight - nonEditorHeight();	
		livePreview.css({height: iframeHeight, top:  nonEditorHeight()});			
	}

	function hidePreviewFrame() {		
		instructorPreview.hide();
		livePreview.css({height: "100%", top: 0});			
	}

	function toggleMerge() {	
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

	toggleInstructorDisplay();
}