var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos_app");

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos_app");

var phraseSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ""
  },
  definition: {
    type: String,
    default: ""
  },
  completed: {
    type: Boolean,
    default: false
  }
});

var Phrases = mongoose.model("Phrases", phraseSchema);

module.exports.Phrases = Phrases;