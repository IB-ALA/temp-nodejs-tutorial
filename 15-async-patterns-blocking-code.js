const http = require('http');

const server = http.createServer((request, response) => {
  if (request.url === '/') {
    response.end('Home Page')
  }

  if (request.url === '/about') {
    // blocking code
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`${i} ${j}`);
      }
    }
    response.end('About Page')
  }

  response.end('error page!');
});

server.listen(5000, () => {
  console.log('Server listening on port: 5000...');
});