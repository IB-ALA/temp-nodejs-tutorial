// API VRS SSR
const express = require('express');
const app = express();

const { products, people } = require('./data');

app.get('/', (req, res) => {
  // res.json([{name: 'john'}, {name: 'susan'}]);
  // res.json(products)

  res.send('<h1>Home Page</h1> <a href="/api/products">Products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const {id, name, image } = product;
    return {id, name, image}
  });

  res.json(newProducts);
});


app.listen(5000, () => {
  console.log('Server listeing on port 5000...');
})