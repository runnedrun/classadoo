ScratchpadAppendManager = function(dataManager) {
	var m = dataManager

	m.listenOnGlobalProp("appendToScratchpad", function(appendToScratchpad) {
		if (appendToScratchpad) {
			chrome.tabs.query({url: "*://scratchpad.io/*"}, function(tabs) {			
				var textInserterString = genTextInserter(appendToScratchpad);
				var scriptInserterString = genScriptInserter(textInserterString);				
				tabs.forEach(function(tab) {
					chrome.tabs.executeScript(tab.id, { code: scriptInserterString })					
				})				
			})		
		}		
	})	

	function genTextInserter(text) {
		var fun = function() {
			if (editor) {				
				var session = editor.session
				
				session.insert({
				   row: 0,
				   column: 0
				}, "text" + "\\n");
				$(editor.container).keyup();
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
