
/* emitter.js

 Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in 
 which certain kinds of objects (called "emitters") emit named events that cause Function objects ("listeners") to be called.
 All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows
 one or more functions to be attached to named events emitted by the object
*/

const EventEmitter = require('events');

const Logger = require('./logger');
const logger = new Logger();

// Register a listener
logger.on('messageLogged', function(arg) {
	console.log('Listener called', arg);
});

logger.log('message');