var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send("Hello world!");
});
app.listen(3003, function () {
    console.log('Server is up on port 3003');
});
