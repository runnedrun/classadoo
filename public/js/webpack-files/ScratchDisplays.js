require("./ScratchTracker.js");
require("./ScratchDisplay.js");
require("./firebase.min.js");
var $ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');
require('react-ace');


$(function() {	
	var ref = new Firebase('https://classadoo-sd.firebaseio.com');
	new ScratchTracker(ref, function(scratches, chats, tracker) {		
		ReactDOM.render(<ScratchDisplays scratchTracker={tracker} scratches={scratches} chats={chats} />, document.getElementById("display-container"))   
	})		
})

ScratchDisplays = React.createClass({    
	render: function() {
		var self = this;		
		var alphaDocIds = Object.keys(this.props.scratches)
		alphaDocIds.sort();		

		return (
			<div className="container">
				{alphaDocIds.map(function(docId, i) {										
					return (
						<div className="row" key={docId} >							
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
									<ChatWindow chatHistory={self.props.chats[docId]} sendMessage={self.props.scratchTracker.sendChat.bind({}, docId)} />
								</div>
							</div>
						</div>
					)
				})}
			</div>			
		)
	}
})

