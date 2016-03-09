/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	signup: function ( req , res ) {
		
		res.view('user/signup');
	},

	create: function (req, res){

    var packet = req.params.all();
    var time = new Date(); 

    //packet.expireDate = time.setDate(time.getDate()+ 90);
    
    //console.log();
    var uid = require('rand-token').uid;
    var token = uid(16);

    packet.verificationCode = token;

    User.create(packet, function (err, user){
     
      if(err){
        
        sails.log.error("UserController.create : ", err);
        return res.json(err);
      
      } else{
        
        sails.log.info("UserController.create : User created");
        
        //Mailer.sendMailUser(user); 

        return res.json(user);
      }
    });
  },

  profileupdate : function ( req , res ) {
    var packet = req.params.all();

    User.update({id:packet.id}, packet ).exec(function updateuser(err, updatedUser){

    if (err) {
    // handle error here- e.g. `res.serverError(err);`
     return res.json(err);
    
    } 
   
    return res.json(updatedUser);
    console.log('Updated user to have name ' + updatedUser[0].email);
    
    });
  },

  findcompanylistById : function ( req , res ) {
   
    var packet = req.params.all();
    Companyaccess.find({'user': packet.id}).populate('company').exec(function (err, compList){
      
      if(err){
       
        return res.json(err);
      
      }  else{
       
        return res.json(compList);
        // return res.json({'group': group, 'isAdmin': isAdmin});
      }
    });

  }

};





