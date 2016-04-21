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
require("./ScratchUpdater.js");

var students = {};
// klass is defined globally by the template
var classUpdater = new AllClassUpdater(students);

var lessonsPrefix
if (location.host.indexOf("localhost") > -1) {
	lessonsPrefix = "http://localhost:8000/lib/dev/";    
	samplePrefix = "http://localhost:8000/samples/";  
} else {
  	lessonsPrefix = "https://classadoo.github.io/lessons/lib/prod/";
  	samplePrefix = "https://classadoo.github.io/lessons/samples/";  	
}

var LessonRequest = new Request(lessonsPrefix, "text", true);
var SampleRequest = new Request(samplePrefix, "html", true);

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

scratchTrackers = {

}

scratchUpdater = new AllClassScratchUpdater(students, scratchTrackers)


$(function() {	
	var state = new Firebase("vivid-inferno-6534.firebaseIO.com/users");
	state.on("value", function(snapshot) {
		var filteredSnapshot = {};
		var snap = snapshot.val() || {};
		Object.keys(snap).forEach(function(key) {
			if (snap[key] && snap[key].state && snap[key].state.global && snap[key].state.global.studentName) {				
				filteredSnapshot[key] = snap[key];
			}
		})

		$.extend(students, filteredSnapshot);	
		// trackScratchInputs(students);

		updateDisplaysOnChanges();			
	})

	// setInterval(renderStudentStatesAndClassDisplay, 5000);
})

function updateDisplaysOnChanges() {
	renderStudentStatesAndClassDisplay();
	fetchAndRenderLesson(klass);		
	renderClassControls();
}

function trackScratchInputs(students) {	
	Object.keys(students).forEach(function(id) {
		var student = students[id];
		var scratchId = Util.createScratchId(student.state.global.studentName);
		if (!scratchTrackers[id]) {
			var ref = new Firebase("scratchpad.firebaseio.com/" + scratchId);
			ref.on("value", function(snapshot) {
				var val = snapshot.val();
				scratchTrackers[id].input = val.editor.code;				
				updateDisplaysOnChanges()				
			})

			scratchTrackers[id] = {}
			scratchTrackers[id].ref = ref			
		}					
	})	
}

function renderStudentStatesAndClassDisplay() {	
	var ids = Object.keys(students);

	var statesWithIds = ids.map(function(id) {
		var state = students[id].state
		state.id = id;
		state.scratchInput = scratchTrackers[id] && scratchTrackers[id].input;
		return state
	})	

	var studentsByName = {}
	statesWithIds.forEach(function(state) { 				
   		studentsByName[state.global.studentName] = state;		   		
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
	
	ReactDOM.render(<ClassInfoDisplay numberOfStudents={alphaStates.length} klass={klass} />, document.getElementById("class-info-container"))   
  	ReactDOM.render(<StudentStatesDisplay classUpdater={classUpdater} studentStates={alphaStates} />, document.getElementById("student-state-wrapper"))   
}

function renderClassControls() {
	ReactDOM.render(<ClassControls scratchUpdater={scratchUpdater} classUpdater={classUpdater} students={students} />, document.getElementById("class-controls"));
}

function renderLessonControls(lesson) {
	lesson = lesson;
	var firstStudent = Util.objectValues(students)[0];
	var currentStopIndex = (firstStudent && firstStudent.state && firstStudent.state.global && firstStudent.state.global.stopIndex) || (lesson.length - 1);	
	ReactDOM.render(<LessonControls samplePrefix={samplePrefix} currentStopIndex={currentStopIndex} studentIds={Object.keys(students)} tasks={lesson} />, document.getElementById("lesson-controls"));	
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