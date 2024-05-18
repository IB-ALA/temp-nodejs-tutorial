const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
  // console.log(req.body);
  const { name } = req.body

  if (name) {
    return res.status(299).send(`Welcome ${name}`);
    // note the content type.
  }

  res.status(401).send('Please Provide Credentials')
});

module.exports = router;