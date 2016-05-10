var toolbarOpened = false;

function ModifyPageForToolbar(toolbarOpen) {
	var host = location.host;
	var path = location.pathname;
	if (toolbarOpen) {
		open();
		toolbarOpened = true;
	} else if(toolbarOpened) {
		 close();
	} 

	function close() {
		if (host == "scratchpad.io") {
			var preview = $("#preview");			
			preview.css({"top": "0px", height: "100%"});

			$("#preview").css("top", "0px");
			$("#commandbar").css("top", "0px");
			$("#editor").css("top", "32px");
		} else if (path.indexOf("scratchpad") > -1) {
			var preview = $("#preview");			
			preview.css({"top": "0px", height: "100%"});

			$("#toggle-sync-preview").css("top", "32px");
			$("#sync-preview").css("top", "52px");
			$("#commandbar").css("top", "0px");			

			if ($("#sync-preview").is(":visible")) {
				$("#editor").css("top", "352px");
			} else {
				$("#editor").css("top", "52px");
			}
		} else {
			$("body").css({position: "relative", top: "0px"});
		}
	}

	function open() {
		if (host == "scratchpad.io") {
			var preview = $("#preview");			
			preview.css({top: "60px", height: preview.height() - 60});

			$("#commandbar").css("top", "60px");
			$("#editor").css("top", "92px");
		} else if (path.indexOf("scratchpad") > -1) { 
			var preview = $("#preview");			
			preview.css({top: "60px", height: preview.height() - 60});
			
			$("#toggle-sync-preview").css("top", "92px");
			$("#sync-preview").css("top", "112px");
			$("#commandbar").css("top", "60px");
			
			if ($("#sync-preview").is(":visible")) {
				$("#editor").css("top", "412px");
			} else {
				$("#editor").css("top", "112px");
			}			
		} else {
			$("body").css({position: "relative", top: "60px"});
		}
	}
}
