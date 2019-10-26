//Initial array of topics
var topics = ["Coding", "Toonami", "Sleep", "Halloween", "Sushi", "Tetris", "Beer", "Music", "Eeyore"]

//Button maker
function displayBtn() {
    //clears the container before adding in new topics to prevent duplicates
    $("#button-list").empty();
    //Iterates through each item in the array and creates a button and displays it in the DOM
    for (var i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("new-button");
        btn.text(topics[i]);
        $("#button-list").append(btn);
        console.log(topics[i])
    }
}

//Function to add a new topic & button to the DOM
function addBtn() {
    $("#submit").text("");
    topics.push($("#topic").val().trim());
    displayBtn();
}

//Displaying the topic on the DOM
function displayGif(name) {
    //Linking the API
    var apiKey = "JH9N0IxrYLjd5odOGP5tthHGw4ZUxFUj"
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + name + '&api_key=' + apiKey + '&limit=10'
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) {
            console.log("test", response);

            var results = response.data;
            for (var j = 0; j < results.length; j++) {
                var gifURL = results[j].images.original_still.url
                var gif = $("<img>");
                gif.attr('src', gifURL);
                $("#giphy-list").append(gif);
            }
        });
}


$(document).ready(function () {
    displayBtn();
    $("#submit").on("click", function () {
        event.preventDefault();
        addBtn();
    });

    // fixes event delegation
    $(document).on("click", ".new-button", function () {
        $("#giphy-list").empty();
        displayGif($(this).text());
    })
});