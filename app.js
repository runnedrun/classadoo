var express = require('express');
var session = require('express-session');
var routes = require('./routes');
var users = require('./routes/users');
var tasks = require('./routes/tasks');
var pageConfigurations = require('./routes/pageConfigurations');
var windowConfigurations = require('./routes/windowConfigurations');
var lessons = require("./routes/lessons.js")
var http = require('http');
var path = require('path');

var domain = require('domain');
var dbDomain = domain.create();


var favicon = require('serve-favicon');
var logger = require('morgan');
var session = require('express-session');
var bodyParser = require('body-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');  
var cookieParser = require("cookie-parser");
var methodOverride = require("method-override");

var redis = require('redis')
var RedisStore = require('connect-redis')(session)
var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var db = require('./models')
var bcrypt = require('bcrypt-as-promised')
var flash = require('connect-flash')

var app = express();

var redisClient;
if (process.env.REDISTOGO_URL) {
  var rtg = url.parse(process.env.REDISTOGO_URL);
  var redisClient = redis.createClient(rtg.port, rtg.hostname);

  redisClient.auth(rtg.auth.split(":")[1]);
} else {
  redisClient = redis.createClient();
}


var redisSession = session({secret: '1234567890QWERTY', 
  store: new RedisStore({
    client: redisClient      
  }),
  resave: false,
  saveUninitialized: false
});  

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
app.use(cookieParser());
// app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(multer());
app.use(flash());
app.use(redisSession);
app.use(passport.initialize());
app.use(passport.session());  
app.use(express.static(path.join(__dirname, 'public')));

var authWhitelists = {
  "GET":  ["/js", "/stylesheets", "/img", "/log", "/user/create"],
  "POST": ["/user"],
  "PUT": []
}

function checkAuthWhitelist(url, authWhitelist) {    
   for(var i = 0; i < authWhitelist.length; i++) {
        if(!!url.match(new RegExp("^" + authWhitelist[i]))) {
            console.log(url + " does not require auth")
            return false
        }
    }    
    return true
} 

app.use(function(req, res, next) {  
  if (!checkAuthWhitelist(req.url, authWhitelists[req.method]) || req.user) {
    next();
  } else {
    res.redirect("/login");
  }  
});

app.use(function(req, res, next){
    res.locals.successMessages = req.flash('successMessages');
    res.locals.errorMessages = req.flash('errorMessages') + req.flash('error');
    next();
});

passport.serializeUser(function(user, done) {    
  done(null, user.id)
})

passport.deserializeUser(function(id, done) {  
  db.User.findById(id).then(function(user, err) {
    return done(null, user)
  }).catch(function(err){
    return done(err)
  })
})

passport.use(new LocalStrategy(
  { 
    usernameField: 'email'
  }, 
  function(email, password, done) {  
    db.User.findOne({where: {email: email}}).then(function(user){    
      if (!user) {
        return done(null, false, { message: "User not found" })
      }    

      bcrypt.compare(password, user.passwordHash).then(function(res) {             
        return done(null, user);    
      }).catch(function(err){    
        done(null, false, { message: "Password incorrect" })
      });    
    }).catch(function(err) {    
      return done(err)
    }) 
  }
))

app.post("/login", passport.authenticate('local', {
  successRedirect: "/",
  failureRedirect: "/login",
  failureFlash: true
}));

app.post("/user", users.create)

app.get("/login", function(req, res) {        
  res.render("login");
})

app.get("/user/create", function(req, res) {
  res.render("create-user");
})

app.get("/", function(req, res) {
  user = req.user;  
  res.render("user-profile", { user: user });
})

app.get("/tasks/new", tasks.new);
app.get("/tasks/:id", tasks.show);
app.post("/tasks", tasks.create);
app.put("/tasks", tasks.update);

app.get("/page-configurations/new", pageConfigurations.new)
app.get("/page-configurations/:id", pageConfigurations.show)
app.post("/page-configurations", pageConfigurations.create)
app.put("/page-configurations", pageConfigurations.update)

app.get("/lessons/:id", lessons.show)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});  

module.exports = app;

// http.createServer(app).listen(app.get('port'), function(){
//   console.log("Express server listening on port " + app.get('port'));
// });
