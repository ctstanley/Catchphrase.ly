var express = require("express");
var app = express();
var path = require("path");
var _ = require("underscore");
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true}));

var phrases = [];

app.get("/", function (req, res) {
	res.send("Hello World");
});

app.listen(3000, function (req, res) {
	console.log("working!!")
});