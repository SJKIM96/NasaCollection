const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

var port = 8888;
var app = express();
var users = require('./routes/users');
var config = require("./routes/database");

//Connected to database
mongoose.connect(config.database);

//Log on connection 
mongoose.connection.on('connected', () => {
    console.log("Connected to db " + config.database);
});

//log on error
mongoose.connection.on('error', (err) => {
    console.log("Database " + err);
});

//CORS Middleware
app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require("./routes/passport")(passport);

//Reroute to users
app.use('/users', users);

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Index Route
app.get('/', (req, res) => {
   res.send('Invalid Endpoint'); 
});

//Start server
app.listen(port, () =>{
    console.log('Server started on port ' + port);
});