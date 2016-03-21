var mongoose = require('mongoose');
var locationSchema = new mongoose.Schema({
	longitude: Number,
	latitude: Number
});

mongoose.model('Location', locationSchema);
