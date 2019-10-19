let APIKey = "3dg3PN4gT4BclNcWUT3UbG39o1XN5bAt" // enter API key 
let queryURL1 = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
let queryURLSearch = "earthquake"
let queryURL2 = "&api-key=" + APIKey

queryURL = queryURL1 + queryURLSearch + queryURL2

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response)

    //Loop through each item in object
    for ( var i = 0; i < response.response.docs.length; i++){
        console.log(response.response.docs[i].headline.main)

    }
  });

