var $ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');
require("./Util.js");
require("./ClassInfoDisplay.js");
require("./StudentStatesDisplay.js");
require("./pubnub-socket.io");
var students = {}

host = location.host;

var pubKey = 'pub-c-e34a131f-b2be-4ea4-9f41-0aa84b0be7e5'
var subKey = 'sub-c-57b77bd4-e72c-11e5-aad5-02ee2ddab7fe'

var pubnub_setup = {
  channel       : 'class_channel',
  publish_key   : pubKey,
  subscribe_key : subKey,
  ssl           : true
};

$(function() {
	renderClassInfoDisplay();
	
	var socket = io.connect( 'http://pubsub.pubnub.com', pubnub_setup );

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

