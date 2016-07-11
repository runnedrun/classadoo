$(function() {
	$(".submit-request").click(function() {			
		// first validate all the inputs		

		if (!$(".request-form").valid()) {
			$(".info-error").show();
			$(".general-error").show();
		} else {		
			$(".info-error").hide();
			$(".general-error").hide();
			var data = $(".request-form").serialize();
			// var formspree = submitFormSpree(data);
			
			$(".submit-request").removeClass("btn-primary").addClass("btn-warning");
			$(".submit-request").html("Submitting...")

			submitGoogleForm(data).then(function(res) {
				$(".submit-request").removeClass("btn-warning").addClass("btn-success");
				$(".submit-request").attr("disabled", "true");
				$(".submit-request").off("click");
				$(".form-group input").attr("disabled", "true");
				$(".form-group textarea").attr("disabled", "true");
				$(".submit-request").html("Success!")
			});			
		}	
	})
})

function submitFormSpree(data) {
	return $.ajax({				
		type: "post",
		url: "//formspree.io/info@classadoo.com",
		data: data,
		"dataType": "text"
	})
}

function submitGoogleForm(data) {
	return $.ajax({				
		type: "post",
		url: "https://script.google.com/macros/s/AKfycbxBvKoOIcyWzdvMbbH4SkiHqzPpAgv9EblqWYFVUhEdTZdZ9s6t/exec",
		data: data,
		"dataType": "text"		
	})
}
