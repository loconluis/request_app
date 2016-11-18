var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Conexion a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/request');

var request_schema = new Schema({
    author: String,
    message: String,
    email: String,
    date: Date
});

var Request = mongoose.model('Request', request_schema);

module.exports.Request = Request;