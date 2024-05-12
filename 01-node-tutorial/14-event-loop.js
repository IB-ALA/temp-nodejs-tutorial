// 2:25:40

// EVENT LOOP
// async gets offloaded

// start os process

// eg 1 is the readFile function in fs-async
/*
// eg 2

console.log('first');
setTimeout(() => {
  console.log('second');
}, 0);
console.log('third');
*/
// completed os process.

// eg 3
/*
setInterval(() => {
  console.log('hello world!');
}, 2000);
console.log('i will run first');
// process stays alive until ctrl + C
// unexpected error
*/

// eg 4
const http = require('http');

const server = http.createServer((request, response) => {
  console.log('request event');
  response.end('Hello world!');
});

server.listen(5000, () => {
  console.log('Server listening on port: 5000...');
});