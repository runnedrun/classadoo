var Toolbar = function($iframe, content, dataManager) {
	var self = this;	
	var i = new IframeManager($iframe);
	var m = dataManager;

	var CSS = {
		frame: {
			width: "100%",
			height: "60px",
			position: "fixed",
			top: "0px",
			"z-index": "10000",
			display: "none",
			"border-bottom": "2px solid black",
			"border-top": "1px solid black"
		}
	}	

	var inspectButton;
	var helpButton;
	var initialDisplay;
	var initialDisplayWrapper;
	var inProgressDisplay;
	var inspectButton;
	var classToggle;
	var lessonNameDisplay;
	var logo;
	var sideButtons


	applyDefaultCSS($iframe).css(CSS.frame)

	$iframe[0].onload = function() {    				    				    				
		var html = decodeURI(content);	      				
		i.setIframeContent(html);

		inspectButton = i.$(".inspect-button");
		helpButton = i.$(".help-button");
		initialDisplay = i.$(".initial-display");
		initialDisplayWrapper = i.$(".initial-display-wrapper");
		inProgressDisplay = i.$(".in-progress-display");				
		classToggle = i.$(".class-toggle")
		lessonNameDisplay = i.$(".lesson-name-display");
		logo = i.$(".logo");
		sideButtons = i.$(".side-buttons");

		inspectButton.click(function() {
			fire("xray");
		})		
		helpButton.click(function() {			
			fire("help");
		})

		if (m.lessonName){
			startLessonMode()		
		} else {
			startLoginMode()
		}			
	};

	$iframe[0].src = 'about:blank';
	$(document.body).prepend($iframe);
	
	function startLoginMode() {
		i.$(".class-toggle").click(attemptLogin);
	}

	function attemptLogin() {		
		var lessonName = i.$(".lesson-name-input").val();
		var studentName = i.$(".student-name").val();

		if (!lessonName || !studentName) return

		// actually try to start the lesson
		fire("login", {lessonName: lessonName, studentName: studentName});				
	}

	function switchToLessonMode() {				
		lessonInProgress = true		

		initialDisplay.animate({"width": 0}, {
			complete: function() {
				initialDisplayWrapper.removeClass("col-md-10").addClass("col-md-2");
				classToggle.html("Leave Class").removeClass("btn-success").addClass("btn-danger")
				inProgressDisplay.show();

				classToggle.off();
				classToggle.click(m.clear);				

				sideButtons.show();			
			},
			duration: 500	
		});					
	}

	function switchToLoginMode() {				
		initialDisplayWrapper.removeClass("col-md-2").addClass("col-md-10");
		inProgressDisplay.hide();
		classToggle.html("Join Class").removeClass("btn-danger").addClass("btn-success");

		classToggle.off();
		classToggle.click(attemptLogin);				
		initialDisplay.animate({"width": "inherit"}, {			
			duration: 500	
		});		

		lessonNameDisplay.hide();
		logo.animate({"font-size": 24}, {			
			duration: 500
		});

		sideButtons.hide();
	}	

	function setLesson(lessonName) {				
		logo.animate({"font-size": 18}, {
			complete: function() {
				lessonNameDisplay.html(lessonName);
			},
			duration: 500
		});
	}

	// Called when we are continuing an existing lesson
	function startLessonMode() {		
		initialDisplay.css({width: 0});
		initialDisplayWrapper.removeClass("col-md-10").addClass("col-md-2");		
		classToggle.html("Leave Class").removeClass("btn-success").addClass("btn-danger")		
		inProgressDisplay.css({"display": "block"});
		classToggle.click(m.clear);		
		sideButtons.show();
	}

	function displayNewTaskDescription() {			
		m.tasks && m.tasks[m.taskIndex] &&
			i.$(".in-progress-display").html(m.tasks[m.taskIndex].description);
	}	

	function hideOrShow(toolbarOpen) {				
		if (toolbarOpen) {
			$iframe.show();
			$(document.body).css({"top": CSS.frame.height, "position": "relative"});
		} else {
			$iframe.hide();
			$(document.body).css("top", "0px");
		}		
	}

	function highlightHelpButton(needsHelp){
		if (needsHelp) {
			helpButton.css("color", "red");	
		} else {
			helpButton.css("color", "black");		
		}	
	}

	respond("taskIndex", displayNewTaskDescription);
	respond("tasks", displayNewTaskDescription);	
	respond("lessonName", function(lessonName) {			
		if (lessonName) {
			setLesson(lessonName);
			switchToLessonMode()	
		} else {			
			switchToLoginMode()
		}		
	})

	respond("toolbarOpen", hideOrShow);
	respond("toolbarOpen", hideOrShow);
	respond("needsHelp", highlightHelpButton);
}

