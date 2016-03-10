exports.handleCreate = function(req, res) {
	return function(err) {
		if (err.name === "SequelizeValidationError") {
			req.flash("errorMessages", err.message);			
			res.redirect(req.path + "/new")
		} else {
			req.flash("errorMessages", "Something went wrong with the DB");
			res.redirect(req.path + "/new")
		}
	}		
}

exports.handleUpdate = function(req, res) {
	return function(err) {
		console.log("error is:", err);
		if (err.name === "SequelizeValidationError") {			
			res.send(400, {error: err});
		} else {			
			res.send(500, {error: err});
		}
	}		
}