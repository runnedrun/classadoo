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
		if (host == "scratchpad.io" || path.indexOf("scratchpad.html") > -1) {
			$("#preview").css("top", "0px");
			$("#commandbar").css("top", "0px");
			$("#editor").css("top", "32px");
		} else {
			$("body").css({position: "relative", top: "0px"});
		}
	}

	function open() {
		if (host == "scratchpad.io" || path.indexOf("scratchpad.html") > -1) {
			$("#preview").css("top", "60px");
			$("#commandbar").css("top", "60px");
			$("#editor").css("top", "92px");
		} else {
			$("body").css({position: "relative", top: "60px"});
		}
	}
}
