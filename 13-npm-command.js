// npm - global command

// local dependency - use only in this particular project
// npm i <packageNmae>

// global dependency - use in any project
// npm install -g <packageNmae>
// sudo npm install -g <packageName> (mac)

// package.json - stores inportant info about project.package
// manual approach (create package.json in the root, cretae properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)


const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);

console.log('hello world')
