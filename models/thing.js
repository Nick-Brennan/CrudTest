var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var thingSchema = new Schema({
	name: String,
	size: Number
});

var Thing = mongoose.model("Thing", thingSchema);

module.exports = Thing;