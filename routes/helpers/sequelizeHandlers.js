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