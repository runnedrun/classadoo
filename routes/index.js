
exports.showSite = function(req, res){
	console.log("site", req.param("siteName"))
  res.render('show-site', {siteId: req.param("siteName")});
};

exports.showScratchPad = function(req, res){	
	var docId = req.param("docId") || Math.random().toString(36).substring(7);
	
  	res.render('scratchpad', {docId: req.param("docId")});
};

