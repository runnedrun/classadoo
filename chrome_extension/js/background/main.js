var env = "prod"

var lessonsPrefix;
var hintPrefix;
var firebasePrefix;

while (!chrome.runtime.getPlatformInfo) {
  // just putting this in here to make sure everything is ready before moving on    
}

var dataManager;

chrome.management.getSelf(function(info) {  
  if (info.installType === "development") {
    lessonsPrefix = "http://localhost:8000/lib/dev/";  
    hintPrefix = "http://localhost:8000/samples/";      
    firebasePrefix = "classadoo-dev.firebaseIO.com/"
  } else {    
    lessonsPrefix = "https://classadoo.github.io/lessons/lib/prod/";
    hintPrefix = "https://classadoo.github.io/lessons/samples/";
    firebasePrefix = "classadoo-prod.firebaseIO.com/"
  }

  console.log("less", lessonsPrefix);

  var LessonRequest = new Request(lessonsPrefix, "text", false);

  var storedClientId = localStorage.getItem("clientId");  

  var clientId;
  if (!storedClientId) {
    var clientId = Util.guid(); 
    localStorage.setItem("clientId", clientId)
  } else {
    clientId = storedClientId;
  }

  var clientRef = new Firebase(firebasePrefix + "users/" + clientId);
  var classRef = new Firebase(firebasePrefix + "class/");

  dataManager = new DataManager(clientRef, classRef);
  new ChatManager(clientRef) 
  
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
  new RemoteRestartManager(dataManager);       
})

chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {              
      if (request.init) {        
        var tabId = sender.tab.id
        var globalData = dataManager.globalGet();        
        var classData = dataManager.classGet();
        var tabData = dataManager.tabGet(tabId);

        $.when(
          getIframeHtml("toolbar", ["bootstrap.min", "toolbar"]), 
          getIframeHtml("chat", ["bootstrap.min", "chat"]), 
          getIframeHtml("scratch-preview", ["scratch-preview"])
        ).then(function(toolbarHtml, chatHtml, previewHtml) {
          chrome.tabs.sendMessage(tabId, {
            initData: { 
              toolbarHtml: toolbarHtml,
              chatHtml: chatHtml, 
              scratchPreviewHtml: previewHtml,
              globalData: Util.extend(globalData, classData), 
              tabData: tabData 
            } 
          });          
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

function getIframeHtml(fileName, cssFiles, jsFiles) {
  var doc = document.implementation.createHTMLDocument().documentElement;    
  var cssFiles = cssFiles || []
  var jsFiles = jsFiles || []

  var cssTags = cssFiles.map(function(fileName) {
    var tag = $("<link rel='stylesheet'></link>");
    tag.attr("href", chrome.extension.getURL("css/" + fileName + ".css"));  
    return tag
  })
  
  var jsTags = jsFiles.map(function(fileName) {
    var tag = $("<script type='text/javascript'></script>");
    tag.attr("src", chrome.extension.getURL("third_party/" + fileName + ".js"));  
    return tag
  })
  
  var deferredHtml = $.ajax({
      url: "/html/" + fileName + ".html",
      type: "get"      
  });

  return deferredHtml.then(function(html){
      doc.innerHTML = html;
      var $html = $(doc);
      var tags = cssTags.concat(jsTags);
      addTagsToHead($html, tags)
      return doc.outerHTML;      
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