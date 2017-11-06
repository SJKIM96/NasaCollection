// server.js

// BASE SETUP
// =============================================================================
var _database     = require('./app/models/db');
var mongoose   = require('mongoose');
mongoose.connect('mongodb://localhost:27017/board',{useMongoClient : true}); // connect to our database


// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/se3352')

    // create a bear (accessed at POST http://localhost:8080/api/se3352)
    .post(function(req, res) {
        console.log("3352 post invoked");
        var _data = new _database();      // create a new instance of the Bear model
        _data.comments = req.body.comments;  // set the bears name (comes from the request)
        _data.course_code = "se3352";
        _data.date = Date.now();
        // save the bear and check for errors
        _data.save(function(err) {
            if (err){
                res.send(err);
            }
            console.log("se3352 post");
            res.json({ message: 'comments created!' });
        });

    })
    
    // get all the bears (accessed at GET http://localhost:8080/api/se3352)
    .get(function(req, res) {
        res.setHeader("Access-Control-Allow-Origin", "*");
        _database.find(function(err, _database) {
            if (err){
                res.send(err);
            }
            res.json(_database);
        });
    });
    
router.route('/se3316')

    //create a pos (accessed at POST http://localhost:8080/api/se3316)
    .post(function(req, res) {
        console.log("3316 post invoked");
        var _data = new _database();      // create a new instance of the Bear model
        _data.comments = req.body.comments;  // set the bears name (comes from the request)
        _data.course_code = "se3316";
        _data.date = Date.now();
        // save the bear and check for errors
        _data.save(function(err) {
            if (err){
                res.send(err);
            }
            console.log("post se3316");
            res.json({ message: 'comments created!' });
        });

    })
    
    // get all the bears (accessed at GET http://localhost:8080/api/se3352)
    .get(function(req, res) {
        console.log("se3316 get function logged")
        res.setHeader("Access-Control-Allow-Origin", "*");
        _database.find(function(err, _database) {
            if (err){
                console.log("error");
                res.send(err);
            }
            res.json(_database);
            
        });
    });


// on routes that end in /bears/:bear_id
// ----------------------------------------------------
// router.route('/bears/:bear_id')

//     // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
//     .get(function(req, res) {
//         _database.findById(req.params._database_id, function(err, _database) {
//             if (err){
//                 res.send(err);
//             }
//             res.json(_database);
//         });
//     })
    
//     .put(function(req, res) {

//         // use our bear model to find the bear we want
//         _database.findById(req.params.bear_id, function(err, _database) {

//             if (err){
//                 res.send(err);
//             }

//             _database.name = req.body.name;  // update the bears info

//             // save the bear
//             _database.save(function(err) {
//                 if (err){
//                     res.send(err);
//                 }

//                 res.json({ message: 'database updated!' });
//             });

//         });
//     })
    
//     .delete(function(req, res) {
//         _database.remove({
//             _id: req.params._database_id
//         }, function(err, bear) {
//             if (err){
//                 res.send(err);
//             }
//             res.json({ message: 'Successfully deleted' });
//         });
//     });
    
    
    
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.use(express.static('./static'));
app.listen(port);
console.log('Magic happens on port ' + port);