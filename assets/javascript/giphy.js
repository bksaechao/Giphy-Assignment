//Initial array of topics
var topics = ["Coding", "Toonami", "Sleep", "Halloween", "Sushi", "Tetris", "Beer", "Music", "Eeyore"]

//Button maker
function displayBtn() {
    //clears the container before adding in new topics to prevent duplicates
    $("#button-list").empty();
    //Iterates through each item in the array and creates a button and displays in the DOM
    for (i = 0; i < topics.length; i++) {
        var btn = $("<button>");
        btn.addClass("new-button")
        btn.text(topics[i]);
        $("#button-list").append(btn);
        console.log(topics[i])
    }
}

function addBtn() {
    $("#submit").text("");
    topics.push($("#topic").val().trim());
    displayBtn();
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

$(document).ready(function () {
    displayBtn();
    $("#submit").on("click", function () {
        event.preventDefault();
        addBtn();
    })
});