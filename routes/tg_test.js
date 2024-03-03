var express = require('express');
var router = express.Router();

/* GET users listing. */
router.all('/', function(req, res, next) {
  
  console.log('-------- Get --------');
  console.log(req.query);

  console.log('-------- Post --------');
  console.log(req.body);

  res.send('Tg test page');
});

module.exports = router;
