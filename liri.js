// code to read and set any environment variables with the dotenv package
require("dotenv").config();

// load fs
let fs = require("fs");

// the code required to import the `keys.js` file and store it in a variable
let keys = require("./keys.js");

// define request load request package
let request = require("request");

// define spotify load spotify package
let spotify = require("spotify");

// define twitter load twitter package
let twitter = require("twitter")

// define omdb load omdb package
let omdb = require("omdb")


// Load the Spotify and Twitter keys
let spotifyKeys = new Spotify(keys.spotify);
let twitterKeys = new Twitter(keys.twitter);




let action = process.argv[2];
let input = process.argv[3];

// Make it so liri.js can take in one of the following commands:
// * `my-tweets`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

let myTweets = function () {

}

switch (action) {
    case "my-tweets":
        myTweets();
        break;
    case "spotify-this-song":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
}

// 1. `node liri.js my-tweets` * This will show your last 20 tweets and when they were created at in your terminal/bash window.
function myTweets() {
    
};

// 2. `node liri.js spotify-this-song '<song name here>'`
//  * This will show the following information about the song in your terminal/bash window
//  * Artist(s)
//  * The song's name
//  * A preview link of the song from Spotify
//  * The album that the song is from
//  * If no song is provided then your program will default to "The Sign" by Ace of Base.
function spotifyThisSong(input) {

}

// 3. `node liri.js movie-this '<movie name here>'`
//     * This will output the following information to your terminal/bash window:
//         * Title of the movie.
//         * Year the movie came out.
//         * IMDB Rating of the movie.
//         * Rotten Tomatoes Rating of the movie.
//         * Country where the movie was produced.
//         * Language of the movie.
//         * Plot of the movie.
//         * Actors in the movie.
//     * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
//         * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
//         * It's on Netflix!
//     * You'll use the request package to retrieve data from the OMDB API. Like all of the in-class activities, the OMDB API requires an API key. You may use `trilogy`.
function movieThis(input) {

}