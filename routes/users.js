exports.create = function(req, res) {
  var name = req.body.name;  
  var password = req.body.password;
  var email = req.body.email;
  var usertype = "Student"

  db.User.findOne({where: {email: email}}).then(function(user) {
    if (user) {
      res.redirect("/teacher/create?err=user+already+exists")
    } else {
      console.log("here");
      if (!name || !password || !email) { 
        res.redirect("/teacher/create?err=invalid+name+email+or+password");
      }

      bcrypt.hash(password, 10).then(function(hash, err) {
        if (err) {
          res.send(err, 500)  
          return 
        }
  
        db.User.create({email: email, passwordHash: hash, usertype: usertype, name: name}).then(function(user){
          req.login(user, function(err) {
            if (err) {
              res.send(err, 500)  
              return 
            } 

            res.redirect("/") 
            return              
          })            
        }).catch(function(err) {
          res.send(err, 500)
          return 
        })    
      });       
    }
  }) 
}