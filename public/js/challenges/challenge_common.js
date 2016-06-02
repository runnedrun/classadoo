var userId = location.hash.slice(1, location.hash.length)

if (!userId) {
	userId = Math.random().toString(36).substring(7)
	location.hash = userId;
}

var ref = new Firebase('https://classadoo-challenge.firebaseIO.com/submissions/' + userId);			
var challenges;
var renderingFrame;

$(function() {
	challenges = $(".image-examples .challenge-row")
	renderingFrame = new IframeManager($(".hidden-rendering-frame"));

	var links = $("link").clone();
	renderingFrame.getIDoc().find("head").append(links);

	challenges.each(function(i, el) {
		$el = $(el);
		var example = $el.find(".example");		
		replaceExampleWithImage(example[0]);		
	})
	
	// refreshStatuses();
	setInterval(refreshStatuses, 4000);
})

function refreshStatuses() {	
	var doc = renderingFrame.getIDoc()
	var renderEl = doc.find("body")
	// var renderEl = $(".hidden-rendering-frame");
	renderEl.html("");	

	challenges.each(function(i, el) {
		$el = $(el);				
		refreshChallengeStatus(i, $el, renderEl);
	})	
}

function refreshChallengeStatus(challengeNumber, challengeRow, renderEl) {	
	var obj = {}

	var solution = challengeRow.find(".solution").clone();
	var example = challengeRow.find(".example-img")

	renderEl.append(solution);

	html2canvas(solution[0], {
	 	onrendered: function(canvas) {
	 		solution.remove();
	 		var src = canvas.toDataURL();    		 		
    		ref.child(challengeNumber).set({example: example.attr("src") || "", solution: src, solutionStyle: solution[0].style.cssText});	
		}
	})	
}

function replaceExampleWithImage(el) {	
	html2canvas(el, {
	 	onrendered: function(canvas) {
	 		var src = canvas.toDataURL();
    		$(el).replaceWith("<img class='example-img' src='" + src + "' />");
		}
	})	
}