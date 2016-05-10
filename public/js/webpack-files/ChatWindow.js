var $ = require("jquery");
var React = require('react');
require("./Util.js");
require("./firebase.min.js");

ChatWindow = React.createClass({  	
	componentDidUpdate: function() {		
		var history = $(this.history)
		history.scrollTop(history[0].scrollHeight);
	},

	componentDidMount: function() {		
		var history = $(this.history)
		history.scrollTop(history[0].scrollHeight);
	},

	sendMessage: function(event) {
		var enterKeyCode = 13;  		

		if (event.keyCode === enterKeyCode && !event.shiftKey) {						
			var target = $(event.target);			
			var value =  $(target).val();	

			if (value != "") {                        	
				this.studentUpdater.push("chatHistory", {text: value, isStudent: false, timestamp: Firebase.ServerValue.TIMESTAMP});
				this.studentUpdater.update({"chatOpen": true});				
				this.studentUpdater.updateActiveTab({"toolbarOpen": true});				
			}           
			
			event.preventDefault();
			target.val("");
		}     
	},

	toggleChat: function() {
		var $window = $(this.window)
		var $toggle = $(this.toggle)
		if ($window.is(":visible")) {
			$window.hide();
			$toggle.html("Show Chat");
		} else {
			$window.show();
			$toggle.html("Hide Chat");				
		}
		
	},

	render: function() {		
		var chatHistory = this.props.state.global.chatHistory || {}
		this.currentHistory = chatHistory;


		this.studentUpdater = this.props.classState.studentUpdater(this.props.state.id);


		var messages = Util.objectValues(chatHistory).sort(function(a, b) {
			return a.timestamp - b.timestamp
		})		

		return ( 
			<div>				
				<div className="row chat-window" ref={(ref) => this.window = ref}>				
					<div className="history-window" ref={(ref) => this.history = ref}>
						{messages.map(function(message) {
							if (message.isStudent) {
								return <div key={message.timestamp} className="theirs">{message.text}</div>
							} else {
								return <div key={message.timestamp} className="yours">{message.text}</div>
							}
						})}
					</div>
					<div className="input-window">
						<textarea onKeyDown={this.sendMessage} className="input-area"> 
						</textarea>
					</div>				
				</div>
			</div>
		)
	}
})