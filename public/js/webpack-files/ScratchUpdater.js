ScratchUpdater = function(name) {
	var self = this
	var scratchId = Util.createScratchId(name);
	var ref = new Firebase("scratchpad.firebaseio.com/" + scratchId);

	this.update = function(html) {
		ref.update({editor: {code: html}});
	}	
}

AllClassScratchUpdater = function(students, scratchTrackers) {
	this.append = function(html) {
		Object.keys(students).forEach(function(id) {
			var tracker = scratchTrackers[id];
			var student = students[id];
			if (tracker) {
				var currentScratch = tracker.input
				var ref = tracker.ref;
				var updated = html + "\n\n" + currentScratch

				ref.update({editor: {code: updated}});
			}			
		})
	}
}