var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.set('X-XSS-Protection',0);
  res.send('respond with a resource');
});

module.exports = router;
