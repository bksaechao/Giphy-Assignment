var topics = ["Anime", "Basketball", "Music", "Food", "Sushi"]

$(document).ready(function () {
    for (i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.text(topics[i]);
        $("#button-list").prepend(btn);
    }
});