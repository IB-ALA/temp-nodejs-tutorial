function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);

  // next ends(exits) the middleware
  next();

  // sending the response
  // res.send('testing')
}

module.exports = logger;