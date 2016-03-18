var $ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');
require("./Util.js");
require("./ClassInfoDisplay.js");
require("./StudentStatesDisplay.js");
require("./firebase.min.js")

var students = {}

$(function() {
	renderClassInfoDisplay();	

	var ref = new Firebase("vivid-inferno-6534.firebaseIO.com/users");
	ref.on("value", function(snapshot) {		
		students = snapshot.val()	
		renderStudentStatesDisplay();			
	})

	setInterval(renderStudentStatesDisplay, 5000);
})

function renderClassInfoDisplay() {
  	ReactDOM.render(<ClassInfoDisplay klass={klass} />, document.getElementById("class-info-container"))   
}

function renderStudentStatesDisplay() {	
	var statesArr = Util.objectValues(students);	

	var studentsByName = {}
	statesArr.forEach(function(user) { 		
		studentsByName[user.state.global.name] = user.state
	});

	var studentNames = Object.keys(studentsByName);
	studentNames.sort();      

	var alphaStates = studentNames.map(function(name) {
		var obj = studentsByName[name];		
		if (obj.global.startTime) {			
			obj.global["elapsedTime"] = Math.ceil((Date.now() - obj.global.startTime) / 1000);
		}			
		return obj	
	})
	
  	ReactDOM.render(<StudentStatesDisplay studentStates={alphaStates} />, document.getElementById("student-state-wrapper"))   
}

