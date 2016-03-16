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
			display: "none"			
		}
	}	

	applyDefaultCSS($iframe).css(CSS.frame)

	$iframe[0].onload = function() {    				    				    				
		var html = decodeURI(content);	      				
		i.setIframeContent(html);
		if (m.className){
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
		var className = i.$(".class-name").val();
		var studentName = i.$(".student-name").val();

		if (!className || !studentName) return

		// actually try to start the lesson
		fire("login", {className: className, studentName: studentName});				
	}

	function switchToLessonMode() {				
		lessonInProgress = true

		var initialDisplay = i.$(".initial-display");
		var initialDisplayWrapper = i.$(".initial-display-wrapper");
		var inProgressDisplay = i.$(".in-progress-display");		
		var helpButton = i.$(".help-button")

		initialDisplay.animate({"width": 0}, {
			complete: function() {
				initialDisplayWrapper.removeClass("col-md-10").addClass("col-md-2");
				i.$(".class-toggle").html("Leave Class").removeClass("btn-success").addClass("btn-danger")
				inProgressDisplay.show();
				i.$(".class-toggle").click(switchToLoginMode);				

				helpButton.show();
				helpButton.click(function() {					
					fire("xray");
				})				
			},
			duration: 500	
		});					
	}

	function switchToLoginMode() {
		var initialDisplay = i.$(".initial-display");
		var initialDisplayWrapper = i.$(".initial-display-wrapper");
		var inProgressDisplay = i.$(".in-progress-display");		

		var lessonNameDisplay = i.$(".lesson-name-display");
		var logo = i.$(".logo");		

		m.clear();

		initialDisplayWrapper.removeClass("col-md-2").addClass("col-md-10");
		inProgressDisplay.hide();
		i.$(".class-toggle").html("Join Class").removeClass("btn-danger").addClass("btn-success");
		i.$(".class-toggle").click(attemptLogin);				
		initialDisplay.animate({"width": "inherit"}, {			
			duration: 500	
		});		

		lessonNameDisplay.hide();
		logo.animate({"font-size": 24}, {			
			duration: 500
		});
	}	

	function setLesson(lessonName) {		
		var lessonNameDisplay = i.$(".lesson-name-display");
		var logo = i.$(".logo");		

		logo.animate({"font-size": 18}, {
			complete: function() {
				lessonNameDisplay.html(lessonName);
			},
			duration: 500
		});
	}

	// Called when we are continuing an existing lesson
	function startLessonMode() {
		var initialDisplay = i.$(".initial-display");
		var initialDisplayWrapper = i.$(".initial-display-wrapper");
		var inProgressDisplay = i.$(".in-progress-display");		
		var lessonNameDisplay = i.$(".lesson-name-display");
		var helpButton = i.$(".help-button")

		initialDisplay.css({width: 0});
		initialDisplayWrapper.removeClass("col-md-10").addClass("col-md-2");		
		i.$(".class-toggle").html("Leave Class").removeClass("btn-success").addClass("btn-danger")		
		inProgressDisplay.css({"display": "block"});

		helpButton.css("display", "block");
		helpButton.click(function() {
			fire("xray");
		})

		i.$(".class-toggle").click(switchToLoginMode);
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

	respond("taskIndex", displayNewTaskDescription);
	respond("tasks", displayNewTaskDescription);
	respond("lessonName", setLesson);
	respond("className", startLessonMode)
	respond("toolbarOpen", hideOrShow);
	respond("toolbarOpen", hideOrShow);
}

