// JavaScript File

// app/models/db.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var board   = new Schema({
    course_code : String,
    comments: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('messageBoard', board);