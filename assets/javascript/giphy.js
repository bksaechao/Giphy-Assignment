var topics = ["Anime", "Lucky Charms", "Music", "Halloween", "Sushi", "Video Games", "Heroes"]

$(document).ready(function () {
    for (i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.text(topics[i]);
        $("#button-list").append(btn);
        console.log(topics[i])
    }

    //API key
    var apiKey = "JH9N0IxrYLjd5odOGP5tthHGw4ZUxFUj"
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topics + '&api_key=JH9N0IxrYLjd5odOGP5tthHGw4ZUxFUj&limit=10'
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) { });
});