var Toolbar = function($iframe, content, dataManager) {
	var self = this;	
	var i = new IframeManager($iframe);
	var m = dataManager;

	var CSS = {
		frame: {
			width: "100%",
			height: "60px"			
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
		i.$(".class-toggle").click(switchToLessonMode);
	}

	function switchToLessonMode() {		
		var className = i.$(".class-name").val();
		var studentName = i.$(".student-name").val();

		if (!className || !studentName) return

		lessonInProgress = true

		var initialDisplay = i.$(".initial-display");
		var initialDisplayWrapper = i.$(".initial-display-wrapper");
		var inProgressDisplay = i.$(".in-progress-display");		

		initialDisplay.animate({"width": 0}, {
			complete: function() {
				initialDisplayWrapper.removeClass("col-md-10").addClass("col-md-2");
				i.$(".class-toggle").html("Leave Class").removeClass("btn-success").addClass("btn-danger")
				inProgressDisplay.show();
				i.$(".class-toggle").click(switchToLoginMode);

				// actually try to start the lesson
				m.setClassName(className);
				m.setStudentName(studentName);				
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
		i.$(".class-toggle").click(switchToLessonMode);				
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
		initialDisplay.css({width: 0});
		initialDisplayWrapper.removeClass("col-md-10").addClass("col-md-2");		
		i.$(".class-toggle").html("Leave Class").removeClass("btn-success").addClass("btn-danger")		
		inProgressDisplay.css({"display": "block"});

		i.$(".class-toggle").click(switchToLoginMode);
	}

	function displayNewTaskDescription(taskIndex) {		
		i.$(".in-progress-display").html(m.tasks[taskIndex].description);
	}	

	function hideOrShow(toolbarOpen) {
		console.log("hiding or showing!");
		if (toolbarOpen) {
			$iframe.show();	
		} else {
			$iframe.hide();
		}		
	}

	respond("taskIndex", displayNewTaskDescription);	
	respond("lessonName", setLesson);
	respond("toolbarOpen", hideOrShow);
}

