var topics = ["Coding", "Toonami", "Sleep", "Halloween", "Sushi", "Tetris", "Beer", "Music", "Moo"]

$(document).ready(function () {
    //Iterates through each array element and displays them on the DOM
    for (i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.text(topics[i]);
        $("#button-list").append(btn);
        console.log(topics[i])
    }

    //linking the API
    var apiKey = "JH9N0IxrYLjd5odOGP5tthHGw4ZUxFUj"
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + topics + '&api_key=' + apiKey + '&limit=10'
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) {
            console.log(queryURL)
        });
});