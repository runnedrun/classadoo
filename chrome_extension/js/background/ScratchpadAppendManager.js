ScratchpadAppendManager = function(dataManager) {
	var m = dataManager

	m.listenOnGlobalProp("appendToScratchpad", function(appendToScratchpad) {
		if (appendToScratchpad) {
			chrome.tabs.query({active: true}, function(tabs) {			
				var textInserterString = genTextInserter(appendToScratchpad);
				var scriptInserterString = genScriptInserter(textInserterString);				
				chrome.tabs.executeScript(tabs[0].id, { code: scriptInserterString })				
			})		
		}		
	})	

	function genTextInserter(text) {
		var fun = function() {
			if (editor) {				
				var session = editor.session
				console.log("editinging!", session, editor);				
				session.insert({
				   row: 0,
				   column: 0
				}, "text" + "\\n");
			}
		}	
		
		return exectuteFunString(fun.toString().replace("text", Util.escape(text)));
	}	

	function exectuteFunString(fun) {
		return "(" + fun.toString() + ")()"
	}

	function genScriptInserter(scriptString) {
		var fun = function() {
			console.log("INSERING JSSS");
			var script = document.createElement('script');
			var code = document.createTextNode(`scriptString`);
			script.appendChild(code);
			(document.body || document.head).appendChild(script);
		}		

		return exectuteFunString(fun.toString().replace("scriptString", scriptString))
	}
}
