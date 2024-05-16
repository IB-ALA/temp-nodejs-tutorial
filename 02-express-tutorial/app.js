// API VRS SSR
const express = require('express');
const app = express();

// req => middleware => res
// When you have a middleware unless you are sending the respond your self, pass in a next

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // next ends(exits) the middleware
  next();

  // sending the response
  // res.send('testing')
}


app.get('/', logger, (req, res) => {

  res.send('Home')
});

app.get('/about', logger, (req, res) => {
  res.send('About')
});

app.listen(5000, () => {
  console.log('Server listeing on port 5000...');
})