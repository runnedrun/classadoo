var db   = require('../models')
var _ = require('lodash');
var sequelizeHandlers = require("./helpers/sequelizeHandlers")

exports.show = function(req, res) {    
    db.PageConfiguration.findById(req.params.id).then(function(pageConfiguration) {
      if (pageConfiguration) {
        res.render("new-page-configuration", _.extend(pageConfiguration.dataValues, {prereqs: [], method: "Update"}));  
      } else {
        res.render("error", {message: "configuration not found", error: {status: 404}});
      }      
    })
}

exports.index = function(req, res) {    
    db.PageConfiguration.findAll({where: {UserId: req.user.id}, order: ['createdAt']}).then(function(pageConfigurations) {
      res.send({pageConfigurations: pageConfigurations}, 200);
    })
}

exports.new = function(req, res) {  
  res.render("new-page-configuration", {method: "New"});
}


exports.create = function(req, res) {    
  db.PageConfiguration.create(_.extend(req.body.pageConfiguration, { UserId: req.user.id }))  
  .then(function(pageConfiguration) {        
    req.flash("successMessages", "page configuration created!");  
    res.redirect("/page-configurations/" + pageConfiguration.id);
  })
  .catch(sequelizeHandlers.handleCreate(req, res))
}

function PageConfigurationMissingException() {}

exports.update = function(req, res) {
    db.PageConfiguration.find({where: {id: req.body.id}})
    .then(function(pageConfiguration) {
        if(pageConfiguration) {
            return pageConfiguration.updateAttributes(req.body)
        } else  {
            res.send(404)
            throw PageConfigurationMissingException
        }
    })
    .then(function(pageConfiguration) {
        res.send({pageConfiguration: pageConfiguration}, 200);
    })
}

exports.delete = function(req, res) {
  db.PageConfiguration.find({where: {id: req.body.id}})
  .then(function(pageConfiguration) {
      if(pageConfiguration) {
          return pageConfiguration.destroy()
      } else {
          res.send(404)
          throw PageConfigurationMissingException
      }
  })
  .then(function(pageConfiguration) {
      res.send(200)
  })
}