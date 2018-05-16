/*
logger.js - Subclass of EventEmitter
*/


const EventEmitter = require('events');

class Logger extends EventEmitter {

		log(message) {
		// Send an HTTP request
		console.log(message);

		// Raise an Event called messageLogged, passing an object as an argument
		this.emit('messageLogged', {id: 1, url: 'http://'});	

	}

}



module.exports = Logger;