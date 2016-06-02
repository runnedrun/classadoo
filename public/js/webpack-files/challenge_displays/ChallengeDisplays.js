require("./ChallengeTracker.js");
require("./ChallengeDisplay.js");
require("../firebase.min.js");
var $ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');

$(function() {	
	// var ref = new Firebase('https://classadoo-sd.firebaseio.com');
	var ref = new Firebase('https://classadoo-challenge.firebaseio.com');
	var tracker = new ChallengeTracker(ref, function(userChallenges, tracker) {								
		var userChallengesClone = {}
		$.extend(true, userChallengesClone, userChallenges);

		ReactDOM.render(<ChallengeDisplays userChallenges={userChallengesClone} />, document.getElementById("display-container"))		
	})		
})

ChallengeDisplays = React.createClass({    	
	componentDidUpdate: function(prevProps) {		
		var currentUserChallenges = this.props.userChallenges;
		var prevUserChallenges = prevProps.userChallenges
		var self = this;

		Object.keys(currentUserChallenges).forEach(function(userId) {			
			var prevChallenges = prevUserChallenges[userId];
			var currentChallenges = currentUserChallenges[userId];
			
			if (prevChallenges) {
				var challengeElToScrollTo;

				Object.keys(currentChallenges).forEach(function(challengeNumber) {
					var prevChallenge = prevChallenges[challengeNumber];
					var currentChallenge = currentChallenges[challengeNumber];
					
					if (!prevChallenge || (prevChallenge.solutionStyle !==  currentChallenge.solutionStyle)) {						
						challengeElToScrollTo = self.challengeEls[userId][challengeNumber]; 
					}					
				})

				var rowToScroll = self.userRows[userId];

				if (challengeElToScrollTo) {
					self.scrollToUpdatedChallenge(challengeElToScrollTo, rowToScroll);
				}				
			}			
		})
	},

	scrollToUpdatedChallenge: function(challengeElToScrollTo, rowToScroll) {		
		var scrollTop = $(challengeElToScrollTo).position().top;		
		var $row = $(rowToScroll);
		$row.scrollTop($row.scrollTop() + scrollTop);
	},

	render: function() {		
		this.challengeEls = {};
		this.userRows = {};

		var self = this;	
		var userChallenges = this.props.userChallenges
		var alphaDocIds = Object.keys(userChallenges)
		alphaDocIds.sort();

		return (
			<div className="container">								
				{alphaDocIds.map(function(docId, i) {										
					var challenges = userChallenges[docId];
					var sortedChallengeNumbers = Object.keys(challenges);
					sortedChallengeNumbers.sort(function(a, b) { a - b})

					return (
						<div className="row" key={docId} id={docId}>							
						  	<h3 className="title row text-center">								
								{docId}							
							</h3>

							<div className="user-challenges" ref={function(ref) {
								var existingRows = self.userRows[docId] || {}
								existingRows[docId] = ref;
								self.userRows = existingRows							
							}}>
								<div className="top-bumper"></div>

								{sortedChallengeNumbers.map(function(challengeNumber) {
									var challenge = challenges[challengeNumber];

									return (
										<div className="row" key={challengeNumber} ref={function(ref) { 
											var docChallenges = self.challengeEls[docId] || {};
											docChallenges[challengeNumber] = ref;
											self.challengeEls[docId] = docChallenges;
										}}>																								
											<ChallengeDisplay onUpdate={self.scrollToUpdatedChallenge} example={challenge.example} solution={challenge.solution} solutionStyle={challenge.solutionStyle}/>								
										</div>
									)	
								})}															
							</div>							
						</div>
					)
				})}
			</div>			
		)
	}
})

