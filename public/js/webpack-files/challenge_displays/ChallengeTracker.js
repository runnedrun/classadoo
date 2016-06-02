var $ = require("jquery");

ChallengeTracker = function(parentRef, callback) {	
	var userChallenges = {};
	var self = this;		
	var ref = parentRef.child("submissions");

	function updateChallenge(userId, snapshot) {		
		var challengeNumber = snapshot.key(); 		

		var challenge = snapshot.val();

		var userObject = userChallenges[userId] || {}
		userObject[challengeNumber] = snapshot.val();			

		callback(userChallenges, self);
	}

	ref.on("child_added", function(snap) {		
		var userId = snap.key();
		
		var challenge = snap.val() || {};

		console.log("here", challenge)
		userChallenges[userId] = challenge;		
		
		ref.child(userId).on("child_added", function(snap) {								
			updateChallenge(userId, snap)
			snap.ref().on("value", updateChallenge.bind({}, userId))			
		}) 		

		callback(userChallenges, self);
	})	
}