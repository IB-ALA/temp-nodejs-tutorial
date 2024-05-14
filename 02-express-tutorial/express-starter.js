const express = require('express');

// you can as well do it this way
// const app = require('express')();

const app = express();

app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('home page');
});

app.get('/about', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('About page');
});

app.all('*', (req, res) => {
  console.log('user hit the resource');
  res.status(404).send('<h1>resource not found</h1>');
});






app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen