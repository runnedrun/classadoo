var userId = location.hash.slice(1, location.hash.length)
console.log("userId", userId)
var ref = new Firebase('https://classadoo-challenge.firebaseIO.com/submissions/' + userId);			

$(function() {
	var challenges = $(".image-examples .challenge-row")

	challenges.each(function(i, el) {
		$el = $(el);
		var example = $el.find(".example");
		var solution = $el.find(".solution");

		replaceExampleWithImage(example[0]);
		$el.find(".submit-challenge").click(submitChallenge.bind({}, i, $el));
	})
})

function submitChallenge(challengeNumber, challengeRow) {
	console.log("submitting");
	var obj = {}

	var solution = challengeRow.find(".solution");
	var example = challengeRow.find(".example-img");

	ref.set({example: example.attr("src"), solution: solution[0].outerHTML});	
}

function replaceExampleWithImage(el) {	
	html2canvas(el, {
	 	onrendered: function(canvas) {
	 		var src = canvas.toDataURL();
    		$(el).replaceWith("<img class='example-img' src='" + src + "' />");
		}
	})	
}