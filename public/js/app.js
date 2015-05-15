$(function() {
    Phrases.all();
    View.init();
});

function View() {};

View.init = function() {
    $("#phrase-form").on("submit", function(e) {
        e.preventDefault();
        var phraseParams = $(this).serialize();
        Phrases.create(phraseParams);
    });
}
View.render = function(items, parentId, templateId) {
    var template = _.template($("#" + templateId).html());
    $("#" + parentId).html(template({
        collection: items
    }));
    console.log(items);
};

function Phrases() {};
Phrases.all = function() {
    $.get("/phrases", function(res) {
        var phrases = JSON.parse(res);
        View.render(phrases, "phrases-ul", "phrases-template");
    });
};

Phrases.create = function(phraseParams) {
    $.post("/phrases", phraseParams).done(function(res) {
        Phrases.all();
    }).done(function(res) {
        $("#phrase-form")[0].reset();
    });
}
Phrases.delete = function(phrase) {
    var phraseId = $(phrase).data().id;
    $.ajax({
        url: '/phrases/' + phraseId,
        type: 'DELETE',
        success: function(res) {
            Phrases.all();
        }
    });
}


