ScratchPadJsRunner = function() {	
	var frame = $("#preview");
	var i = new IframeManager(frame);

	// if (location.host.indexOf("scratchpad") > -1) {
	// 	console.log("indjectint");
	// 	var script = $("<script>")
	// 	script.append("(" + changeEditorResponse.toString() + "())");
	// 	$("body").append(script);
	// }	

	function changeEditorResponse() {			
		editor.getSession().on('change', function(e) {	
			console.log("changing editor response");
		    iframedoc.open();
        	iframedoc.writeln(editor.getValue());
        	iframedoc.close();
		    // Resize the menu icon if appropriate
		    var linesOfCode = editor.session.getLength();
		    if (linesOfCode < 10) {
		      $('#menu').attr('class', 'small')
		    } else if ( linesOfCode > 9 && linesOfCode < 99) {
		      $('#menu').attr('class', 'medium')
		    } else if ( linesOfCode > 99 && linesOfCode < 999) {
		      $('#menu').attr('class', 'large')
		    } else if (linesOfCode > 999){
		      $('#menu').attr('class', 'x-large')
		    }
	  	});

		waitOnSession();
	}

	function run() {			
		console.log("running");		
		var html = i.$("html")[0].outerHTML		
		
		i.setIframeContent(html);
	}	

	respond("run.scratchpad.script", run)
}