var Toolbar = function($iframe, content, dataManager, loadedCallback) {
	var self = this;	
	var i = new IframeManager($iframe);
	var m = dataManager;	
	var wholeClassLoaded;
	var iframeLoaded;

	// the number which to compare progress against for the current task set.
	var progressStart = 0;

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
	var logoWrapper;
	var	leftSideWrapper;
	var inProgressDisplay;
	var rightSideWrapper;
	var inspectButton;
	var classToggle;
	var lessonNameDisplay;
	var logo;
	var sideButtons;
	var progressBarContainer; 

	applyDefaultCSS($iframe).css(CSS.frame)

	$iframe[0].onload = function() {    				    				    				
		var html = decodeURI(content);	      				
		i.setIframeContent(html);

		inspectButton = i.$(".inspect-button");
		helpButton = i.$(".help-button");
		initialDisplay = i.$(".initial-display");
		initialDisplayWrapper = i.$(".initial-display-wrapper");
		logoWrapper = i.$(".logo-wrapper");
		leftSideWrapper = i.$(".left-side-wrapper");
		inProgressDisplay = i.$(".in-progress-display");				
		rightSideWrapper = i.$(".right-side-wrapper");		
		classToggle = i.$(".class-toggle")
		lessonNameDisplay = i.$(".lesson-name-display");
		logo = i.$(".logo");
		sideButtons = i.$(".side-buttons");
		progressBarContainer = i.$(".progress-bar-wrapper");


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

		progressBar = new ProgressBar(m, progressBarContainer, "100%");						
		wholeClassLoaded && loadedCallback();
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

	function shrinkLeftSide() {
		initialDisplayWrapper.removeClass("col-md-10").addClass("col-md-6");
		logoWrapper.removeClass("col-md-2").addClass("col-md-6");
		leftSideWrapper.removeClass("col-md-12").addClass("col-md-3");		
		rightSideWrapper.show();
	}

	function expandLeftSide() {
		initialDisplayWrapper.removeClass("col-md-6").addClass("col-md-10");
		logoWrapper.removeClass("col-md-6").addClass("col-md-2");
		leftSideWrapper.removeClass("col-md-3").addClass("col-md-12");	
		rightSideWrapper.hide();	
	}

	function switchToLessonMode() {				
		lessonInProgress = true		

		initialDisplay.animate({"width": 0}, {
			complete: function() {
				shrinkLeftSide();
				classToggle.html("Leave Class").removeClass("btn-success").addClass("btn-danger")				

				classToggle.off();
				classToggle.click(m.clear);				

				sideButtons.show();			
			},
			duration: 500	
		});					
	}

	function switchToLoginMode() {				
		expandLeftSide();		
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
		shrinkLeftSide();
		classToggle.html("Leave Class").removeClass("btn-success").addClass("btn-danger")				
		classToggle.click(m.clear);		
		sideButtons.show();
	}

	function displayNewTaskDescription(description) {	
		console.log("displaying task text", description);

		if (inProgressDisplay.html()) {
			// there is currently something displayed, flash it
			flashTaskDisplay(2, function() {
				inProgressDisplay.html(description);	
			})		
		} else {
			inProgressDisplay.html(description);	
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

	function incrementProgress() {

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

	// run the laoded callback only if the iframe has already loaded. Otherwise, wait for it to load;
	wholeClassLoaded = true
	!iframeLoaded && loadedCallback();
}

