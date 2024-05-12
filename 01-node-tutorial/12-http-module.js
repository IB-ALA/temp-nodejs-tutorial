const http = require('http');

const server = http.createServer((request, response) => {

  // console.log(request);
  if (request.url === '/') {
    response.end('Welcome to our home page');
  }

  if (request.url === '/about') {
    response.end('Here is our about history');
  }

  response.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find this page you are looking for</p>
    <a href="/">Back Home</a>
  `);
  // the one on top is a shortcut
  // response.write('Welcome to our home page');
  // response.end();
});

server.listen(5000); 