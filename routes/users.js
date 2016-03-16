var db   = require('../models')
  // , bcrypt = require('bcrypt-as-promised');
var sequelizeHandlers = require("./helpers/sequelizeHandlers")

exports.create = function(req, res) {
  var name = req.body.name;  
  var password = req.body.password;
  var email = req.body.email;
  var usertype = "Student"

  db.User.findOne({where: {email: email}}).then(function(user) {
    if (user) {
      res.render("create-user", { message: "email has already been registered" });
    } else {
      console.log("here");
      if (!name || !password || !email) { 
        res.render("create-user", { message: "invalid email, name or password" });
      }

      bcrypt.hash(password, 10).then(function(hash, err) {
        if (err) {
          res.render("create-user", { message: err.message })
          return 
        }
  
        db.User.create({email: email, passwordHash: hash, usertype: usertype, name: name}).then(function(user){
          req.login(user, function(err) {
            if (err) {
              res.render("create-user", { message: err.message })
              return 
            } 

            res.redirect("/") 
            return              
          })            
        }).catch(function(err) {
          res.render("create-user", { message: err.message })
          return 
        })    
      });       
    }
  })
  .catch(sequelizeHandlers.handleCreate(req, res)) 
}