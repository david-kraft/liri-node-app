// 1. `node liri.js my-tweets` * This will show your last 20 tweets and when they were created at in your terminal/bash window.
module.exports = function myTweets(client, divider) {
    client.get("https://api.twitter.com/1.1/statuses/user_timeline.json?", "screen_name=DavidKraftSB, count=20", function (err, data) {
        console.log(divider + data + divider);
    })
};