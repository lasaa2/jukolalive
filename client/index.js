const Twitter = require('twitter');


let testTweet = { statuses:
    [ { created_at: 'Tue Feb 26 20:56:21 +0000 2019',
        id: 1100499835495567400,
        id_str: '1100499835495567363',
        text:
         'Tähän liittyen yritän pitää kiinni periaattesta, että vähintään yksi täyden matkan #maraton vuodessa sekä… https://t.co/ZKflCJ341v',
        truncated: true,
        entities: [Object],
        metadata: [Object],
        source:
         '<a href="http://twitter.com/download/android" rel="nofollow">Twitter for Android</a>',
        in_reply_to_status_id: null,
        in_reply_to_status_id_str: null,
        in_reply_to_user_id: null,
        in_reply_to_user_id_str: null,
        in_reply_to_screen_name: null,
        user: [Object],
        geo: null,
        coordinates: null,
        place: null,
        contributors: null,
        is_quote_status: true,
        quoted_status_id: 1100382151848222700,
        quoted_status_id_str: '1100382151848222720',
        quoted_status: [Object],
        retweet_count: 0,
        favorite_count: 2,
        favorited: false,
        retweeted: false,
        possibly_sensitive: false,
        lang: 'fi' } ],
   search_metadata:
    { completed_in: 0.029,
      max_id: 1100499835495567400,
      max_id_str: '1100499835495567363',
      next_results:
       '?max_id=1100499835495567362&q=%23jukolanviesti&count=1&include_entities=1',
      query: '%23jukolanviesti',
      refresh_url:
       '?since_id=1100499835495567363&q=%23jukolanviesti&include_entities=1',
      count: 1,
      since_id: 0,
      since_id_str: '0' } };

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