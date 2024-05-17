// API VRS SSR
const express = require('express');
const app = express();

const morgan = require('morgan') // third party middleware "npm i morgan" app.use(morgan('tiny'))
const logger = require('./logger'); 
const authorize = require('./authorize');

// req => middleware => res
// When you have a middleware unless you are sending the respond your self, pass in a next

// 1. use vrs route
// 2. option - our own / express / third party

// ORDER MATTERS
// app.use(logger);

// multiple middlewares
// app.use([logger, authorize]);

app.use(morgan('tiny'));

// app.use('/api', logger);
// when you add the path, then the middleware will apply only with all urls staring with it


app.get('/', (req, res) => {
  res.send('Home')
});

app.get('/about', (req, res) => {
  res.send('About')
});

app.get('/api/products', (req, res) => {
  res.send('products')
});

app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user);
  res.send('items');
});

app.listen(5000, () => {
  console.log('Server listeing on port 5000...');
})