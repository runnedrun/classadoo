ScratchSyncManager = function($iframe, content, dataManager, loadedCallback) {
	var m = dataManager;
	var i = new IframeManager($iframe);
	var editor = $("#editor")				
	var preview;

	var CSS = {
		iframe: {	
			display: "none",
			"margin-left": "35px",
			"border": "none",
			width: "100%",
			height: "300px"
		},
		togglePreview: {
			width: "100%",
			background: "#CCCCCC",
			color: "black",
			"text-align": "center",
			"padding": "5px",
			cursor: "pointer",
			height: "20px"
		}
	}

	var togglePreviewButton = $('<div class="toggle-preview">Hide Preview</div>').css(CSS.togglePreview);	

	$iframe[0].onload = function() {    		
		i.setIframeContent(content);
		preview = i.$("#code-preview")		

		togglePreviewButton.click(function() {
			m.setScratchPreviewShown(!m.scratchPreviewShown);
		})		

	 	loadedCallback()
	}	
	
	if (editor.length) {
		editor.prepend($iframe.css(CSS.iframe));
		editor.prepend(togglePreviewButton);	
		$(".ace_gutter").css({"top": "20px"})
		$(".ace_scroller").css({"top": "20px"})
	} else {
		// create a fake preview in case the editor doesn't exist, we don't want to break 
		preview = $("#code-preview");
		loadedCallback();		
	}
	

	function togglePreview() {		
		if (m.scratchPreviewShown) {
			$iframe.show();	
			togglePreviewButton.html("Hide Preview");					
			$(".ace_gutter").css({"top": "320px"})
			$(".ace_scroller").css({"top": "320px"})
		} else {
			togglePreviewButton.html("Show Preview");
			$iframe.hide();
			$(".ace_gutter").css({"top": "20px"})
			$(".ace_scroller").css({"top": "20px"})
		}
	}

	function toggleScratchLock() {
		if (m.lockScratch) {
			 preview.css({"user-select": "none"});
		} else {
			 preview.css({"user-select": "inherit"});
		}
	}

	function syncDisplay() {		
		preview.text(m.syncedScratchInput);
	 	hljs.highlightBlock(preview[0]);
	 	m.setScratchPreviewShown(true);
	}	

	respond("syncedScratchInput", syncDisplay);	
	respond("scratchPreviewShown", togglePreview);
	respond("lockScratch", toggleScratchLock);
}