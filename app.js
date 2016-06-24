var http = require("http")
var crontab = require("node-crontab")

var port = (process.env.VCAP_APP_PORT || 1337);
var host = (process.env.VCAP_APP_HOST || '0.0.0.0');

var server = http.createServer(function(req, res) {
                               res.end("Hello, Bluemix")
                               }).listen(port, host);


var count = 0;

console.log ("Hello, user")
var jobId = crontab.scheduleJob("* * * * * *", function(){
                                console.log("count: " + count++);
                                });
