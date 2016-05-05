ChatWindow = function($iframe, content, dataManager, loadedCallback) {
	var self = this;	
	var i = new IframeManager($iframe);
	var m = dataManager;	
		
	var CSS = {
		frame: {
			width: "200px",
			height: "18px",
			position: "fixed",
			bottom: "0px",
			right: "0px",
			"z-index": "10000",			
			"border": "2px solid black",						
			"border-bottom": "0px",
		}
	}	

	applyDefaultCSS($iframe).css(CSS.frame)

	var toggleChatButton;
	var messageArea;
	var history;

	$iframe[0].onload = function() {    		
		i.setIframeContent(content);

		toggleChatButton = i.$(".toggle-chat");
		messageArea = i.$(".message-area");
		history = i.$(".history");

		toggleChatButton.click(function() {			
			m.setChatOpen(!m.chatOpen);
		})

		messageArea.keydown(sendMessage);

		loadedCallback();		

		chrome.runtime.sendMessage({getMessageHistory: true}, function(messages) {			
			messages.sort(function(a, b) { 
				return a.timestamp - b.timestamp
			})

			messages.slice(messages.length - 21, messages.length).forEach(newMessage);
		})
	}

	$(document.body).prepend($iframe);	

	function toggleChat() {				
		if (m.chatOpen) {
			$iframe.animate({"height": 300}, 150);
			toggleChatButton.html("Hide Chat")
		} else {			
			$iframe.animate({"height": "18px"}, 150);
			toggleChatButton.html("Show Chat")			
		}
	}

	function showOrHideIframe() {				
		if (!m.toolbarOpen) {
			$iframe.hide();
		} else {			
			$iframe.show();
		}
	}

	function newMessage(message) {		
		var messageDisplay = $("<div data-timestamp='" + message.timestamp + "' class='message'><span class='chat-bubble'>" + message.text + "</span></div>")
		var messageClass = message.isStudent ? "yours" : "theirs"
		messageDisplay.addClass(messageClass);
		history.append(messageDisplay);
			
		history.scrollTop(history[0].scrollHeight);
	}

	function sendMessage(event) {
		var enterKeyCode = 13;  				
		if (event.keyCode === enterKeyCode && !event.shiftKey) {			
			var messageText = messageArea.val();			
			var newMessage = {text: messageText, isStudent: true};
			chrome.runtime.sendMessage({sendMessage: newMessage})
			messageArea.val("");
			return false;
		}
	}

	chrome.runtime.onMessage.addListener(function(request) {
		if (request.newChatMessage) {			
			newMessage(request.newChatMessage);
		}		
	})

	respond("chatOpen", toggleChat);
	respond("toolbarOpen", showOrHideIframe);	
}