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
require("./ScreenshotDisplay.js");
require("./State.js");
require("./ClassState.js");
require("./StreamManager.js");

var classState;
// var firebasePrefix  = "classadoo-dev.firebaseio.com/"
var firebasePrefix = "classadoo-prod.firebaseIO.com/"
// var firebasePrefix = "ws://classadoo-test.firebaseio.com:5000/"

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
var DisplayState = new State(["screenshot", "screenshotId"], bigRender)
var streamManager;

// klass is defined globally by the template
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
	var firebaseRef = new Firebase(firebasePrefix + "users");
	classState = new ClassState(firebaseRef, updateDisplaysOnChanges)
	streamManager = new StreamManager(DisplayState, classState); 
	updateDisplaysOnChanges();
})

function updateDisplaysOnChanges() {
	bigRender();
	fetchAndRenderLesson(klass);			
}

function bigRender() {	
	ReactDOM.render(<ClassInfoDisplay numberOfStudents={classState.sortedStudents().length} klass={klass} />, document.getElementById("class-info-container"))   
  	ReactDOM.render(<StudentStatesDisplay streamManager={streamManager} classState={classState} />, document.getElementById("student-state-wrapper"))   
  	ReactDOM.render(<ScreenshotDisplay classState={classState} displayState={DisplayState} />, document.getElementById("screenshot-display"));
  	ReactDOM.render(<ClassControls classState={classState} />, document.getElementById("class-controls"));
}

function renderLessonControls(lesson) {
	lesson = lesson;
	var firstStudent = Util.objectValues(classState.students())[0];	
	var currentStopIndex = (firstStudent &&  firstStudent.global.stopIndex) || (lesson.length - 1);	
	ReactDOM.render(<LessonControls classState={classState} samplePrefix={samplePrefix} currentStopIndex={currentStopIndex} tasks={lesson} />, document.getElementById("lesson-controls"));	
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