var db   = require('../models')
var _ = require('lodash');
var sequelizeHandlers = require("./helpers/sequelizeHandlers")

exports.show = function(req, res) {    
    db.Lesson.findById(req.id).then(function(lesson) {
      res.send({lesson: lesson}, 200);
    })
}

exports.index = function(req, res) {    
    db.Lesson.findAll({order: ['createdAt', "DESC"]}).then(function(lessons) {
      res.send({lessons: lessons}, 200);
    })
}

exports.new = function(req, res) {  
  res.render("new-lesson.jade");
}

exports.create = function(req, res) {  
  db.Lesson.create(_.extend(req.body.lesson, { UserId: req.user.id })).then(function(lesson) {      
    res.send({ lesson: lesson }, 200)        
  })
  .catch(sequelizeHandlers.handleCreate(req, res))
}

function LessonMissingException() {}

exports.update = function(req, res) {
    db.Lesson.find({where: {id: req.body.id}})
    .then(function(lesson) {
        if(lesson) {
            return lesson.updateAttributes(req.body)
        } else  {
            res.send(404)
            throw LessonMissingException
        }
    })
    .then(function(lesson) {
        res.send({lesson: lesson}, 200);
    })
}

exports.delete = function(req, res) {
  db.Lesson.find({where: {id: req.body.id}})
  .then(function(lesson) {
      if(lesson) {
          return lesson.destroy()
      } else {
          res.send(404)
          throw LessonMissingException
      }
  })
  .then(function(lesson) {
      res.send(200)
  })
}