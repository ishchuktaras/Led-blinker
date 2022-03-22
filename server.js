// Vyžaduje HTTP jako moduly serveru WebSocket
var express = require("express");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Poskytujte statická aktivy ze složky „public“.
app.use("/", express.static('public'));