var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('Store', { title: 'Store',message_url: process.env.MESSAGE_URL  });
});

router.route('/message')
	.post(function (req,res, next) {
	console.log('Receiving message ' + req.body.message);
	res.send('Message was ' + req.body.message);
	});
module.exports = router;
