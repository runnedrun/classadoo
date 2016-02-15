domain = "http://localhost:3000";
domain_name = "localhost";
resourceDownloaderAddress = "http://localhost:3000";

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
		if (request.ajaxRequest) {
			Requests[request.ajaxRequest.requestName](request.ajaxRequest.args, function(resp) {
				if (resp) {
					sendResponse(resp)	
				} else {
					sendResponse({ failure: true });
				}
			})

			return true
   		}

   		if (request.storage) {             
   			LocalStorageAccess[request.storage.method + Util.capitalizeFirstLetter(request.storage.prop)](request.storage.data).then(sendResponse)
   			return true
   		}

      if (request.getToolbarHtml) {        
        var tabId = sender.tab.id
        getToolbarIframeHtml(function(html) {
          chrome.tabs.sendMessage(tabId, { html: html}, function() {});          
        })        
      return true
      }
   }
);

chrome.browserAction.onClicked.addListener(function(tab) {  
  LocalStorageAccess.getOpen().then(function(isOpen) {
    console.log("isopen", isOpen);
    if (isOpen) {
      console.log("closing the tab");      
      LocalStorageAccess.forwardSet("toolbarOpen", false);
    } else {
      console.log("opening the tab");      
      LocalStorageAccess.forwardSet("toolbarOpen", true);
    }    
  })
  
});

// chrome.runtime.onMessageExternal.addListener(
//    function(request, sender, sendResponse) {
//        if (request.logInFromWebsite) {
//            console.log("getting a request to log in from the website");
//            signIn(request.logInFromWebsite);
//        }
//    }
// );

function sendMessageToAllTabs(message){
    chrome.windows.getAll({populate: true}, function(windows){
        $.each(windows,function(index,window){
            $.each(window.tabs, function() {                
                chrome.tabs.sendMessage(this.id, message, function() {});
            });
        })
    } )
}

function getToolbarIframeHtml(callback) {
    var toolbarDoc = document.implementation.createHTMLDocument().documentElement;
    var messageScreenDoc = document.implementation.createHTMLDocument().documentElement;
    var bootstrapCss = $("<link rel='stylesheet'></link>");
    var toolbarCss = $("<link rel='stylesheet'></link>");
    bootstrapCss.attr("href", chrome.extension.getURL("css/bootstrap.min.css"));
    toolbarCss.attr("href", chrome.extension.getURL("css/toolbar.css"));    

    var deferredToolbarHtml = $.ajax({
        url: "/html/toolbar.html",
        type: "get",
        success: function(html) {
            toolbarDoc.innerHTML = html;
            var $html = $(toolbarDoc);
            addTagsToHead($html, [bootstrapCss, toolbarCss])
        }
    });

    $.when.apply($, [deferredToolbarHtml]).always(function(){
        var fullToolbarHtml = encodeURI(toolbarDoc.outerHTML);
        callback(fullToolbarHtml);
    });
}

function addTagsToHead($html, tags) {
    var tagString = "";
    $.each(tags, function(i, tag) {
        tagString += tag[0].outerHTML
    });
    var head = $html.find('head');
    head[0].innerHTML = tagString;
}