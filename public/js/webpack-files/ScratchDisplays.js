require("./ScratchTracker.js");
require("./ScratchDisplay.js");
require("./IdleTimesDisplay.js");
require("./ChatWindow.js");
require("./firebase.min.js");
var $ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');
require('react-ace');
require('./scroll-stop.min.js')


$(function() {	
	// var ref = new Firebase('https://classadoo-sd.firebaseio.com');
	var ref = new Firebase('https://classadoo-scratch.firebaseio.com');
	var tracker = new ScratchTracker(ref, function(scratches, chats, idleTimes, newChats, tracker) {						
		ReactDOM.render(<ScratchDisplays scratchTracker={tracker} scratches={scratches} chats={chats} />, document.getElementById("display-container"))
		ReactDOM.render(<IdleTimesDisplay idleTimes={idleTimes} newChats={newChats} />, document.getElementById("idle-time-container"))
	})		
})

ScratchDisplays = React.createClass({    
	render: function() {
		var self = this;		
		var alphaDocIds = Object.keys(this.props.scratches)
		alphaDocIds.sort();		

		// var linksDisplay = 
		// 	<div>
		// 		{alphaDocIds.map(function(docId, i) {										
		// 			return (<div>
		// 					 {"www.classadoo.com/sites/" + docId}
		// 					</div>)
		// 		})}
		// 	</div>

		return (
			<div className="container">								
				{alphaDocIds.map(function(docId, i) {										
					return (
						<div className="row" key={docId} id={docId}>							
						  	<div className="title row">
								<a className="title-link" href={"https://www.classadoo.com/scratchpad/" + docId}>
									{docId}
								</a>
							</div>
							<div className="row">
								<div className="col-md-10">
									<ScratchDisplay scratchTracker={self.props.scratchTracker} docId={docId} newCode={self.props.scratches[docId]} />
								</div>
								<div className="col-md-2">
									<ChatWindow readChat={self.props.scratchTracker.readChat.bind({}, docId)} chatHistory={self.props.chats[docId]} sendMessage={self.props.scratchTracker.sendChat.bind({}, docId)} />
								</div>
							</div>
						</div>
					)
				})}
			</div>			
		)
	}
})

