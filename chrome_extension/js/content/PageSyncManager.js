PageSyncManager = function(dataManager) {
	var m = dataManager;

	respond("syncClick", syncClick)
	respond("syncHover", syncHover)
	respond("syncHighlight", syncHighlight)

	function getElFromIndex(index) {
		return $(document.getElementsByTagName("*")[index]);
	}

	function syncClick() {
		var elIndex = m.syncClick
		if (elIndex) {
			var element = getElFromIndex(elIndex);
			element.click()
			m.setSyncClick(false);
		}
	}

	function syncHover() {
		var elIndex = m.syncHover
		if (elIndex) {			
			var element = getElFromIndex(elIndex);

			e = $.Event('mousemove');

			// set coordinates
			var offset = element.offset();
			e.pageX = offset.left;
			e.pageY = offset.top;
			e.clientX = offset.left;
			e.clientY = offset.top;
			
			$(document).trigger(e);
			m.setSyncHover(false);
		}
	}

	function syncHighlight() { 		
		var elIndex = m.syncHighlight;
		if (elIndex) {
			var element = getElFromIndex(elIndex);
			highlight(element) 
			m.setSyncHighlight(false);
		}
	}

	function highlight(element) {
		var prev = element.css("background");
		element.css({"background": "rgba(74, 116, 19, .5)"});
		element[0].addEventListener("click", function() {
			console.log("hereher");
			element.css({"background": prev});
		}, true)
		element[0].scrollIntoView();
	}

	document.addEventListener("click", backSyncClick, true);

	function backSyncClick(e) {
		var index = Array.prototype.indexOf.call(document.getElementsByTagName("*"), e.target);		
		m.setBackSyncClick({index: index, x: e.pageX, y: e.pageY, timestamp: Date.now()})
	}
}