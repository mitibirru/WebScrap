const request = require("request");
let url = "http://www.google.com"
// request working -> url, callback function
// 1. request to the given url
// 2. response -> request function -> callback call -> data put                                                                     
request(url, cb);

// error -> if there is any error while executing the callback request
// response -> header + body
// bosy -> html

function cb(error, response, body) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  console.log("body:", body); // Print the HTML for the Google homepage.
}
