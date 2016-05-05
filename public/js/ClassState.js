$ = require("jquery")
require("./StudentUpdater.js");
require("./AllClassUpdater.js");
require("./Util.js");

ClassState = function(ref, onUpdateCallback) {
	var self = this	
	var students = {};	
	var studentUpdaters = {};
	var allClassUpdater = new AllClassUpdater(students, ref);

	var globalProps = [	
		"promptHint",
		"hintAllowed",		
		"needsHelp",
		"showHint",
		"xray",
		"doScreenshot",
		"doScreenshare",
		"taskIndex",	
		"chatHistory",
		"stopIndex",
		"startTime",		
		"backSyncClick",		
		"screenshot"
	]

	var tabProps = [
		"toolbarOpen",
		"active",		
		"url"
	]	

	ref.on("child_added", function(childSnapshot) {
		var student = childSnapshot.val()
		var id = childSnapshot.key()
		var state = student.state

		students[id] = {global: (state && state.global) || {}, tab: (state && state.tab) || {}};

		var studentRef = ref.child(id);

		globalProps.forEach(function(prop) {
			studentRef.child("/state/global/" + prop).on("value", function(snapshot) {
				var student = students[id]
				student.global[prop] = snapshot.val();
				onUpdateCallback();			
			})
		})

		studentRef.child("/state/tab").on("child_added", function(tabSnapshot) {
			var tabId = tabSnapshot.key();			
			var tabRef = studentRef.child("/state/tab/" + tabId);
			var tabs = students[id].tab;		

			tabs[tabId] = tabSnapshot.val(); 
			
			tabProps.forEach(function(prop) {
				tabRef.child(prop).on("value", function(snapshot) {						
					tabs[tabId][prop] = snapshot.val();
					onUpdateCallback();			
				})
			})		
		})

		if (!studentUpdaters[id]) {
			studentUpdaters[id] = new StudentUpdater(ref, students[id]);
		}  		

		onUpdateCallback();				
	})	

	// ref.on("value", function(snapshot) {
	// 	var filteredSnapshot = {};
	// 	var snap = snapshot.val() || {};				

	// 	Object.keys(snap).forEach(function(key) {
	// 		console.log("got this new stuff!");
	// 		if (snap[key] && snap[key].state && snap[key].state.global && snap[key].state.global.studentName) {				
	// 			var simpleObj = {}
	// 			simpleObj.global = snap[key].state.global || {};
	// 			simpleObj.tab = snap[key].state.tab || {};				
	// 			simpleObj.id = key
								
				
	// 			if (students[key]) {
	// 				$.extend(students[key], simpleObj);	
	// 			} else {
	// 				students[key] = simpleObj;
	// 			}			
	// 		}
	// 	})		

		Object.keys(students).forEach(function(id) {
			if (!studentUpdaters[id]) {
				studentUpdaters[id] = new StudentUpdater(ref, students[id]);
			} 
		})	

	// 	console.log(students);

	// 	onUpdateCallback();			
	// })

	this.studentUpdater = function(id) {		
		return studentUpdaters[id]
	}

	this.studentUpdaters = function() {		
		return studentUpdaters
	}

	this.allClassUpdater = function() {
		return allClassUpdater
	}

	this.student = function(id){
		return students[id];
	}

	this.sortedStudents = function() {
		var studentsByName = {}
		Util.objectValues(students).forEach(function(student) { 				
			if (student.global.studentName) {
				studentsByName[student.global.studentName] = student;		   		
			}			   		
		});

		var studentNames = Object.keys(studentsByName);
		studentNames.sort();      

		return studentNames.map(function(name) {
			var obj = studentsByName[name];		
			if (obj.global.startTime) {			
				obj.global["elapsedTime"] = Math.ceil((Date.now() - obj.global.startTime) / 1000);
			}			
			return obj
		})	
	}

	this.students = function() {
		return students;
	}
}