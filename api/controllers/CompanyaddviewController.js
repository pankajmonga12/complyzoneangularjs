/**
 * CompanyaddviewController
 *
 * @description :: Server-side logic for managing companyaddviews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	compformlist : function (req, res){
		var packet = req.params.all();
		//console.log(packet.id);
		
		Companyaddview.find().then(function (companyaddview){
            
            return res.json( companyaddview );
			//return res.view(companyaddview[0].viewurl);
			//return res.json(200, {"companyaddview": companyaddview[0].viewurl});
			//return res.json(200, {"companyaddview": companyaddview})
		}).caught(function (err){
			sails.log.error("[Companyaddview.find]", err);
			return res.json(500, {"error": err})
		})

		/*Companyaddview.find({"id": packet.id}).then(function (companyaddview){

			return res.view(companyaddview[0].viewurl);
			//return res.json(200, {"companyaddview": companyaddview[0].viewurl});
			//return res.json(200, {"companyaddview": companyaddview})
		}).caught(function (err){
			sails.log.error("[Companyaddview.find]", err);
			return res.json(500, {"error": err})
		})*/
				
	},

	create : function ( req , res ) {
     
     var packet = req.params.all();
	}  
	
};

