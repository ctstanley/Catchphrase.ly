var express = require("express");
var app = express();
var path = require("path");
var _ = require("underscore");
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true}));

var phrases = [
	{id: 0, word: "Alan Turing", definition: "Genius computer scientist from WWII"},
	{id: 1, word: "GUI", definition: "Graphic User Interface"},
	{id: 2, word: "Github", definition: "Public repsitory for programming projects"},
	{id: 3, word: "D3", definition: "Javascript data visulization library"}
];

app.get("/", function (req, res) {
	res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/phrases", function (req, res) {
	res.send(JSON.stringify(phrases));
});


app.get("/", function (req, res) {
	var tmpl_str = $("#tmpl-loop").html();
	var compile = _.template(tmpl_str);
	var html_st = compile(phrases);
	$("body").html(html_st);
});

app.listen(3000, function (req, res) {
	console.log("port 3000 yo")
});