$(function () {
  Phrases.all();
});


function View() {};
View.render = function(items, parentId, templateId) {
  var template = _.template($("#" + templateId).html());
  $("#" + parentId).html(template({collection: items}));
  console.log(items);
};

function Phrases() {};
Phrases.all = function() {
  $.get("/phrases", function(res){ 
    var phrases = JSON.parse(res);
    View.render(phrases, "phrases-ul", "phrases-template");
  });
};