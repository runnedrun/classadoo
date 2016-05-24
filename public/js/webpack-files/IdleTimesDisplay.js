var React = require('react');
var $ = require("jquery");

StudentIdleTime = React.createClass({
	scrollToStudent: function() {
		var display = $("#" + this.props.docId);
		var pos = display.offset();

		var top = pos.top;
		var height = display.height();
		var displayCenter = height / 2;

		var windowHeight = $(window).height();
		var windowcenter = windowHeight / 2;

		if (height >= windowHeight) {
			$(document).scrollTop(top); 	
		} else {
			$(document).scrollTop(top - windowcenter + displayCenter); 	
		}		
	},

	blink: function() {
		if (this.blinked) {
			$(this.display).css({background: "white"})
			this.blinked = false
		} else {
			$(this.display).css({background: "black"})
			this.blinked = true
		}
	},

	render: function() {
		if (this.props.blink && !this.blinkingInterval) {
			this.props.blinkingInterval = setInterval(this.blink, 500);
		} else {
			clearInterval(this.props.blinkingInterval);
			this.props.blinkingInterval = false;
		}

		return (
			<h4 rref={(ref) => this.display = ref} onClick={this.scrollToStudent} className="student-idle" style={{color: this.props.color}}>				
				{this.props.docId}: {this.props.idleTime}				
			</h4>
		)
	}
})

IdleTimesDisplay = React.createClass({    
	render: function() {
		var self = this;
		var idleTimes = this.props.idleTimes;
		var docIds = Object.keys(idleTimes);		

		var needsHelp = [];
		var allGood = []

		docIds.forEach(function(docId) {
			var idleTime = idleTimes[docId]

			var blink = self.props.newChats[docId];			

			if (idleTime > 15000) {
				needsHelp.push({ docId: docId, color: "red", idleTime: Math.round(idleTime / 1000), blink: blink })
			} else {
				allGood.push({ docId: docId, color: "black", idleTime: Math.round(idleTime / 1000), blink: blink })
			}			
		})		

		needsHelp.sort(function(a, b) {
			return b.idleTime - a.idleTime
		})

		allGood.sort();

		return (
			<div className="idle-time-display">
				<div className="student-category">				
					{needsHelp.map(function(student) {
						return <StudentIdleTime idleTime={student.idleTime} docId={student.docId} key={student.docId} color={student.color} blink={student.blink}/>
					})}
				</div>

				<div className="student-category">				
					{allGood.map(function(student) {
						return <StudentIdleTime idleTime={student.idleTime} docId={student.docId} key={student.docId} color={student.color} blink={student.blink}/>
					})}
				</div>
			</div>
		)
	}
})