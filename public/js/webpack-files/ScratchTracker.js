var $ = require("jquery");

ScratchTracker = function(parentRef, callback) {	
	var newChats = {};

	var scratches = {};
	var chats = {};
	var idleTimes = {};
	var rtScratch = false;
	var self = this;

	var rtRefs = {};
	var readOnlyRefs = {};
	var chatRefs = {};

	function rtRef(docId) {
		var ref = rtRefs[docId] || parentRef.child("students/" + docId + "/editor/code");		
		rtRefs[docId] = ref;
		return ref
	}

	function readOnlyRef(docId) {
		var ref = readOnlyRefs[docId] || parentRef.child("students/" + docId + "/read_only");		
		readOnlyRefs[docId] = ref;
		return ref;
	}

	function chatRef(docId) {
		chatRefs[docId] = chatRefs[docId] || parentRef.child("students/" + docId + "/chat");		
		return chatRefs[docId];
	}	

	function refreshDisplays() {
		callback(scratches, chats, idleTimes, newChats, self);
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

	this.sendChat = function(docId, message) {
      chatRef(docId).push({text: message, isStudent: false, timestamp: Firebase.ServerValue.TIMESTAMP});
	}

	this.readChat = function(docId) {
		// newChats[docId] = false;
		// refreshDisplays();
	}

	parentRef.child("snapshot").on("value", function(snap) {		
		var snapshot = snap.val() || {};

		$.extend(scratches, snapshot.code)
		$.extend(idleTimes, snapshot.idleTimes)

		Object.keys(scratches).forEach(function(docId) {
			if (!chatRefs[docId]) {
				chatRef(docId).on("value", function(snapshot) {					
					chats[docId] = snapshot.val();
					// newChats[docId] = true;
					refreshDisplays()
				})
			} 
		})

		refreshDisplays()
	})	
}