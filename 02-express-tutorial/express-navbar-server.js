const express = require('express');
const path = require('path');
const app = express();

// setup static and middleware
app.use(express.static('./public'));

// app.get('/', (req, res) => {
//   you can use path.join too
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));  
//   another way is the ones below.
//   adding to the static assets
//   SSR server side rendering
// });


app.get('*', (req, res) => {
  res.status(404).send('resource not found');
})



app.listen(5000, () => {
  console.log('Server is listening on port 5000...');
});

// 4:55:10-14

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen