var $ = require("jquery");
var io = require("socket.io-client");
var React = require('react');
var ReactDOM = require('react-dom');
require("./Util.js");
require("./ClassInfoDisplay.js");
require("./StudentStatesDisplay.js");
var students = {}

host = location.host;

$(function() {
	renderClassInfoDisplay();
	
	var socket = io(host);	

	socket.on("connect", function(event, data) {
		console.log("connected!");
	})

	socket.on("state.update", function(status) {
		console.log("got status: ", status);
		students[status.studentName] = status;
		renderStudentStatesDisplay()
	})

	setInterval(renderStudentStatesDisplay, 5000);
})

function renderClassInfoDisplay() {
  	ReactDOM.render(<ClassInfoDisplay klass={klass} />, document.getElementById("class-info-container"))   
}

function renderStudentStatesDisplay() {	
	var statesArr = Util.objectValues(students);
	var studentNames = statesArr.map(function(state) { return state.studentName });
	studentNames.sort();      

	var alphaStates = studentNames.map(function(name) {
		var obj = students[name];
		if (obj.startTime) {
			obj["elapsedTime"] = Math.ceil((Date.now() - obj.startTime) / 1000);
		}			
		return obj	
	})
	
  	ReactDOM.render(<StudentStatesDisplay studentStates={alphaStates} />, document.getElementById("student-state-wrapper"))   
}

