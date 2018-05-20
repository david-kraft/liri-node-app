// code to read and set any environment variables with the dotenv package
require("dotenv").config();

// load fs
let fs = require("fs"),

    // Calling the functions from o"ther local js files
    myTweets = require("./tweets.js"),
    spotifyThisSong = require("./music.js"),
    movieThis = require("./movies.js"),

    // the code required to import the `keys.js` file and store it in a variable
    keys = require("./keys.js"),

    // define request load request package
    request = require("request"),

    // define spotify load spotify package
    Spotify = require("node-spotify-api"),

    // define twitter load twitter package
    Twitter = require("twitter");

// Load the Spotify and Twitter keys
let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

let action = process.argv[2];
let input = process.argv[3];

// Define a divider so I can make things pretty in the CLI
let divider = "\n\n------------------------------------------------------------\n\n";

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
        let contentsArray = contents.split(",");

        // goes through the arguments and assigns them to the variables otherwise taken by node arguments
        for (let i = 0; i < contentsArray.length; i++) {
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
        }


    });
}
