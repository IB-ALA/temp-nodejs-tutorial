const EventEmitter = require('events');

// console.log(EventEmitter);

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log(`Data recieved user ${name} with id: ${id}`);
}); 

// customEmitter.emit('response', 'john', 34);
// this wont make the next on work

customEmitter.on('response', () => {
  console.log(`Some other logic here `);
});

customEmitter.emit('response', 'john', 34);


// SETTING UP A SERVER USING EVENT EMITTER
const http = require('http');

const server = http.createServer();
server.on('request', (request, response) => {
  response.end('Welcome');
});

server.listen(5000);