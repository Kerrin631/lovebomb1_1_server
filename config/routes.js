var locations = require('./../server/controllers/locations.js');
module.exports = function(app) {
	app.get('/locations', function(req,res){
		locations.index(req,res);
	});
}
