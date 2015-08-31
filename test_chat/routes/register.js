var express = require('express');
var router = express.Router();

router.get('/register', function(req, res){
  res.render('register', { title: 'Express' });
});

router.post('/register', function(req, res){
	req.query
})

module.exports = router;