var db   = require('../models')
var _ = require('lodash');
var sequelizeHandlers = require("./helpers/sequelizeHandlers")

exports.show = function(req, res) {     
    db.Task.findById(req.params.id).then(function(task) {
      if (task) { 
        db.PageConfiguration.findAll({order: ["createdAt", "DESC"]}).then(function(pageConfigurations) {          
          res.render("new-task", _.extend(task.dataValues, {prereqs: pageConfigurations, method: "Update"}));  
        })        
      } else {
        res.render("error", {message: "task not found", error: {status: 404}});
      }      
    })
}

exports.index = function(req, res) {    
    db.Task.findAll({where: {UserId: req.user.id}, order: ['createdAt']}).then(function(tasks) {
      res.send({tasks: tasks}, 200);
    })
}

exports.new = function(req, res) {  
  res.render("new-task", {method: "New"});
}

exports.create = function(req, res) {    
  db.Task.create(_.extend(req.body.task, { UserId: req.user.id }))  
  .then(function(task) {        
    req.flash("successMessages", "task created!");  
    res.redirect("/tasks/" + task.id);
  })
  .catch(sequelizeHandlers.handleCreate(req, res))
}

function TaskMissingException() {}

exports.update = function(req, res) {
    db.Task.find({where: {id: req.body.id}})
    .then(function(task) {
        if (task) {            
            return task.updateAttributes(req.body.task)
        } else  {
            res.send(404)
            throw taskMissingException
        }
    })
    .then(function(task) {
        req.flash("successMessages", "task updated!");  
        res.redirect("/tasks/" + task.id);
    })
    .catch(sequelizeHandlers.handleCreate(req, res))
}

exports.delete = function(req, res) {
  db.Task.find({where: {id: req.body.id}})
  .then(function(task) {
      if(task) {
          return task.destroy()
      } else {
          res.send(404)
          throw TaskMissingException
      }
  })
  .then(function(task) {
      res.send(200)
  })
}