var db   = require('../models')
var _ = require('lodash');

exports.index = function(req, res) {    
    db.WindowConfiguration.findAll({where: {UserId: req.user.id}, order: ['createdAt']}).then(function(windowConfigurations) {
      res.send({windowConfigurations: windowConfigurations}, 200);
    })
}

exports.new = function(req, res) {  
  res.render("new-windowConfiguration.jade");
}

exports.create = function(req, res) {  
  db.WindowConfiguration.create(_.extend(req.body.windowConfiguration, { UserId: req.user.id })).then(function(windowConfiguration) {      
    res.send({ windowConfiguration: windowConfiguration }, 200)        
  })
  .catch(sequelizeHandlers.handleCreate(req, res))
}

function WindowConfigurationMissingException() {}

exports.update = function(req, res) {
    db.WindowConfiguration.find({where: {id: req.body.id}})
    .then(function(windowConfiguration) {
        if(windowConfiguration) {
            return windowConfiguration.updateAttributes(req.body)
        } else  {
            res.send(404)
            throw WindowConfigurationMissingException
        }
    })
    .then(function(windowConfiguration) {
        res.send({windowConfiguration: windowConfiguration}, 200);
    })
}

exports.delete = function(req, res) {
  db.WindowConfiguration.find({where: {id: req.body.id}})
  .then(function(windowConfiguration) {
      if(windowConfiguration) {
          return windowConfiguration.destroy()
      } else {
          res.send(404)
          throw WindowConfigurationMissingException
      }
  })
  .then(function(windowConfiguration) {
      res.send(200)
  })
}