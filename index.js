var express = require("express");
var app = express();
var path = require("path");
// var db = require("./models");
var _ = require("underscore");
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("bower_components"));

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


app.post("/phrases", function (req, res){
  var newPhrase = req.body;
  newPhrase.id = phrases[phrases.length - 1].id + 1;
  phrases.push(newPhrase);
  res.send(JSON.stringify(newPhrase));
});

app.delete("/phrases/:id", function (req, res){
  var targetId = parseInt(req.params.id, 10);
  var targetItem = _.findWhere(phrases, {id: targetId});
  var index = phrases.indexOf(targetItem);
  phrases.splice(index, 1);
  res.send(JSON.stringify(targetItem));
});

app.listen(3000, function (req, res) {
	console.log("port 3000 yo")
});