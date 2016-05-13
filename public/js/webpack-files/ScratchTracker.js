var $ = require("jquery");

ScratchTracker = function(parentRef, callback) {	
	var scratches = {}
	var rtScratch = false;
	var self = this;

	function rtRef(docId) {
		return parentRef.child("students/" + docId + "/editor/code");		
	}

	function readOnlyRef(docId) {
		return parentRef.child("students/" + docId + "/read_only");		
	}

	this.trackRealtime = function(docId) {				
		rtScratch = docId
		rtRef(docId).on("value", function(snap) {
			scratches[docId] = snap.val();
			callback(scratches, self)
		});
	}

	this.setReadOnly = function(docId, isReadOnly) {
		readOnlyRef(docId).set(isReadOnly);
	}

	this.offRealtime = function(docId) {
		rtScratch = false;
		rtRef(docId).off("value");
	}

	this.set = function(docId, code) {
		rtRef(docId).set(code);
	}

	parentRef.child("snapshot").on("value", function(snap) {
		$.extend(scratches, snap.val())
		callback(scratches, self)
	})	
}