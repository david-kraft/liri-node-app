// code to read and set any environment variables with the dotenv package
require("dotenv").config();

// load fs
let fs = require("fs"),

    // the code required to import the `keys.js` file and store it in a variable
    keys = require("./keys.js"),

    // define request load request package
    request = require("request"),

    // define spotify load spotify package
    Spotify = require("node-spotify-api"),

    // define twitter load twitter package
    Twitter = require("twitter"),

    // define omdb load omdb package
    omdb = require("omdb");


// Load the Spotify and Twitter keys
let spotify = new Spotify(keys.spotify);
let client = new Twitter(keys.twitter);

let action = process.argv[2];
let input = process.argv[3];

// Make it so liri.js can take in one of the following commands:
// * `my-tweets`
// * `spotify-this-song`
// * `movie-this`
// * `do-what-it-says`

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
    client.get("https://api.twitter.com/1.1/statuses/user_timeline.json?", "screen_name=DavidKraftSB, count=20", function(data){
        console.log(data);
    })
};

// 2. `node liri.js spotify-this-song '<song name here>'`
//  * This will show the following information about the song in your terminal/bash window
//  * Artist(s)
//  * The song's name
//  * A preview link of the song from Spotify
//  * The album that the song is from
//  * If no song is provided then your program will default to "The Sign" by Ace of Base.
function spotifyThisSong() {
/* The artists are objects. Can't figure out how to get just the name. */
/* The album is an object. Can't figure out how to get just the name. */
spotify
  .search({ type: 'track', query: 'All the Small Things' })
  .then(function(response) {
        let items = response.tracks.items;
        console.log(items[0]);
        console.log("\nArtist(s): " + items.enemy.artist)
    // console.log("\nArtist(s): " + track.artist + "\nName: " + track.name + "\nPreview Link: " + track.preview_url +  "\nAlbum: " + track.album)

  })
  .catch(function(err) {
    console.log(err);
  });

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

function movieThis() {
    omdb.get({ title: "input" }, true, function (err, movie) {
        if (err) {
            return console.error(err);
        }

        // Defaults to Mr. Nobody
        if (!input) {
            input = "Mr. Nobody";
            movieThis();
        }

        if (!movie) {
            return console.log('Movie not found!');
        }

        console.log("\nTitle: " + movie.title + "\nYear: " + movie.year + "\nIMDB Rating: " + movie.imdb.rating + "\nRotten Tomatoes Rating: " + movie.tomato.rating + "\nCountries: " + movie.countries + /* Movie language, method not found */ "\nMovie Plot: " + movie.plot + "\nMovie Actors: " + movie.actors);
    });
}

// 4. `node liri.js do-what-it-says`
//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
//      * Feel free to change the text in that document to test out the feature for other commands.
function doWhatItSays() {
    fs.readFile("./random.txt", "utf8", function (err, contents) {
        if (err) {
            return console.log(err);
        }
        let contentsArray = contents.split(",");

        // loops through the arguments and assigns them to the variables otherwise taken by node inputs
        for (let i = 0; i < contentsArray.length; i++) {
            action = contentsArray[0];
            input = contentsArray[1];
        }
        check();
    });
}