var express = require("express");
var app = express();
var path = require("path");
var db = require("./models");
var _ = require("underscore");
var bodyParser = require("body-parser");

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.static("bower_components"));


app.get("/", function (req, res) {
	res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/phrases", function (req, res) {
	db.Phrases.find({},
    function (err, phrase) {
      res.send(phrase);
    });
});


app.post("/phrases", function (req, res){
  db.Phrases.create(req.body.phrase,
    function (err, phrase) {
      res.send(201, phrase)
    });
});

app.delete("/phrases/:id", function (req, res){
  db.Phrases.findOneAndRemove({
    _id: req.params._id
  }, function (err, phrase) {
    res.send(204)
  });
});

app.listen(3000, function (req, res) {
	console.log("port 3000 yo")
});