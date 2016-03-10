var db   = require('../models')
var _ = require('lodash');
var sequelizeHandlers = require("./helpers/sequelizeHandlers")

exports.show = function(req, res) {         
    db.Class.findById(req.params.id).then(function(klass) {
      if (klass) {         
        res.render("class-dashboard", {klass: klass});          
      } else {
        res.render("error", {message: "class not found", error: {status: 404}});
      }      
    })
}


exports.showByName = function(req, res) {             
    var name = req.query.name;

    db.Class.find({where: {name: name}}).then(function(klass) {
      if (klass) {         
        res.send(200, {"class": klass});          
      } else {
        res.send(404, {error: "class not found"});
      }      
    })
}

exports.index = function(req, res) {    
    db.Class.findAll().then(function(classes) {
      res.render("classes", {classes: classes});
    })
}

exports.new = function(req, res) {  
  res.render("new-class");
}

exports.create = function(req, res) {    
  db.Class.create(req.body)  
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
            return klass.updateAttributes(req.body)
        } else  {
            res.send(404)
            throw ClassMissingException
        }
    })
    .then(function(klass) {        
        res.sendStatus(200);
    })    
    .catch(sequelizeHandlers.handleUpdate(req, res))
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