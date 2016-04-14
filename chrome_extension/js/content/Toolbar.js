var Toolbar = function($iframe, content, dataManager, loadedCallback) {
	var self = this;	
	var i = new IframeManager($iframe);
	var m = dataManager;	
	var wholeClassLoaded;
	var iframeLoaded;
	var lessonInProgress = false;

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
	var hintButton;

	var progressBarWrapper;	
	var sideButtonDisplay;
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
		hintButton = i.$(".hint-button"); 

		progressBarWrapper = i.$(".progress-bar-wrapper");
		sideButtonDisplay = i.$(".side-button-display")
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

		hintButton.click(function() {
			if (m.showHint) {				
				m.setShowHint(null);
			} else {
				m.setShowHint(m.tasks[m.taskIndex].name);
			}			
		})

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
		expandOrShrink();
		wholeClassLoaded && loadedCallback();
	};

	$iframe[0].src = 'about:blank';	
	$(document.body).prepend($iframe);	
	
	function startLoginMode() {
		lessonInProgress = false;
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
		initialDisplayWrapper.removeClass("col-xs-10").addClass("col-xs-6");				
		logoWrapper.removeClass("col-xs-2").addClass("col-xs-6");
		leftSideWrapper.removeClass("col-xs-12").addClass("col-xs-2");				
		rightSideWrapper.show();		
		expandOrShrink();
	}

	function expandLeftSide() {	
		expandElements();			
		initialDisplayWrapper.removeClass("col-xs-6").addClass("col-xs-10");
		logoWrapper.removeClass("col-xs-6").addClass("col-xs-2");
		leftSideWrapper.removeClass("col-xs-2").addClass("col-xs-12");	
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
			helpButton.removeClass("btn-primary").addClass("btn-danger");	
		} else {
			helpButton.removeClass("btn-danger").addClass("btn-primary");			
		}	
	}

	var blinkInterval;
	function blinkHint() {
		var active = true;
		blinkInterval = setInterval(function() {
			if (active) {
				hintButton.addClass("btn-success").removeClass("btn-primary");
				active = false
			} else {
				hintButton.addClass("btn-primary").removeClass("btn-success");
				active = true
			}			
		}, 800)
	} 

	function stopHintBlinking() {
		clearInterval(blinkInterval);
		hintButton.removeClass("btn-success").addClass("btn-primary");
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

	function startOrStopHintBlink() {		
		if (m.promptHint) {
			blinkHint()
		} else {
			stopHintBlinking();
		}
	}

	$(window).resize(function(e) {		
		expandOrShrink()
	})

	function expandOrShrink() {
		if (lessonInProgress) {
			if ($(window).width() < 950) {
				console.log('srhining');			
				shrinkElements()
			} else  {
				console.log('expand');			
				expandElements()
			} 
		}		
	}

	function shrinkElements() {	
		leftSideWrapper.removeClass("col-xs-2").addClass("col-xs-4")
		rightSideWrapper.removeClass("col-xs-10").addClass("col-xs-8");
		progressBarWrapper.removeClass("col-xs-3").addClass("col-xs-2")
		sideButtonDisplay.removeClass("col-xs-3").addClass("col-xs-4")
	}

	function expandElements() {
		leftSideWrapper.removeClass("col-xs-4").addClass("col-xs-2")
		rightSideWrapper.removeClass("col-xs-8").addClass("col-xs-10");
		progressBarWrapper.removeClass("col-xs-2").addClass("col-xs-3")
		sideButtonDisplay.removeClass("col-xs-4").addClass("col-xs-3")
	}

	function changeHintButtonText() {
		if (m.showHint) {
			stopHintBlinking();
			hintButton.html("Hide").removeClass("btn-primary").addClass("btn-danger")
		} else {
			hintButton.html("Hint").removeClass("btn-danger").addClass("btn-primary")
		}
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
	respond("promptHint", startOrStopHintBlink);
	respond("showHint", changeHintButtonText);

	// run the laoded callback only if the iframe has already loaded. Otherwise, wait for it to load;
	wholeClassLoaded = true
	!iframeLoaded && loadedCallback();
}

