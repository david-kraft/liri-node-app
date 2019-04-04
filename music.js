module.exports = function spotifyThisSong(spotify, divider, input) {
    if (!input) {
        input = "the sign";
    }
    spotify
        .search({ type: "track", query: input })
        .then(function (response) {
            var topResult = response.tracks.items[0];

            // create function to loop through artists and combine their names:
            var artistsArray = []
            topResult.artists.forEach(function (item) {
                artistsArray.push(item.name);
            });
            var artistsString = artistsArray.join(", ")

            console.log(divider + "\nArtist(s): " + artistsString + "\nTrack name: " + topResult.name + "\nPreview Link: " + topResult.preview_url + "\nAlbum: " + topResult.album.name + divider)

        })
        .catch(function (err) {
            console.log(err);
        });

}
