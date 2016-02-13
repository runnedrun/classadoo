var db   = require('../models')
var _ = require('lodash');
var sequelizeHandlers = require("./helpers/sequelizeHandlers")

exports.show = function(req, res) {     
    db.Class.findById(req.params.id).then(function(klass) {
      if (klass) { 
        db.PageConfiguration.findAll({order: ["createdAt", "DESC"]}).then(function(pageConfigurations) {          
          res.render("new-class", _.extend(klass.dataValues, {prereqs: pageConfigurations, method: "Update"}));  
        })        
      } else {
        res.render("error", {message: "class not found", error: {status: 404}});
      }      
    })
}

exports.index = function(req, res) {    
    db.Class.findAll({where: {UserId: req.user.id}, order: ['createdAt']}).then(function(classes) {
      res.send({classes: classes}, 200);
    })
}

exports.new = function(req, res) {  
  res.render("new-class", {method: "New"});
}

exports.create = function(req, res) {    
  db.Class.create(_.extend(req.body.class, { UserId: req.user.id }))  
  .then(function(klass) {        
    req.flash("successMessages", "class created!");  
    res.redirect("/classes/" + klass.id);
  })
  .catch(sequelizeHandlers.handleCreate(req, res))
}

function ClassMissingException() {}

exports.update = function(req, res) {
    db.Class.find({where: {id: req.body.id}})
    .then(function(klass) {
        if (klass) {            
            return klass.updateAttributes(req.body.klass)
        } else  {
            res.send(404)
            throw ClassMissingException
        }
    })
    .then(function(klass) {
        req.flash("successMessages", "class updated!");  
        res.redirect("/classes/" + klass.id);
    })
    .catch(sequelizeHandlers.handleCreate(req, res))
}

exports.delete = function(req, res) {
  db.Class.find({where: {id: req.body.id}})
  .then(function(klass) {
      if(klass) {
          return klass.destroy()
      } else {
          res.send(404)
          throw ClassMissingException
      }
  })
  .then(function(klass) {
      res.send(200)
  })
}