
var mongoose = require('mongoose');
module.exports.Thing = require("./thing");
mongoose.connect("mongodb://localhost/CrudTest");