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

// Beautify routes
app.get('/ourstory', function(req, res) { res.redirect('/#/ourstory'); });
app.get('/helpus', function(req, res) { res.redirect('/#/helpus'); });
app.get('/media', function(req, res) { res.redirect('/#/media'); });
app.get('/underconstruction', function(req, res) { res.redirect('/#/underconstruction'); });
app.get('/news', function(req, res) { res.redirect('/#/news'); });
app.get('/contact', function(req, res) { res.redirect('/#/contact'); });
app.get('/donate', function(req, res) { res.redirect('/#/donate'); });

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
var media = null;
var folders = [];

var files = fs.readdirSync(__dirname + '/public/img/media_imgs');

recursive(__dirname + '/public/img/media_imgs', function (err, files) {

  for(var i in files)
  {
    //var tmp = files[i].replace("\\"," ").replace("/"," ").split(" ");
    var tmp = files[i].split(/\\|\//g);

    var tmpdir = tmp[tmp.length - 2];
    if(folders.indexOf(tmpdir) < 0){
      folders.push(tmpdir);
    }
  }
  // Files is an array of filename
  media = {"folders": folders, "images":files};
});

app.get('/imgapi/all/:paramID',function(req, res){
        return res.json(media);
});

app.get('/imgapi/folder/:paramID',function(req, res){
        var param = req.params.paramID;
        var imgList = [];//$.grep(media.images, function(e){ return e.toLowerCase().indexOf(param.toLowerCase()) != -1 });
        for(var i =0; i < media.images.length; i++){
          if(media.images[i].toLowerCase().indexOf(param.toLowerCase()) != -1){
            var imgLoc = media.images[i];
            //imgList.push(media.images[i]);
            imgList.push(imgLoc.substring(imgLoc.indexOf("img")));
          }
        }
        var retMedia = {"folder": param, "images":imgList}
        return res.json(retMedia);
});

// start app
app.listen(port);
// User message
console.log('One Red Bag is open on port ' + port);
