/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');
var http = require('http');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  fs.readFile(filePath, 'utf8', function(err, results) {
    if (err) {
      //console.log('fs.readFile failed :(\n', err);
      callback(err);
    } else {
      // console.log('fs.readFile successfully completed :)\n', results);
      let lines = [];
      lines = results.split('\n');
      // console.log('our array : ', lines);
      callback(err, lines[0]);
    }
  });
  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  if (err) {
    callback(err);
  } else {
    request(url)
      .on('response', function(response) {
        console.log('status code: ', response.statusCode); // <--- Here 200
        callback(err, response.statusCode);
      });
  }
  // console.log('url: ', response.statusCode);
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
