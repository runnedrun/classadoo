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
			"border-top": "1px solid black",
			"left": "0px"
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
	var sideButtons;

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

	function displayNewTaskDescription(description) {	
		console.log("displaying task text", description);

		if (i.$(".in-progress-display").html()) {
			// there is currently something displayed, flash it
			flashTaskDisplay(2, function() {
				i.$(".in-progress-display").html(description);	
			})		
		} else {
			i.$(".in-progress-display").html(description);	
		}
	}	

	function hideOrShow(toolbarOpen) {				
		ModifyPageForToolbar(toolbarOpen);

		if (toolbarOpen) {
			$iframe.show();			
		} else {
			$iframe.hide();			
		}		
	}

	function highlightHelpButton(needsHelp){
		if (needsHelp) {
			helpButton.css("color", "red");	
		} else {
			helpButton.css("color", "black");		
		}	
	}

	function flashTaskDisplay(numberOfCycles, callback) {
		console.log("flashingnign")
		numberOfCycles = numberOfCycles || 2
		var cycles = 0;	
		var display = i.$(".in-progress-display");
		function cycle() {
			display.css({ color: "black" });		
			setTimeout(function() { 
				display.css({ color: "white" })
				cycles += 1
				if (cycles < numberOfCycles) {
					setTimeout(cycle, 500)
				} else {
					display.css({ color: "black" });
					callback && callback();
				}
			}, 300)		
		}
		
		cycle()	
	}

	respond("task.text", displayNewTaskDescription);

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

