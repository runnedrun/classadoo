var players = {}
var playerStarts = {}
var currentStart = 0;
var playerWidth = 100;
var playerHeight = 100;
var testUsers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

var challengeHeight = 25;
var challengeWidth = 50;
var challenges = [];

var globalScore = 0;

var currentChallengeId = 0

var challengeInstructions = "Read and perform the task described in the 'task' field, then write the answer to the key '<player name>/answer/<challenge id>'. If you get it right, the challenge will be solved!" 

function redChallenge() {
	var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var index = Math.round(Math.random() * 199);

    for( var i=0; i < 200; i++)
    	if (i == index) {
    		text += "batman"
    	} else {
    		text += possible.charAt(Math.floor(Math.random() * possible.length));
    	}       	

	return { 
		color: "red",		
		task: "What is the index of the word 'batman' in the prompt string",
		prompt: text,
		answer: index,
		points: 4		
	}	
} 

function blackChallenge() {	
  	var parentDiv = $("<div>");
  	var index = Math.round(Math.random() * 19);  	
  	var answer;
  	for (var i=0; i < 20; i++) {
  		var divToAppend = $("<div>");  		
  		var currentId = Math.random().toString(36).substring(7)
  		var text = Math.random().toString(36).substring(7)
  		divToAppend.text(text);

  		if (i == index) {
  			divToAppend.attr("id", currentChallengeId);
  			var answer = text;
  		} else {
  			divToAppend.attr("id", currentId);  		
  		}

  		parentDiv.append(divToAppend)
  	}

	return { 
		color: "black",		
	 	task: "In the HTML string below, what is the contents of the div with the same id as this challenge?",
	 	prompt: parentDiv[0].outerHTML,
	 	answer: answer,
	 	points: 5
	 }  	
} 

function orangeChallenge() {
	var first =  Math.round(Math.random() * 100);
	var second = Math.round(Math.random() * 100);

	var result = first + second;

	return { 
		color: "orange",		
	 	task: "What is the sum of the two numbers in the prompt field?",
	 	prompt: first + " " + second,
	 	answer: result,
	 	points: 3
	 }
} 

function blueChallenge() {
	var answer = Math.random().toString(36).substring(7)

	return { 
		color: "blue",		
	 	task: "what is the string in 'prompt' field?",
	 	prompt: answer,
	 	answer: answer,
	 	points: 2
	 }
} 

function greenChallenge() {		
	return { color: "green", "points": 1 }
}

function generateChallenges(num) {
	var windowHeight = $(".play-area").height();
	var windowWidth = $(".play-area").width();

	for (var i = 0; i < num; i++) {
		var top = Math.random() * windowHeight - challengeHeight;
		var left = Math.random() * windowWidth - challengeWidth;

		var randomNum = Math.random();		
		var challengeCreator;

		Object.keys(challengeDistribution).forEach(function(dist) {
			if (randomNum > Number(dist)) {				
				challengeCreator = challengeDistribution[dist];
			}
		})

		var challenge = challengeCreator();		

		
		$.extend(challenge, {
			top: top, 
			left: left, 
			id: currentChallengeId,
			instructions: challengeInstructions
		});

		createChallengeEl(challenge);

		// for testing

		challenge.el.click(function(e) {
			console.log(e);
			var challenge = challenges[$(e.target).attr("id")]
			players[1].promptChallenge(challenge);
		})

		challenges[currentChallengeId] = challenge;

		currentChallengeId = currentChallengeId + 1;		
	}
}

var challengeDistribution = {
	0 : greenChallenge,
	.3 : blueChallenge,
	.5 : orangeChallenge,
	.7 : redChallenge,
	.9 : blackChallenge  
} 

function createChallengeEl(challenge) {	
	var CSS = {
		wrapper: {
			height: challengeHeight,
			width: challengeWidth,
			position: "absolute",
			top: challenge.top,
			left: challenge.left,
			"z-index": 1000, 
			background: challenge.color,			
			"text-align": "center"
		}
	}

	var wrapper = $("<div id='" + challenge.id + "'></div>").css(CSS.wrapper);
	$(".play-area").append(wrapper);
	challenge.el = wrapper;
}

function completeChallenge(challenge) {
	console.log("completeing ch", challenge)	
	challenge.el.remove();
	delete challenges[challenge.id]

	globalScore = globalScore + challenge.points;

	generateChallenges(1);
}

$(function() {
	var ref = new Firebase('https://classadoo-game.firebaseIO.com/players');		

	// ref.on("child_added", function(snap) {
	// 	players[snap.key()] = new Player(ref, snap.key(), snap.val());
	// })

	testUsers.forEach(function(playerName) {
		players[playerName] = new Player(ref, playerName, {});
	})	

	generateChallenges(10)
})

