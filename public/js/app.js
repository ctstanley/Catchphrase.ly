$(function() {
    var $newPhrase = $("#phrase-form");
    var $phraseUl = $("#phraseUl");
    var phrases = [];

    var phraseTemp = _.template($("#phrases-template").html());

    $.get("/phrases").done(function (phrases) {
        _(phrases).each(function (phrase) {
            var $phrase = $(phraseTemp(phrase));
            $phrase.data("_id", phrase._id);
            $phraseUl.append($phrase);
        });
    });

    $newPhrase.on("submit", function (e) {
        e.preventDefault();

        var phraseData = $newPhrase.serialize();

        $.post("/phrases", phraseData).don(function (data) {
            $newPhrase[0].reset();
            var $phrase = $(phraseTemp(data));
            console.log(data);

            $phrase.data("_id", data._id);
            $phraseUl.append($phrase);
            phrases.push(data);
        });
    });

    $phraseUl.on("click", ".close", function (e) {
        var $phrase = $(this).closest(".close");
        var _id = $phrase.data("_id");
        $.ajax({
            url: "/phrases/" +_id,
            type: "DELETE"
        }).done(function () {
            $phrase.remove();
        });
    });

});

