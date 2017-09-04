var express = require("express");
var app  = express();

var port = process.env.PORT || 8080

app.get('/', function(req, res) {
    res.send("Hello or die!");
});

app.listen(port, function() {
    console.log("Fucking running on port: " + port);
});