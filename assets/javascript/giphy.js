//Initial array of topics
var topics = ["Snow", "Toonami", "Beer", "Portland", "Space", "Disney", "Ramen", "Dog", "Eeyore"]

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
    }
}

//Function to add a new topic & button to the DOM
function addBtn() {
    topics.push($("#topic").val().trim());
    displayBtn();
}

//Displaying the topic on the DOM
function displayGif(name) {
    //Linking the API
    var apiKey = "JH9N0IxrYLjd5odOGP5tthHGw4ZUxFUj"
    var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + name + '&api_key=' + apiKey + '&rating=pg&limit=10'
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
        .then(function (response) {
            var results = response.data;
            for (var j = 0; j < results.length; j++) {
                var gifDiv = $("<div>");
                gifDiv.addClass("gDiv");
                var gRating = $("<p class='rating'>").text("Rating: " + results[j].rating.toUpperCase());
                var gifURL = results[j].images.original_still.url
                var gif = $("<img>");
                gif.addClass("gif");
                gif.attr('src', gifURL);
                gif.attr("height", "200");
                gif.attr("width", "300");
                gif.attr("data-still", gifURL);
                gif.attr("data-animate", results[j].images.original.url)
                gif.attr("data-status", "still")
                gifDiv.append(gRating);
                gifDiv.append(gif);
                $("#giphy-list").append(gifDiv);
                console.log(response);
            }
        });
}

//Function to stop and start the gif
function animate() {
    if ($(this).attr("data-status") === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-status", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-status", "still");
    }
}


$(document).ready(function () {
    displayBtn();

    $("#submit").on("click", function () {
        event.preventDefault();
        addBtn();
        $("#topic").val('')
    });

    $(document).on("click", ".new-button", function () {
        $("#giphy-list").empty();
        displayGif($(this).text());
    });

    $(document).on("click", ".gif", animate);
});