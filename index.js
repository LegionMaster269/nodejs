var express = require("express");
var app = express();

app.route('/Admin').get(function(req,res) {
	res.send("Admin Panel is on the move...");
});

app.route('/').get(function(req,res) {
	res.send("Welcome to HandyMan!");
});
var server = app.listen(80,function() {});


