// Muaz Khan     - https://github.com/muaz-khan
// MIT License   - https://www.WebRTC-Experiment.com/licence/
// Source Code   - https://github.com/muaz-khan/Chrome-Extensions


TabCaptureManager = function(dataManager, socket) {
    var m = dataManager;

    // RTCMultiConnection - www.RTCMultiConnection.org
    var connection;
    var popup_id;

    chrome.browserAction.onClicked.addListener(function(tab) {  
        if (connection && connection.attachStreams[0]) {
            connection.attachStreams[0].stop();
            m.tabSet(tab.id, {needsHelp: false});
            setDefaults();                        
            return;
        } else {
            state = m.globalGet()                
            console.log("initiating TAB capture");
            if (state.studentName) {                
                chrome.browserAction.setTitle({
                    title: 'Capturing Tab'
                });

                chrome.browserAction.setIcon({
                    path: 'question-active.png'
                });

                chrome.tabs.getSelected(null, function(tab) {
                    captureTab(state, tab.id);                        
                });  
            } else {
                Display("To request help, first open the toolbar by pressing <esc>, then set your name.");
            }
        }        
    });   

    var constraints;
    var min_bandwidth = 512;
    var max_bandwidth = 1048;

    function captureTab(state, tabId) {        
        constraints = { 
            audio: false,
            video: true,
            videoConstraints: {
                mandatory: {
                    chromeMediaSource: 'tab',
                    maxWidth: screen.width > 1920 ? screen.width : 1920,
                    maxHeight: screen.height > 1080 ? screen.height : 1080,
                    minFrameRate: 30,
                    maxFrameRate: 64,
                    minAspectRatio: 1.77,
                    googLeakyBucket: true,
                    googTemporalLayeredScreencast: true
                }
            }
        };

        chrome.tabCapture.capture(constraints, gotStream);
        

        function gotStream(stream) {
            if (!stream) {
                setDefaults();
                Display("An error occurred while attempting to screen capture");
               
                return;
            }

            chrome.browserAction.setTitle({
                title: 'Connecting to WebSockets server.'
            });

            stream.onended = function() {
                setDefaults();                
            };

            // as it is reported that if you drag chrome screen's status-bar
            // and scroll up/down the screen-viewer page.
            // chrome auto-stops the screen without firing any 'onended' event.
            // chrome also hides screen status bar.
            chrome.windows.create({
                url: chrome.extension.getURL('_generated_background_page.html'),
                type: 'popup',
                focused: false,
                width: 1,
                height: 1,
                top: parseInt(screen.height),
                left: parseInt(screen.width)
            }, function(win) {
                var background_page_id = win.id;

                setTimeout(function() {
                    chrome.windows.remove(background_page_id);
                }, 3000);
            });

            setupRTCMultiConnection(stream, state.studentName, tabId);                        
            // switch to pause button here

            // chrome.browserAction.setIcon({
            //     path: 'images/pause22.png'
            // });
        }
    }

    function setupRTCMultiConnection(stream, roomId, tabId) {        
        // www.RTCMultiConnection.org/docs/
        connection = new RTCMultiConnection();

        connection.optionalArgument = {
            optional: [{
                DtlsSrtpKeyAgreement: true
            }, {
                googImprovedWifiBwe: true
            }, {
                googScreencastMinBitrate: 300
            }, {
                googIPv6: true
            }, {
                googDscp: true
            }, {
                googCpuUnderuseThreshold: 55
            }, {
                googCpuOveruseThreshold: 85
            }, {
                googSuspendBelowMinBitrate: true
            }, {
                googCpuOveruseDetection: true
            }],
            mandatory: {}
        };

        connection.channel = connection.sessionid = connection.userid;

        // if (roomId && roomId.length) {
        //     connection.channel = connection.sessionid = connection.userid = roomId;
        // }

        connection.autoReDialOnFailure = true;
        connection.getExternalIceServers = false;

        setBandwidth(connection);

        // www.RTCMultiConnection.org/docs/session/
        connection.session = {
            video: true,
            oneway: true
        };

        // www.rtcmulticonnection.org/docs/sdpConstraints/
        connection.sdpConstraints.mandatory = {
            OfferToReceiveAudio: false,
            OfferToReceiveVideo: false
        };

        // www.RTCMultiConnection.org/docs/dontCaptureUserMedia/
        connection.dontCaptureUserMedia = true;

        // www.RTCMultiConnection.org/docs/attachStreams/
        connection.attachStreams.push(stream);

        // www.RTCMultiConnection.org/docs/openSignalingChannel/
        var onMessageCallbacks = {};
        // var pub = 'pub-c-e34a131f-b2be-4ea4-9f41-0aa84b0be7e5';
        // var sub = 'sub-c-57b77bd4-e72c-11e5-aad5-02ee2ddab7fe';

        // WebSocket = PUBNUB.ws;
        // var websocket = new WebSocket('wss://pubsub.pubnub.com/' + pub + '/' + sub + '/' + connection.channel);

        var connectedUsers = 0;
        connection.ondisconnected = function() {
            connectedUsers--;        
        };

        // websocket.onmessage = function(e) {
            // data = JSON.parse(e.data);

            // if (data === 'received-your-screen') {
            //     connectedUsers++;            
            // }

            // if (data.sender == connection.userid) return;

            // if (onMessageCallbacks[data.channel]) {
            //     onMessageCallbacks[data.channel](data.message);
            // };
        // };

        // websocket.push = websocket.send;
        // websocket.send = function(data) {
        //     data.sender = connection.userid;
        //     websocket.push(JSON.stringify(data));
        // };

        // overriding "openSignalingChannel" method
        connection.openSignalingChannel = function(config) {            
            // var channel = config.channel || this.channel;            

            var pubKey = 'pub-c-e34a131f-b2be-4ea4-9f41-0aa84b0be7e5'
            var subKey = 'sub-c-57b77bd4-e72c-11e5-aad5-02ee2ddab7fe'

            var pubnub_setup = {
                  channel       : "class_channel",
                  publish_key   : pubKey,
                  subscribe_key : subKey
              };

            var socket = io.connect( 'http://pubsub.pubnub.com', pubnub_setup );

            // socket.emit('new-channel', {
            //     channel: channel,
            //     sender : sender
            // });

            // connection.channel = connection.sessionid = connection.userid;            

            socket.on('connect', function () {
                console.log("sender is", connection.sessionId);
                if (config.callback) config.callback(socket);

                // var sessionDescription = connection.open({
                //     dontTransmit: true
                // });

                m.tabSet(tabId, {needsHelp: connection.sessionid});
            });

            socket.send = function (message) {
                console.log("sending message", connection.sessionid, message)
               socket.emit('message', {
                   sender: connection.sessionid,
                   data  : message,
                   channel: "class_channel"
               });
            };

            socket.on('message', function(message) {
                console.log("got message!", message)
                config.onmessage(message);
            });


            // var channel = config.channel || this.channel;
            // onMessageCallbacks[channel] = config.onmessage;

            // if (config.onopen) setTimeout(config.onopen, 1000);

            // // directly returning socket object using "return" statement
            // return {
            //     send: function(message) {
            //         websocket.send({
            //             sender: connection.userid,
            //             channel: channel,
            //             message: message
            //         });

            //         // socketManager.sendMessage({
            //         //     sender: connection.userid,
            //         //     channel: channel,
            //         //     message: message
            //         // });
            //     },
            //     channel: channel
            // };
        };

        connection.open();

        // websocket.onerror = function() {
        //     if (connection && connection.numberOfConnectedUsers > 0) {
        //         return;
        //     }

        //     // chrome.windows.create({
        //     //     url: "data:text/html,<h1>Failed connecting the WebSockets server. Please click screen icon to try again.</h1>",
        //     //     type: 'popup',
        //     //     width: screen.width / 2,
        //     //     height: 170
        //     // });
        //     console.log("Failed to connect!");
        //     m.tabSet(tabId, {needsHelp: false});

        //     setDefaults();
        //     // chrome.runtime.reload();
        // };

        // websocket.onclose = function() {
        //     if (connection && connection.numberOfConnectedUsers > 0) {
        //         return;
        //     }

        //     console.log("the websocket closed!");
        //     m.tabSet(tabId, {needsHelp: false});

        //     setDefaults();
        //     // chrome.runtime.reload();
        // };

        // websocket.onopen = function() {
            // chrome.browserAction.enable();        

            // console.info('WebSockets connection is opened.');

            // www.RTCMultiConnection.org/docs/open/
            // var sessionDescription = connection.open({
            //     dontTransmit: true
            // });

            // m.tabSet(tabId, {needsHelp: connection.sessionid});

            // var resultingURL = 'https://www.webrtc-experiment.com/!/?s=' + connection.sessionid;

            // if (room_password && room_password.length) {
            //     resultingURL += '&p=' + room_password;
            // }

            // var popup_width = 600;
            // var popup_height = 170;

            // chrome.windows.create({
            //     url: "data:text/html,<title>Unique Room URL</title><h1 style='text-align:center'>Copy following private URL:</h1><input type='text' value='" + resultingURL + "' style='text-align:center;width:100%;font-size:1.2em;'><p style='text-align:center'>You can share this private-session URI with fellows using email or social networks.</p>",
            //     type: 'popup',
            //     width: popup_width,
            //     height: popup_height,
            //     top: parseInt((screen.height / 2) - (popup_height / 2)),
            //     left: parseInt((screen.width / 2) - (popup_width / 2)),
            //     focused: true
            // }, function(win) {
            //     popup_id = win.id;
            // });
        // };        
    }

    function setDefaults() {
        if (connection) {
            connection.close();
            connection.attachStreams = [];
        }

        chrome.browserAction.setIcon({
            path: 'question-inactive.png'
        });

        if (popup_id) {
            try {
                chrome.windows.remove(popup_id);
            } catch (e) {}

            popup_id = null;
        }

        chrome.browserAction.setTitle({
            title: 'Get Help!'
        });    
    }

    function setBandwidth(connection) {
        // www.RTCMultiConnection.org/docs/bandwidth/
        connection.bandwidth = {
            screen: min_bandwidth // 300kbps
        };

        connection.processSdp = function(sdp) {
            sdp = setSendBandwidth(sdp);
            return sdp;
        };

        function setSendBandwidth(sdp) {
            var sdpLines = sdp.split('\r\n');

            // VP8
            var vp8Index = findLine(sdpLines, 'a=rtpmap', 'VP8/90000');
            var vp8Payload;
            if (vp8Index) {
                vp8Payload = getCodecPayloadType(sdpLines[vp8Index]);
            }

            var rtxIndex = findLine(sdpLines, 'a=rtpmap', 'rtx/90000');

            var rtxPayload;
            if (rtxIndex) {
                rtxPayload = getCodecPayloadType(sdpLines[rtxIndex]);
            }

            if (!rtxPayload) {
                return sdp;
            }

            if (!vp8Payload) {
                return sdp;
            }

            var rtxFmtpLineIndex = findLine(sdpLines, 'a=fmtp:' + rtxPayload.toString());
            if (rtxFmtpLineIndex !== null) {
                var appendrtxNext = '\r\n';

                if (max_bandwidth < min_bandwidth) {
                    max_bandwidth = min_bandwidth;
                }

                appendrtxNext += 'a=fmtp:' + vp8Payload + ' x-google-min-bitrate=' + min_bandwidth + '; x-google-max-bitrate=' + max_bandwidth;
                sdpLines[rtxFmtpLineIndex] = sdpLines[rtxFmtpLineIndex].concat(appendrtxNext);
                sdp = sdpLines.join('\r\n');
            }
            return sdp;
        }

        function findLine(sdpLines, prefix, substr) {
            return findLineInRange(sdpLines, 0, -1, prefix, substr);
        }

        function findLineInRange(sdpLines, startLine, endLine, prefix, substr) {
            var realEndLine = endLine !== -1 ? endLine : sdpLines.length;
            for (var i = startLine; i < realEndLine; ++i) {
                if (sdpLines[i].indexOf(prefix) === 0) {
                    if (!substr ||
                        sdpLines[i].toLowerCase().indexOf(substr.toLowerCase()) !== -1) {
                        return i;
                    }
                }
            }
            return null;
        }

        function getCodecPayloadType(sdpLine) {
            var pattern = new RegExp('a=rtpmap:(\\d+) \\w+\\/\\d+');
            var result = sdpLine.match(pattern);
            return (result && result.length === 2) ? result[1] : null;
        }
    }    
}

