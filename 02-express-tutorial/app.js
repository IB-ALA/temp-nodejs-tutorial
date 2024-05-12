const http = require('http');

const server = http.createServer((request, response) => {
  // console.log(request.method);
  // console.log(request.url);
  
  const url = request.url;

  // home page
  if (url === '/') {
    response.writeHead(200, {'content-type': 'text/html'});
    // response.writeHead(404, {'content-type': 'text/plain'});
    response.write('<h1>Home page</h1>');
    response.end();
  }
  // home page
  else if (url === '/about') {
    response.writeHead(200, {'content-type': 'text/html'});
    response.write('<h1>About page</h1>');
    response.end();
  }
  else {
    response.writeHead(404, {'content-type': 'text/html'});
    response.write('<h1>Page not found</h1>');
    response.end();
  }
  

});

server.listen(5000);