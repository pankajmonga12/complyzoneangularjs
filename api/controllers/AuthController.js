// Location: /api/controllers/AuthController.js
var passport = require("passport");
var jwt = require('jsonwebtoken');

module.exports = {

  login: function(req,res){
    res.view("login");
  },

  process: function (req, res) {
    console.log('socket status1 :'+req.isSocket);
    passport.authenticate(
      'local',
      function (error, user) {
        if (error) {
          sails.log.error(error);
          return res.redirect('/login');
        }
        req.session.user = user;
        console.log(req.session.user);
        req.logIn(user, function (error) {
          if (error) {
            sails.log.error("AuthController.process :", error);
            return res.redirect('/login');
          }
          else {
             
                  var roomName = "Dashboard " + req.session.passport.user;
                  
                  console.log('room Name : '+ roomName);
                  sails.sockets.join(req.socket, roomName);
                  var clients = sails.sockets.subscribers(roomName);

                  console.log('cleints : '+clients);
                  console.log('passport data :'+req.session.passport.user);

                  sails.sockets.broadcast(roomName, 'loginevent', {message:'you already login after login other user!'});

             if (req.isSocket) {
              console.log('socket request !');
             }
            return res.redirect('/');
          }
        });
      }
    )(req, res);
  },

  logout: function (req,res){
    req.logout();
    res.redirect('/');
  },


  index: function (req, res){

      User.findOne({'id': req.session.passport.user}).exec(function (err, user){
     
        if(err){

          return res.json(err);
        
        }
      
        else{
          
          //console.log(user);
          var isAdmin = true;
          var permissions = true;
          // console.log(jwToken.issue({id: user.id}));
          var jwtToken = jwToken.issue({id: user.id});
          req.session.jwToken = jwtToken;
          var profile = jwt.verify(jwtToken, 'pankaj');
          req.session.jwTokenTimeOut = profile.exp;
          req.session.jwTokenCreateTime = profile.iat;
          //req.session.company = 3;
          var logs = {};
          logs.user = user.id;
          logs.type = 'login';
          logs.log  = 'user login activity';

            Activitylogs.create(logs, function (err, activitylog){
              if(err){
                sails.log.error("AuthController.log : ", err);
                //return res.json(err);
              }
              else{
                sails.log.info("AuthController.log : logs saved");
                //return res.json(user);
              }
            });


             // Mailer.sendMailUser(); 

          return res.view('index', {'username':user.firstName, 'permissions': permissions, 'isAdmin': isAdmin, token: jwtToken });
          // return res.json({'group': group, 'isAdmin': isAdmin});

        }
    });
 },

//For dashboard
  subscribeUser : function (req, res) {
    var packet = req.params.all();
    console.log( 'pocket ID :'+packet.userID );
   
    console.log('req socket : '+req.isSocket);
    if (req.isSocket) {
       console.log('true');
       var roomName = "Dashboard " + packet.userID;
       var clients = sails.sockets.subscribers(roomName);
       console.log('cleints : '+clients);
       
       if( clients.length >= 1 ) { 

          //sails.sockets.join(req.socket, roomName);
          //var clients = sails.sockets.subscribers(roomName);
      // console.log(clients);

         // sails.sockets.broadcast(roomName, 'loginevent', {message:'you already login'});
          sails.sockets.join(req.socket, roomName);
       
       }

       else {
             
             sails.sockets.join(req.socket, roomName);
             var clients = sails.sockets.subscribers(roomName);
             sails.sockets.broadcast(roomName, 'messageevent', {message:'only you are login'});

       }
       //sails.sockets.join(req.socket, roomName);
      // var clients = sails.sockets.subscribers(roomName);
       //console.log(clients);
       
       if( clients.length > 1 ) {
        //User.subscribe(subscriber, packet.userID );
          sails.sockets.broadcast(roomName, 'messageevent', {message:'Listen very carefully, Ill shall say this only once..!'});
       }

       else {


       }
      
    }
    
     return res.json({'room':roomName});
   /* var packet = req.params.all();
​
    sails.log.debug("[UserController.subscribeLocation]");
    if (req.isSocket) {
      //Location.subscribe(req, [packet.location], ['update']);  
      var roomName = "Dashboard " + packet.userId;
      sails.sockets.join(req.socket, roomName);
    };
​
    return res.json(200);*/
  },

  _config: {}
};