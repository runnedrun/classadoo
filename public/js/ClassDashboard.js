var $ = require("jquery");
var React = require('react');
var ReactDOM = require('react-dom');
require("./Util.js");
require("./ClassInfoDisplay.js");
require("./ClassControls.js");
require("./LessonControls.js");
require("./StudentStatesDisplay.js");
require("./Request.js");
require("./firebase.min.js");
require("./AllClassUpdater.js");

var students = {};
// klass is defined globally by the template
var classUpdater = new AllClassUpdater(students);

var lessonsPrefix
if (location.host.indexOf("localhost") > -1) {
	lessonsPrefix = "http://localhost:8000/lib/dev/";    
} else {
  	lessonsPrefix = "https://classadoo.github.io/lessons/lib/prod/";
}

var LessonRequest = new Request(lessonsPrefix, "text", true);

klass.update = function() {	
	$.ajax({
	  url: "/classes?_method=PUT",
	  method: "POST",
	  data: klass.data,
	  success: function() {	  	
	    $(".flash-success").show();
	    setTimeout(function() {
	      $(".flash-success").hide();          
	    }, 3000)
	  },
	  error: function() {      	
	  	$(".flash-error").show();
	    setTimeout(function() {
	      $(".flash-error").hide();          
	    }, 3000)
	  }
	})

	klass.updateCallback && klass.updateCallback(klass);
}


$(function() {
	renderClassInfoDisplay();	

	var ref = new Firebase("vivid-inferno-6534.firebaseIO.com/users");
	ref.on("value", function(snapshot) {		
		$.extend(students, snapshot.val());
		renderStudentStatesDisplay();
		fetchAndRenderLesson(klass);		
		renderClassControls();
	})

	setInterval(renderStudentStatesDisplay, 5000);
})

function renderClassInfoDisplay() {
  	ReactDOM.render(<ClassInfoDisplay klass={klass} />, document.getElementById("class-info-container"))   
}

function renderStudentStatesDisplay() {	
	var ids = Object.keys(students);

	var statesWithIds = ids.map(function(id) {
		var state = students[id].state
		state.id = id;
		return state
	})	

	var studentsByName = {}
	statesWithIds.forEach(function(state) { 		
		studentsByName[state.global.name] = state;
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
	
  	ReactDOM.render(<StudentStatesDisplay classUpdater={classUpdater} studentStates={alphaStates} />, document.getElementById("student-state-wrapper"))   
}

function renderClassControls() {
	ReactDOM.render(<ClassControls classUpdater={classUpdater} students={students} />, document.getElementById("class-controls"));
}

function renderLessonControls(lesson) {
	var currentStopIndex = Util.objectValues(students)[0].state.global.stopIndex;	
	ReactDOM.render(<LessonControls currentStopIndex={currentStopIndex} studentIds={Object.keys(students)} tasks={lesson} />, document.getElementById("lesson-controls"));	
}

function fetchAndRenderLesson(klass) {
	var lessonName = klass.data.currentLesson;

	if (lessonName) {
		LessonRequest.get(Util.spaceToUnderscore(lessonName).toLowerCase() + ".js").then(function(lessonText) {
			eval(lessonText);			
			renderLessonControls(__importedLesson);			
		})
	}	
}

klass.updateCallback = fetchAndRenderLesson;