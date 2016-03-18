var $ = require("jquery");
var io = require("socket.io-client");
var Display = require("./ScreenshareDisplay.js");
require("./pubnub-socket.io");

console.log("hereherererere");

$(function() {
	new Display();	
})