Player = function(parentRef, playerName, playerData) {
	var self = this;
	var ref = parentRef.child(playerName);

	var playerData = playerData || {}
	var currentMovement = "still";
	var movementInterval = false;
	var speed = playerData.speed || 100;
	var moveUnit = 10;	

	var currentPosition = {top: 0, left: currentStart}	
	currentStart = currentStart + playerWidth + 50;	

	var score = 0;

	var CSS = {
		wrapper: {
			position: "absolute",
			height: playerHeight,
			width: playerWidth,
			"text-align": "center",
			"font-size": "18px",
			top: currentPosition.top,
			left: currentPosition.left
			
		},
		img: {
			height: "100%",
			width: "100%"
		},
		name: {
			"white-space": "nowrap",
			"overflow": "hidden"			
		}

		// left: currentPosition.left + "px",
		// top: currentPosition.top + "px"
	}

	var playerImg = playerData.image || "http://goldenstateservicedogs.com/wp-content/uploads/2015/04/c50bdb2e-95bc-4423-862f-83e949001fbf.jpg";

	var el = $("<div></div>").css(CSS.wrapper)
	var name = $("<div>" + playerName + "</div>").css(CSS.name);
	var scoreBoard = $("<div>0 points</div>");

	var imgWrapper = $("<div>");	
	var img = $("<img src='" + playerImg + "'>").css(CSS.img);		
	imgWrapper.append(img);

	el.append(name).append(imgWrapper).append(scoreBoard);

	$(".play-area").append(el);

	// movement functions 

	this.up = function() {
		function move() {
			currentPosition.top = (currentPosition.top - moveUnit);			
			normalizePosition()
			draw();			
			checkForChallenge()
		}
		move();		
		movementInterval = setInterval(move, speed);
	}

	this.down = function() {
		function move() {
			currentPosition.top = (currentPosition.top + moveUnit);			
			normalizePosition()
			draw();			
			checkForChallenge()
		}	
		move();	
		movementInterval = setInterval(move, speed);
	}	


	this.right = function() {
		function move() {			
			currentPosition.left = (currentPosition.left + moveUnit);			
			normalizePosition()
			draw();		
			checkForChallenge()	
		}	
		move();	
		movementInterval = setInterval(move, speed);
	}	


	this.left = function() {
		function move() {
			currentPosition.left = (currentPosition.left - moveUnit);			
			normalizePosition()
			draw();		
			checkForChallenge()			
		}
		move();
		movementInterval = setInterval(move, speed);
	}	

	function normalizePosition() {
		var windowHeight = $(".play-area").height();
		var windowWidth = $(".play-area").width();

		if (currentPosition.top < (-1 * playerHeight)) {
			currentPosition.top = windowHeight + currentPosition.top 
		} else {
			currentPosition.top = currentPosition.top % windowHeight			
		}

		if (currentPosition.left < (-1 * playerWidth)) {			
			currentPosition.left = windowWidth + currentPosition.left 
		} else {
			currentPosition.left = currentPosition.left % windowWidth 
		}		
	}

	function draw() {			
		var css = {top: currentPosition.top + "px", left: currentPosition.left + "px"}		
		el.css(css)		
	}

	function checkForChallenge() {
		var challengeToComplete;		

		Object.keys(challenges).forEach(function(id) {
			var challenge = challenges[id];

			var leftBound = challenge.left;
			var rightBound = challenge.left + challengeWidth;
			var topBound = challenge.top;
			var bottomBound = challenge.top + challengeHeight;

			var left = currentPosition.left;
			var top = currentPosition.top;
			var right = left + playerWidth;
			var bottom = top + playerHeight;

			var leftOut = left > rightBound
			var rightOut = right < leftBound 
			var topOut = top > bottomBound
			var bottomOut = bottom < topBound
			var out = leftOut || rightOut || topOut || bottomOut
			
			if (!out) {
				console.log(left, right, top, bottom)
				console.log(leftBound, rightBound, topBound, bottomBound);
				console.log(leftOut, rightOut, topOut, bottomOut);
				if (!challenge.task) {
					score = score + 1;					
					scoreBoard.text(score + " points")
					challengeToComplete = challenge;
				} else {					
					promptChallenge(challenge);
				}
			}			
		})	

		challengeToComplete && completeChallenge(challengeToComplete)	
	}

	function promptChallenge(challenge) {
		var challengeToSend = {id: challenge.id, color: challenge.color, task: challenge.task, prompt: challenge.prompt, timestamp: Date.now()};
		ref.child("challenge").set(challengeToSend)
	}

	self.promptChallenge = function(challenge) {
		promptChallenge(challenge)
	}

	// refs
	
	var movementRef = ref.child("movement");
	var answerRef = ref.child("answer");

	movementRef.on("value", function(snap) {				
		movementInterval && clearInterval(movementInterval);		
		self[snap.val()] && self[snap.val()]();
	})	

	answerRef.on("child_added", function(snap) {		
		var id = snap.key();		
		var challengeBeingSolved = challenges[id];
		var answer = snap.val();		

		if (challengeBeingSolved && (challengeBeingSolved.answer == answer)) {			
			score = score + challengeBeingSolved.points;
			scoreBoard.text(score + " points")
			completeChallenge(challengeBeingSolved);
		}
	})
}
