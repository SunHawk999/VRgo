//Code for starting program
console.log("server started!");

var express = require('express');
var app = express();
var serv = require('http').Server(app);
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use('/', express.static(__dirname + '/'));
serv.listen(3000);