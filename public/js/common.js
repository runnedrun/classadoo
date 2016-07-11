$(function() {
	var dropdownToggled = false
	var dropdownButton = $(".dropdown-toggle");
	var dropdown = $(".dropdown-menu");

	dropdownButton.click(function() {	
		if (dropdownToggled) {
			dropdownToggled = false;
			dropdown.hide();
		} else {
			dropdown.show();
			dropdownToggled = true
		}
	})	

	var emailSignupButton = $(".signup-btn")
	emailSignupButton.click(function() {
		var emailField = $(".email-field");
		var email = emailField.val();		
		emailSignupButton.val("Submitting...")		
		emailSignupButton.off("click");

		emailList({Email: email}).then(function() {			
			emailSignupButton.attr("disabled", "true")
			emailField.attr("disabled", "true")
			emailSignupButton.val("Success!")					
		})
	})
})

function emailList	(data) {
	return $.ajax({				
		type: "post",
		url: "https://script.google.com/macros/s/AKfycbzPy--vFmSEzHM_Ca_kCeIL9i4pndboignN9LnzfPfo5_iqcyc/exec",
		data: data,
		"dataType": "text"		
	})
}
