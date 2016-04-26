XRayManager = function(dataManager) {
	var m = dataManager

	respond("xray", function(shouldInsert) {		
		if (shouldInsert) {			
			console.log("INSERTING SCRIPT");
			insertGoggles();			
			m.setXray(false);
		}		
	})

	function insertGoggles() {
		var script = document.createElement('script');
		script.src='https://goggles.mozilla.org'+'/webxray.js';
		script.className='webxray';
		script.setAttribute('data-lang','en-US');
		script.setAttribute('data-baseuri','https://goggles.mozilla.org');
		document.body.appendChild(script);
	}
}