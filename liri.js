// load fs
var fs = require("fs");

// Calling the functions from other local js files
var myTweets = require("./tweets.js");
var spotifyThisSong = require("./music.js");
var movieThis = require("./movies.js");

var keys = require("./keys.js");

var axios = require("axios");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

// Load the Spotify and Twitter keys
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var action = process.argv[2];
var input = process.argv[3];

// Define a divider so I can make things pretty in the CLI
var divider = "\n\n------------------------------------------------------------\n\n";

// Make it so liri.js can take in one of the following commands: my-tweets, spotify-this-song, movie-this, do-what-it-says
switch (action) {
    case "my-tweets":
        myTweets(client, divider);
        break;
    case "spotify-this-song":
        spotifyThisSong(spotify, divider, input);
        break;
    case "movie-this":
        movieThis(divider, input, request);
        break;
    case "do-what-it-says":
        doWhatItSays(fs, spotify, client, require);
}

// Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

function doWhatItSays(fs, spotify, client, require) {
    fs.readFile("./random.txt", "utf8", function (err, contents) {
        var contentsArray = contents.split(",");

        // goes through the arguments and assigns them to the variables otherwise taken by node arguments
        for (var i = 0; i < contentsArray.length; i++) {
            action = contentsArray[0];
            input = contentsArray[1];
        }
        switch (action) {
            case "my-tweets":
                myTweets(client, divider);
                break;
            case "spotify-this-song":
                spotifyThisSong(spotify, divider, input);
                break;
            case "movie-this":
                movieThis(divider, input, request);
                break;
            case "do-what-it-says":
                doWhatItSays(fs, spotify, client, require);
                break;
            default:
                console.log("Type in either do-what-it-says, spotify-this-song, my-tweets, or movie-this.");
                break;
        }
    });
}
