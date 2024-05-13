const http = require('http');
const { readFileSync } = require('fs');

// get all files
// const homePage = readFileSync('./index.html', 'utf8');
const homePage = readFileSync('./navbar-app/index.html', 'utf8')
const homeStyles = readFileSync('./navbar-app/styles.css', 'utf8')
const homeImage = readFileSync('./navbar-app/logo.svg', 'utf8')
const homeLogic = readFileSync('./navbar-app/browser-app.js', 'utf8')

const server = http.createServer((request, response) => {
  // console.log(request.method);
  // console.log(request.url);
  
  const url = request.url;

  // home page
  if (url === '/') {
    response.writeHead(200, {'content-type': 'text/html'});
    // response.writeHead(404, {'content-type': 'text/plain'});
    response.write(homePage);
    response.end();
  }
  // about page
  else if (url === '/about') {
    response.writeHead(200, {'content-type': 'text/html'});
    response.write('<h1>About page</h1>');
    response.end();
  }
  // styles
  else if (url === '/styles.css') {
    response.writeHead(200, {'content-type': 'text/css'});
    response.write(homeStyles);
    response.end();
  }
  // logo
  else if (url === '/logo.svg') {
    response.writeHead(200, {'content-type': 'image/svg+xml'});
    response.write(homeImage);
    response.end();
  }
  // logic
  else if (url === '/browser-app.js') {
    response.writeHead(200, {'content-type': 'text/js'});
    response.write(homeLogic);
    response.end();
  }
  // 404
  else {
    response.writeHead(404, {'content-type': 'text/html'});
    response.write('<h1>Page not found</h1>');
    response.end();
  }
});

server.listen(5000);