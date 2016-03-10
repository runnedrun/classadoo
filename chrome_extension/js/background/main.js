appDomain = "http://localhost:3000";
lessonsDomain = "http://localhost:4000";
lessonsEnv = "dev"

var LessonRequest = new Request(lessonsDomain, "text", lessonsEnv === "dev");
var AppRequest = new Request(appDomain);
new LessonLoader(AppRequest, LessonRequest, lessonsEnv);
new SocketManager(appDomain);
new ScreensharePrompter();

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
   			LocalStorageAccess[request.storage.method + Util.capitalizeFirstLetter(request.storage.prop)](request.storage.data)
        .then(function(data) {
          data.tabId = sender.tab.id;
          sendResponse(data);
        })
   			return true
   		}

      if (request.tabStorage) {             
        LocalStorageAccess[request.storage.method + Util.capitalizeFirstLetter(request.storage.prop)](request.storage.data, sender.tab.id)
        .then(function(data) {
          data.tabId = sender.tab.id;
          sendResponse(data);
        })
        return true
      }

      if (request.getTabId) {
        sendResponse({tabId: sender.tab.id});
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
  LocalStorageAccess.getOpen(tab.id).then(function(isOpen) {    
    if (isOpen) {      
      LocalStorageAccess.forwardSet("toolbarOpen", false, tab.id);
    } else {      
      LocalStorageAccess.forwardSet("toolbarOpen", true, tab.id);
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
                message.tabId = this.id;
                chrome.tabs.sendMessage(this.id, message, function() {});
            });
        })
    } )
}

function sendMessage(tabId, message){
    chrome.tabs.sendMessage(tabId, message, function() {});            
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