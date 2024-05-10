

const os = require('os')

// user info
const user = os.userInfo();
console.log(user);

// returns the u=systems uptime is seconds
console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem()
}

console.log(currentOS);