/**
 * ActivitylogsController
 *
 * @description :: Server-side logic for managing activitylogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	findlogsByuserId : function ( req , res ) {
   
    var packet = req.params.all();
    Activitylogs.find( { where: { user: packet.id }, limit: 25, sort: 'id DESC' } ).exec(function (err, company){
      if(err){
        return res.json(err);
      }
      else{
      	req.session.company = company[0].id;
      	//console.log(req.session);
        return res.json( company);
        // return res.json({'group': group, 'isAdmin': isAdmin});
      }
    });

  }
};

