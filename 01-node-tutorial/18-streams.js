const { createReadStream } = require('fs');

const stream = createReadStream('./content/big.txt', {highWaterMark: 90000, encoding: 'utf8'});

// default 62kb
// last buffer - remainder
// highWaterMark - control size

/*
stream.on('data', (result) => {
  console.log(result);
})

stream.on('error', (err) => {
  console.log(err);
})
*/


// PRACTICAL STREAM EXAMPLE
const http = require('http');
const fs = require('fs');

http
.createServer((request, response) => {
  // const text = fs.readFileSync('./content/big.txt', 'utf8');
  // response.end(text);

  // CHECK THE DEV TOOLS THE NETWORK SIDE

  const fileStream = fs.createReadStream('./content/big.txt', 'utf8');
  fileStream.on('open', () => {
    fileStream.pipe(response);
  })

  fileStream.on('error', (err) => {
    response.end(err);
  })
})
.listen(5000);

