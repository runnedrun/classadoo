require("./ScratchTracker.js");
require("./ScratchDisplay.js");
require("./firebase.min.js");
var $ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');

$(function() {	
	var ref = new Firebase('https://classadoo-scratch.firebaseio.com');
	new ScratchTracker(ref, function(scratches, tracker) {		
		ReactDOM.render(<ScratchDisplays scratchTracker={tracker} scratches={scratches} />, document.getElementById("display-container"))   
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
					return <ScratchDisplay scratchTracker={self.props.scratchTracker} key={docId} docId={docId} newCode={self.props.scratches[docId]} />
				})}
			</div>			
		)
	}
})