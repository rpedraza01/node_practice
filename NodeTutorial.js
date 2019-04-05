var Tutor = require('./tutorial.js');
exports.NodeTutorial = function() {
	console.log("Node Tutorial");
	this.pTutor = function() {
		var PTutor = Tutor;
		PTutor.tutorial();
	}
}
// NodeTutorial();