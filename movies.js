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

module.exports = function movieThis(divider, input, request) {

    // set default input value if input is empty, otherwise takes string and replaces spaces with pluses
    if (!input) {
        input = "mr+nobody";
    }/*  else {
        input = input.split(" ")
        input = input.join("+")
    } */

    request("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        let movie = JSON.parse(body)

        // If there were no errors and the response code was 200 (i.e. the request was successful)...
        if (!error && response.statusCode === 200) {

            console.log(divider + "\nTitle: " + JSON.parse(body).Title + "\nYear: " + JSON.parse(body).Year + "\nIMDB Rating: " + JSON.parse(body).Ratings[0].Value + "\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\nCountry: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nMovie Plot: " + JSON.parse(body).Plot + "\nMovie Actors: " + JSON.parse(body).Actors + divider);
        }
    });

};