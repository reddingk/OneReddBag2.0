//Send Email from Node
//https://codeforgeek.com/2014/07/send-e-mail-node-js/

// server.js
// modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');
var path = require("path");
var recursive = require('recursive-readdir');

// configuration

// config files
//var db = require('./config/db');

// set ports
var port = process.env.PORT || 7777;

// connect to mongoDB database
// mongoose.connect(db.url);

// get all data of the body (POST) params
// parse application/json
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json'}) );

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public'));

// routes
// Route for database set up
//require('./app/routes')(app);

// file list of imgs
/*var media = null;
var folders = [];
fs.readdir(__dirname + '/public/img/media_imgs', function(err, files) {
    if (err) return;

    files.map(function (file) {
        return path.join(__dirname + '\\public\\img\\media_imgs', file);
    }).filter(function (file) {
        return fs.statSync(file).isDirectory();
    }).forEach(function (file) {
        folders.push(file.substring(file.lastIndexOf("\\") + 1, file.length))
    });

});
recursive(__dirname + '/public/img/media_imgs', function (err, files) {
  // Files is an array of filename
  media = {"folders": folders, "images":files};
});

app.get('/imgapi/all/:paramID',function(req, res){
        return res.json(media);
});*/

// start app
app.listen(port);
// User message
console.log('One Red Bag is open on port ' + port);
