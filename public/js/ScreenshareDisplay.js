var $ = require("jquery");
require("./RTCMultiConnection.js");
require("./websockets.min.js");

module.exports = function() {
    var params = {},
        r = /([^&=]+)=?([^&]*)/g;

    function d(s) {
        return decodeURIComponent(s.replace(/\+/g, ' '));
    }

    var match, search = window.location.search;
    while (match = r.exec(search.substring(1)))
        params[d(match[1])] = d(match[2]);

    window.params = params;

    function setBandwidth(connection) {
        // www.RTCMultiConnection.org/docs/bandwidth/
        connection.bandwidth = {
            screen: 300 // 300kbps
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
                appendrtxNext += 'a=fmtp:' + vp8Payload + ' x-google-min-bitrate=300; x-google-max-bitrate=300';
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

    function init(){
        // http://www.rtcmulticonnection.org/docs/constructor/
        var connection = new RTCMultiConnection(params.s);

        setBandwidth(connection);

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

        connection.ondisconnected = function(event) {
            infoBar.innerHTML = 'Screen sharing has been closed.';
            infoBar.style.display = 'block';
            location.reload();
        };

        // DOM objects
        var remoteVideo = document.getElementById('remoteVideo');
        var card = document.getElementById('card');
        var containerDiv;

        if (navigator.mozGetUserMedia) {
            attachMediaStream = function(element, stream) {
                console.log("Attaching media stream");
                element.mozSrcObject = stream;
                element.play();
            };
            reattachMediaStream = function(to, from) {
                console.log("Reattaching media stream");
                to.mozSrcObject = from.mozSrcObject;
                to.play();
            };
        } else if (navigator.webkitGetUserMedia) {
            attachMediaStream = function(element, stream) {
                if (typeof element.srcObject !== 'undefined') {
                    element.srcObject = stream;
                } else if (typeof element.mozSrcObject !== 'undefined') {
                    element.mozSrcObject = stream;
                } else if (typeof element.src !== 'undefined') {
                    element.src = URL.createObjectURL(stream);
                } else {
                    console.log('Error attaching stream to element.');
                }
            };
            reattachMediaStream = function(to, from) {
                to.src = from.src;
            };
        } else {
            console.log("Browser does not appear to be WebRTC-capable");
        }
        // onstream event; fired both for local and remote videos

        var infoBar = document.getElementById('info-bar');

        connection.onstatechange = function(state) {
            infoBar.innerHTML = state.name + ': ' + state.reason;

            if(state.name == 'request-rejected' && params.p) {
                infoBar.innerHTML = 'Password (' + params.p + ') did not match with broadcaster, that is why your participation request has been rejected.<br>Please contact him and ask for valid password.';
            }

            if(state.name === 'room-not-available') {
                infoBar.innerHTML = 'Screen share session is closed or paused. You will join automatically when share session is resumed.';
            }
        };

        connection.onstreamid = function(event) {
            infoBar.innerHTML = 'Remote peer is about to send his screen.';
        };

        connection.onstream = function(e) {
            if (e.type == 'remote') {
                infoBar.style.display = 'none';
                remoteStream = e.stream;
                attachMediaStream(remoteVideo, e.stream);
                waitForRemoteVideo();
                remoteVideo.setAttribute('data-id', e.userid);
                
                websocket.send('received-your-screen');
            }
        };
        // if user left
        connection.onleave = function(e) {
            transitionToWaiting();
        };

        connection.onSessionClosed = function() {
            infoBar.innerHTML = 'Screen sharing has been closed.';
            infoBar.style.display = 'block';
            location.reload();
        };

        connection.onstreamended = function() {};

        // using websockets as signaling medium
        // http://www.rtcmulticonnection.org/docs/openSignalingChannel/
        // using websockets for signaling
        // www.RTCMultiConnection.org/docs/openSignalingChannel/
        var onMessageCallbacks = {};
        var pub = 'pub-c-e34a131f-b2be-4ea4-9f41-0aa84b0be7e5';
        var sub = 'sub-c-57b77bd4-e72c-11e5-aad5-02ee2ddab7fe';

        WebSocket = PUBNUB.ws;
        var websocket = new WebSocket('wss://pubsub.pubnub.com/' + pub + '/' + sub + '/' + connection.channel);

        websocket.onmessage = function(e) {
            data = JSON.parse(e.data);

            if (data.sender == connection.userid) return;

            if (onMessageCallbacks[data.channel]) {
                onMessageCallbacks[data.channel](data.message);
            };
        };

        websocket.push = websocket.send;
        websocket.send = function(data) {
            data.sender = connection.userid;
            websocket.push(JSON.stringify(data));
        };

        // overriding "openSignalingChannel" method
        connection.openSignalingChannel = function(config) {
            var channel = config.channel || this.channel;
            onMessageCallbacks[channel] = config.onmessage;

            if (config.onopen) setTimeout(config.onopen, 1000);

            // directly returning socket object using "return" statement
            return {
                send: function(message) {
                    websocket.send({
                        sender: connection.userid,
                        channel: channel,
                        message: message
                    });
                },
                channel: channel
            };
        };

        websocket.onerror = function() {
            if(connection.numberOfConnectedUsers <= 0) {
                location.reaload();
            }
        };

        websocket.onclose = function() {
            if(connection.numberOfConnectedUsers <= 0) {
                location.reaload();
            }
        };

        infoBar.innerHTML = 'Connecting WebSockets server.';

        websocket.onopen = function() {
            infoBar.innerHTML = 'WebSockets connection is opened.';

            var sessionDescription = {
                userid: params.s,
                extra: {},
                session: {
                    video: true,
                    oneway: true
                },
                sessionid: params.s
            };

            if (params.s) {
                infoBar.innerHTML = 'Joining session: ' + params.s;
                
                if(params.p) {
                    // it seems a password protected room.
                    connection.extra.password = params.p;
                }

                // http://www.rtcmulticonnection.org/docs/join/
                connection.join(sessionDescription);
            }
        };
    }

    function waitForRemoteVideo() {
        // Call the getVideoTracks method via adapter.js.
        var videoTracks = remoteStream.getVideoTracks();
        if (videoTracks.length === 0 || remoteVideo.currentTime > 0) {
            transitionToActive();
        } else {
            setTimeout(waitForRemoteVideo, 100);
        }
    }

    function transitionToActive() {
        remoteVideo.style.opacity = 1;
        card.style.webkitTransform = 'rotateY(180deg)';
        window.onresize();
    }

    function transitionToWaiting() {
            card.style.webkitTransform = 'rotateY(0deg)';
            remoteVideo.style.opacity = 0;
        }
        // Set the video displaying in the center of window.
    window.onresize = function() {
        var aspectRatio;
        if (remoteVideo.style.opacity === '1') {
            aspectRatio = remoteVideo.videoWidth / remoteVideo.videoHeight;
        } else {
            return;
        }
        var innerHeight = this.innerHeight;
        var innerWidth = this.innerWidth;
        var videoWidth = innerWidth < aspectRatio * window.innerHeight ?
            innerWidth : aspectRatio * window.innerHeight;
        var videoHeight = innerHeight < window.innerWidth / aspectRatio ?
            innerHeight : window.innerWidth / aspectRatio;
        containerDiv = document.getElementById('container');
        containerDiv.style.width = videoWidth + 'px';
        containerDiv.style.height = videoHeight + 'px';
        containerDiv.style.left = (innerWidth - videoWidth) / 2 + 'px';
        containerDiv.style.top = (innerHeight - videoHeight) / 2 + 'px';
    };

    function enterFullScreen() {
        container.webkitRequestFullScreen();
    }

    init();
};