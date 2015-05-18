var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/phrases_app");

var phraseSchema = new mongoose.Schema({
  word: {
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