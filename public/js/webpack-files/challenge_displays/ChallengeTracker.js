var $ = require("jquery");

ChallengeTracker = function(parentRef, callback) {	
	var challenges = {};
	var self = this;		
	var ref = parentRef.child("submissions");

	ref.on("child_added", function(snap) {		
		var docId = snap.key();
		
		var challenge = snap.val() || {};

		challenges[docId] = challenge;		
		
		ref.child(docId).on("value", function(snapshot) {								
			console.log("getting val", snapshot.val())
			challenges[docId] = snapshot.val();			
			callback(challenges, self);
		}) 		

		callback(challenges, self);
	})	
}