ScratchpadChat = function(parentRef) {			
	var ref = parentRef.child("chat")

	var chatWindow = $(".chat-window")
	var toggleChatButton = $(".toggle-chat");
	var messageArea = $(".message-area");
	var history = $(".history");

	var chatOpen = false;
	var seenMessages = {};

	toggleChatButton.click(toggleChat);
	messageArea.keydown(sendMessage);
		
	ref.once("value", function(snapshot) {
		var messagesObj = snapshot.val() || {};

		var messages = []

		Object.keys(messagesObj).forEach(function(key) {
			seenMessages[key] = true;
			messages.push(messagesObj[key]);
		})

		messages.sort(function(a, b) { 
			return a.timestamp - b.timestamp
		})

		messages.slice(messages.length - 21, messages.length).forEach(function(message) {
			newMessage(message, true);
		});
		
		ref.on("child_added", function(snapshot) {
			if (!seenMessages[snapshot.key()]) {
				newMessage(snapshot.val());
			}			
		});
	})		

	function toggleChat() {				
		if (chatOpen) {
			chatWindow.animate({"height": "18px"}, 150);
			toggleChatButton.html("Show Chat")			
			chatOpen = false;
		} else {			
			chatWindow.animate({"height": 300}, 150);
			toggleChatButton.html("Hide Chat")
			chatOpen = true;
		}
	}

	function newMessage(message, isHistory) {		
		var messageDisplay = $("<div data-timestamp='" + message.timestamp + "' class='message'><span class='chat-bubble'>" + message.text + "</span></div>")
		var messageClass = message.isStudent ? "yours" : "theirs"
		messageDisplay.addClass(messageClass);
		history.append(messageDisplay);
			
		history.scrollTop(history[0].scrollHeight);

		if (!isHistory && !chatOpen) {
			toggleChat()
		}
	}

	function sendMessage(event) {
		var enterKeyCode = 13;  				
		if (event.keyCode === enterKeyCode && !event.shiftKey) {			
			var messageText = messageArea.val();			
			var newMessage = {text: messageText, isStudent: true, timestamp: Firebase.ServerValue.TIMESTAMP};
			ref.push(newMessage)
			messageArea.val("");
			return false;
		}
	}	
}