const { readFileSync, writeFileSync } = require('fs');
// fs = file system

console.log('start')


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first, second);

writeFileSync(
  './content/result-sync.txt', 
  `Here is the value: ${first} ${second}`, 
  { flag: 'a' }
);

console.log('done');
console.log('start next one');
