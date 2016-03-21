var mongoose = require('mongoose');
var locations = mongoose.model('Location');

module.exports = (function() {
	return {
		index: function(req,res){
			locations.find({}, function(err,results){
				if(err) {
					console.log(err);
				}
				else {
					res.json(results);
				}
			})
		}
	}
})();