window.onload = function() {	
	var message = location.hash.slice(1,location.hash.length)
	document.getElementById("message").innerHTML = message
}