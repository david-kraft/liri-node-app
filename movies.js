module.exports = function movieThis(divider, input, request) {

    if (!input) {
        input = "mr+nobody";
    }

    axios.get("http://www.omdbapi.com/?t=" + input + "&y=&plot=short&apikey=trilogy", function (error, response, body) {

        let movie = JSON.parse(body)

        if (!error && response.statusCode === 200) {

            console.log(divider + "\nTitle: " + JSON.parse(body).Title + "\nYear: " + JSON.parse(body).Year + "\nIMDB Rating: " + JSON.parse(body).Ratings[0].Value + "\nRotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value + "\nCountry: " + JSON.parse(body).Country + "\nLanguage: " + JSON.parse(body).Language + "\nMovie Plot: " + JSON.parse(body).Plot + "\nMovie Actors: " + JSON.parse(body).Actors + divider);
        }
    });

};
