$(function () {
  Phrases.all();
  View.init();
});


function View() {};

View.init = function() {
  $("#phrase-form").on("submit", function(e){
    e.preventDefault();
    var phraseParams = $(this).serialize();
    Phrase.create(phraseParams);
  });
}
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

Phrase.create = function(phraseParams) {
  $.post("/phrases", phraseParams).done(function(res){
    // once done, re-render all foods
    Phrase.all();
  }).done(function(res){
    // reset form
    $("#food-form")[0].reset();
  });
}
Phrase.delete = function(phrase) {
  var phraseId = $(phrase).data().id;
  $.ajax({
    url: '/phrases/' + phraseId,
    type: 'DELETE',
    success: function(res) {
      Phrase.all();
    }
  })




