ChatManager = function(parentRef) {
	var ref = parentRef.child("state/global/chatHistory");
	var messages = {};
	ref.once("value", function(snapshot) {
		Util.objectValues(snapshot.val() || {}).forEach(function(message) {
			messages[message.timestamp] = message;			
		})

		ref.on("child_added", function(childSnapshot) {
			var message = childSnapshot.val()
			if (!messages[message.timestamp]) {
				newMessage(message);
			} 
		})
	})

	function sendMessage(message) {							
		message["timestamp"] = Firebase.ServerValue.TIMESTAMP
		ref.push(message)
	}

	function newMessage(message) {
		messages[message.timestamp] = message;		
		Message.sendToAllTabs({newChatMessage: message});
	}

chrome.runtime.onMessage.addListener(function(request, sender, response) {
		if (request.sendMessage) {			
			sendMessage(request.sendMessage);
		}

		if (request.getMessageHistory) {						
			response(Util.objectValues(messages));
		}
	})
}