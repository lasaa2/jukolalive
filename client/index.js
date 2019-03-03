const Twitter = require('twitter');


let testTweet = 

console.log(testTweet);

/* DB */

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

const client = new Twitter({
  consumer_key: 'nuvYN3sjVw8CiQ7JI1b3LePmX',
  consumer_secret: 'XxplwkVKNGPms1Poh9NoW9cVoi6hoKoVYiAx54aLwAe9j7DEIe',
  access_token_key: '1097085120018874368-MZEQxrdhINfrT4CdctIHhvT3IGn1CI',
  access_token_secret: 'Hn5h0k11Lg9S0G0gIYpcXZZ1zWFPAcQIV1U2WKjsY0T0a'
});

const params = {
    //screen_name: 'jukolanviesti'
    q: '#jukolanviesti',
    count: 1
};

let reTweets;

client.get('search/tweets', params, function(error, tweets, response) {
  if (!error) {
    reTweets = tweets;
    console.log(reTweets);
  } else {
    console.log('error : ', error)
  }
});
/*
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("test").insertOne(reTweets, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
  });

*/
/* TOIMIVA esimerkki twiittien hausta käyttäjältä jukolanviesti */

/*

const params = {
    //screen_name: 'jukolanviesti'
    q: '@jukolanviesti',
    count: 3
};

client.get('search/tweets', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } else {
    console.log('error : ', error)
  }
});

*/