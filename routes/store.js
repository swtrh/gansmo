var express = require('express');
var router = express.Router();
var MongoClient= require('mongodb').MongoClient;
var mongoURL='mongodb://gansmo:' + (process.env.PASSWORD) || 'empty') + '@ds055742.mongolab.com:55742/gansmo'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('store.jade',{messageURL: process.env.MESSAGE_URL});
});

router.route('/message')
  .post(function(req, res, next) {
  var txtMessage= (req.body.message || 'empty message');
  
  MongoClient.connect(mongoURL, function(err,db) {
    console.log('Connected to the database');
    
    db.collection('messages').insert({'message': txtMessage}, {w: 1}, 
    function(err,item){
      if (err) {
        console.log('Error storing message in database' + err);
        db.close();
        res.status(400).send('Error, unable to store message: ' + txtMessage);
      } 
      else {
        db.close();
        console.log('Message stored in databae' + txtMessage);
        res.status(200).send('Message stored: ' + txtMessage +'"');
      }
    });
  });
  
  // console.log('Receiving message' + req.body.message);
  // res.send('Message was ' + req.body.message);
});

module.exports = router;