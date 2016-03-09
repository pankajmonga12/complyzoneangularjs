/**
 * CompanyaccessController
 *
 * @description :: Server-side logic for managing companyaccesses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	companycreate : function ( req , res ) {
      
       var packet = req.params.all();

    	Companyaccess.create(packet, function ( err , company ){
          	if(err){
	        
	        sails.log.error("CompanyaccessController.create : ", err);
	        return res.json(err);
         	
         	}  else{

       		 sails.log.info("CompanyaccessController.create : Company access created");
             return res.json(company);
        }
    });

	}
};

