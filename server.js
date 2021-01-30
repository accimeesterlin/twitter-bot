require('dotenv').config();
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
});
 
var params = {screen_name: 'BarackObama'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets[0]);
  } else {
      console.log('Error: ', error);
  }
});

client.post('statuses/update', {status: 'Tichaiti - Live Twitter Example - Ignore this tweet'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
});