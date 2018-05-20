// 2. `node liri.js spotify-this-song '<song name here>'`
//  * This will show the following information about the song in your terminal/bash window
//  * Artist(s)
//  * The song's name
//  * A preview link of the song from Spotify
//  * The album that the song is from
//  * If no song is provided then your program will default to "The Sign" by Ace of Base.
module.exports = function spotifyThisSong(spotify, divider, input) {
    if (!input) {
        input = "the sign";
    }
    spotify
        .search({ type: "track", query: input })
        .then(function (response) {
            let topResult = response.tracks.items[0];

            // create function to loop through artists and combine their names:
            let artistsArray = []
            topResult.artists.forEach(function (item) {
                artistsArray.push(item.name);
            });
            artistsString = artistsArray.join(", ")

            console.log(divider + "\nArtist(s): " + artistsString + "\nTrack name: " + topResult.name + "\nPreview Link: " + topResult.preview_url + "\nAlbum: " + topResult.album.name + divider)

        })
        .catch(function (err) {
            console.log(err);
        });

}
