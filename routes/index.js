
exports.showSite = function(req, res){
	console.log("site", req.param("siteName"))
  res.render('show-site', {siteId: req.param("siteName")});
};

exports.showScratchPad = function(req, res){	
  res.render('scratchpad', {docId: req.param("docId")});
};

