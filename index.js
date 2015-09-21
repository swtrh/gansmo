// JavaScript source code
var express = require('express');
var app = express();

app.get('/Store', function (req, res) {
    res.send('Store');
});

app.get('/', function (req, res) {
    
    res.send('Hello World');

});
var port = (process.env.PORT || '3000');
app.listen(port);

console.log('Starting Hello World ' + port);