const express = require('express');
const app = express();
const cors = require('cors');

const people = require('./routes/people');
const auth = require('./routes/auth');


// static assets
app.use(express.static('./methods-public'));

// parse the form data
app.use(express.urlencoded({ extended: false }));

// parse json
app.use(express.json());

// allow other sources
app.use(cors());

// for router
app.use('/api/people', people);
app.use('/login', auth);  

app.listen(5000, () => {
  console.log('Server listening on port 5000...');
});