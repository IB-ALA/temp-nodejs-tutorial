// CommonJS. every file is module by defauld

const {john, peter} = require('./4-names')
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')
require('./7-mind-grenade')



// function sayHi(name) {
//   console.log(`hello there ${name}`);
// }
console.log(names);
console.log(data);
sayHi('susan');
sayHi(john);
sayHi(peter);
sayHi(names.john);
sayHi(names.peter);
