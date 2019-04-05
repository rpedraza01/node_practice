// Require my new parser.js file
var Parser = require('./parser');

// loads the filesystem module
var filesystem = require('fs');

// read the contents of the file into memory
filesystem.readFile('example_log.txt', function(err, logData) {
// if an error occurred, throwing it will display the exception and end the app
	if (err) throw err;
// logData is a buffer, converts to a string
	var text = logData.toString();

// var results = {};
// // break up the file into lines
// 	var lines = text.split('\n');

// lines.forEach(function(line) {
// 	var parts = line.split(' ');
// 	var letter = parts[1];
// 	var count = parseInt(parts[2]);

// if(!results[letter]) {
// 	results[letter] = 0;
// 	}
// results[letter] += parseInt(count);
// 	});
// console.log(results);

// create an instance of the parser object
	var parser = new Parser();

// call the parse function
	console.log(parser.parse(text));
});