module.exports = function myTweets(client, divider) {
    axios.get("https://api.twitter.com/1.1/statuses/user_timeline.json?", "screen_name=DavidKraftSB, count=20", function (err, data) {
        console.log(divider + data + divider);
    })
};
