var REPL = require("repl");
var db = require("./models");

var repl = REPL.start("Phrases > ");
repl.context.db = db;

repl.on("exit", function () {
  console.log("Au Revoir");
  process.exit();
})