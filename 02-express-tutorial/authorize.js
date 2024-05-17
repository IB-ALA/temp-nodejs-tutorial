function authorize(req, res, next) {

  const {user} = req.query;
  if (user === 'yusif') {
    req.user = {name: 'yusif', id: 3}
    next();
  } else {
    res.status(404).send('Unauthorized')
  }
}

module.exports = authorize;