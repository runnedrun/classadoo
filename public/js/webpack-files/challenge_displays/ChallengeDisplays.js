require("./ChallengeTracker.js");
require("./ChallengeDisplay.js");
require("../firebase.min.js");
var $ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');

$(function() {	
	// var ref = new Firebase('https://classadoo-sd.firebaseio.com');
	var ref = new Firebase('https://classadoo-challenge.firebaseio.com');
	var tracker = new ChallengeTracker(ref, function(challenges, tracker) {						
		ReactDOM.render(<ChallengeDisplays challenges={challenges} />, document.getElementById("display-container"))		
	})		
})

ChallengeDisplays = React.createClass({    
	render: function() {		
		var self = this;	
		var challenges = this.props.challenges
		var alphaDocIds = Object.keys(challenges)
		alphaDocIds.sort();


		return (
			<div className="container">								
				{alphaDocIds.map(function(docId, i) {										
					return (
						<div className="row" key={docId} id={docId}>							
						  	<h3 className="title row text-center">								
								{docId}							
							</h3>
							<div className="row">
								<div className="col-md-10">
									<ChallengeDisplay docId={docId} example={challenges[docId].example} solution={challenges[docId].solution} />
								</div>								
							</div>
						</div>
					)
				})}
			</div>			
		)
	}
})

