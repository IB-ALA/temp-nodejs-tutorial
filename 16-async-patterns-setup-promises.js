// const { readFile, writeFile } = require('fs');

// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

// shortcut for the above
const { readFile, writeFile } = require('fs').promises;



// function getText(path) {
//   return new Promise((resolve, reject) => {
//     readFile(path,'utf8', (err, data) => {
//       if (err) {
//         // console.log(err)
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// }

// PROMISES
// getText('./content/first.txt')
// .then(data => console.log(data))
// .catch(err => console.log(err))

// ASYNC AWAIT

// async function start() {
//   try {
//     const first = await getText('./content/first.txt');
//     const second = await getText('./content/second.txt');
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// }


// USING THE UTILS
// async function start() {
//   try {
//     const first = await readFilePromise('./content/first.txt', 'utf8');
//     const second = await readFilePromise('./content/second.txt', 'utf8');

//     await writeFilePromise('./content/result-mind-grenade.txt', `THIS IS AWESOME : ${first} ${second}`)
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// }

// .promises
async function start() {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');

    await writeFile(
      './content/result-mind-grenade.txt', 
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
}

start();
