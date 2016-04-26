var env = "prod"

var lessonsPrefix
var hintPrefix



while (!chrome.runtime.getPlatformInfo) {
  // just putting this in here to make sure everything is ready before moving on    
}

var dataManager;

chrome.management.getSelf(function(info) {  
  if (info.installType === "development") {
    lessonsPrefix = "http://localhost:8000/lib/dev/";  
    hintPrefix = "http://localhost:8000/samples/";      
  } else {    
    lessonsPrefix = "https://classadoo.github.io/lessons/lib/prod/";
    hintPrefix = "https://classadoo.github.io/lessons/samples/";
  }

  console.log("less", lessonsPrefix);

  var LessonRequest = new Request(lessonsPrefix, "text", false);
  dataManager = new DataManager();

  Message = new Message(dataManager);
  new HintManager(dataManager, hintPrefix)
  new LessonLoader(LessonRequest, dataManager);
  new ScreenshareManager();
  new TabCaptureManager(dataManager);
  new VolatileProperties(dataManager);
  new GotoUrlManger(dataManager);
  new ScratchpadAppendManager(dataManager);
  new PopupMessageManager(dataManager);  
  new ScreenshotManager(dataManager);  
})

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {              
      if (request.getToolbarHtml) {        
        var tabId = sender.tab.id
        getToolbarIframeHtml(function(html) {
          chrome.tabs.sendMessage(tabId, {html: html}, function() {});          
        })        
        return true
      }      

      if (request.getGogglesUrl) {        
        var tabId = sender.tab.id
        getToolbarIframeHtml(function(html) {
          chrome.tabs.sendMessage(tabId, {html: html}, function() {});          
        })        
        return true
      }      
   }
);

chrome.browserAction.onClicked.addListener(function(tab) {   
  if (dataManager.tabGet(tab.id).toolbarOpen){
    dataManager.tabSet(tab.id, {"toolbarOpen": false});
  } else {
    dataManager.tabSet(tab.id, {"toolbarOpen": true});
  }  
})

function getGoggles() {  
    var scriptUrl = chrome.extension.getURL("/x-ray/static-files/webxray.js");
    return "<script src='" + scriptUrl + "' type='text/javascript'></script>"    
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