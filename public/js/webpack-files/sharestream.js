console.log("Asfadsfasfasdfasdf")
window.addEventListener("message", function(event) {	
  // We only accept messages from ourselves
  console.log("got evenTTTT!");
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "openStream")) {
    console.log("page got" + event.data);

  var streamId = event.data.streamId
  console.log("stream ID", streamId);

	navigator.webkitGetUserMedia({
        audio: false,
        video: {
            mandatory: {
               chromeMediaSource: "desktop",
               chromeMediaSourceId: streamId,
               maxWidth: 1920,
               maxHeight: 1080
           },
           optional: [{
               googTemporalLayeredScreencast: true
           }]
        }   
	}, 
    function(stream) {
        console.log("STREEEAM", stream)
    },
    function onError(errors) {
        console.log('Failed to get user media.', errors);
    })
    // port.postMessage(event.data.text);
  }
}, false);