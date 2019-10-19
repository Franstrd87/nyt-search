let APIKey = "3dg3PN4gT4BclNcWUT3UbG39o1XN5bAt" // enter API key 
let queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIKey

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
  
  });