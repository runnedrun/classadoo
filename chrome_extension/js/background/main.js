appDomain = "https://localhost:3000";
lessonsDomain = "http://localhost:4000";
lessonsEnv = "dev"

var pubKey = 'pub-c-e34a131f-b2be-4ea4-9f41-0aa84b0be7e5'
var subKey = 'sub-c-57b77bd4-e72c-11e5-aad5-02ee2ddab7fe'

var pubnub_setup = {
      channel       : 'class_channel',
      publish_key   : pubKey,
      subscribe_key : subKey
  };

var socket = io.connect( 'http://pubsub.pubnub.com', pubnub_setup );

var LessonRequest = new Request(lessonsDomain, "text", lessonsEnv === "dev");
var AppRequest = new Request(appDomain);
var dataManager = new DataManager();
new LessonLoader(AppRequest, LessonRequest, lessonsEnv, dataManager);
var socketManager = new SocketManager(socket, dataManager);
new ServerDataSync(dataManager, socketManager)
new TabCaptureManager(dataManager, socketManager);
new VolatileProperties(dataManager);

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