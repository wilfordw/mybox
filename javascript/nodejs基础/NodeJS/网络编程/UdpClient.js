// udpClient.js
"use strict";
var dgram = require('dgram');

var client = dgram.createSocket('udp4');
var message = new Buffer('hello shiyanlou');

client.send(message, 0, message.length, 41234, 'localhost', function (err, bytes) {
    client.close();
});
