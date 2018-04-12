require("dotenv").config();

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

Make it so liri.js can take in one of the following commands:

my-tweets

spotify-this-song

movie-this

do-what-it-says