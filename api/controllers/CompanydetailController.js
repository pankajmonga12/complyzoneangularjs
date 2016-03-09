/**
 * CompanydetailController
 *
 * @description :: Server-side logic for managing companydetails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	

	compdetail: function ( req , res ) {
		
		res.view('compdetail');
	},
   
    realTimeFetchDirFromGovt : function (req, res){
		var packet = req.params.all();
		var compCin = packet.cin;
		sails.log.info("[CompanydetailController.realTimeFetchDirFromGovt]", 'U45400UR2013PTC000540');

		CasperJS.realTime('director', '', compCin ).then(function (director) {

			return res.json({"director": director})
		
		}).caught(function (err){

			sails.log.error("[CompanydetailController.realTime]", err);
			return res.json(500, {"error": err});
		})
	},


	realTimeCompanyfrmData : function (req, res){
		var packet = req.params.all();
		var compCin = packet.cin;
		sails.log.info("[CompanydetailController.realTimeCompanyData]", 'U45400UR2013PTC000540');

		CasperJS.realTime('companyData','', compCin ).then(function (companyData){

			return res.json({"companyData": companyData})
		
		}).caught(function (err){

			sails.log.error("[CompanydetailController.realTimeCompanyData]", err);
			return res.json(500, {"error": err});
		
		})
	},

	realTimefindCompByNamefrmGovt : function (req, res){
		
		var packet = req.params.all();
		var compName = packet.compName;
		sails.log.info("[CompanydetailController.findCompByNameGovt]", 'JUNGLEE');

		CasperJS.realTime('searchcompany','', compName).then(function (companyData){

			return res.json({"companyData": companyData})
		
		}).caught(function (err){

			sails.log.error("[CompanydetailController.realTimefindCompByNamefrmGovt]", err);
			return res.json(500, {"error": err});
		
		})
	},

  

   saveDir : function ( req , res ) {
     
     var packet = req.params.all();
	 var cin = packet.cin;
     DirectorData.saveDirector( cin).then(function (DirectorData){

			return res.json({"companyData": DirectorData})
		
		}).caught(function (err){

			sails.log.error("[CompanydetailController.saveDir]", err);
			return res.json(500, {"error": err});
		
		})
   },

	companycreate : function ( req , res ) {
      
       var packet = req.params.all();
       var compCin = packet.cin;
        
    	Companydetail.create(packet, function ( err , company ){
          	if(err){
	        
	        sails.log.error("CompanydetailController.create : ", err);
	        return res.json(err);
         	
         	}  	else{

       		 sails.log.info("CompanydetailController.create : Company created");
					   
					    if (company.companyCin) {
							CasperJS.realTime('director', '', compCin ).then(function (director) {
		                     
		                    
				                     director.cin = company.companyCin;
				                     director.user = company.user;
				                     director.company = company.id;
									 //return res.json({"director": director})

									 Director.create(director, function ( err , directorData ){
							    
									          	if(err){
										        
												    sails.log.error("CompanyaccessController.director : ", err);
										   		    return res.json(err);
									         	
									         	}  else{

									       		 	sails.log.info("CompanyaccessController.directorcreate : Director added");
									             	//return res.json(company);
									        		
									        	}
							   		 });	

							}).caught(function (err){

									sails.log.error("[CompanydetailController.realTime]", err);
									return res.json(500, {"error": err});
								
							});
					   }

						var compaccesspacket = {};
						compaccesspacket.company = company.id;
						compaccesspacket.user = company.user;
						
						compaccesspacket.acts = { 

							                     acts: ["*"]

							                    };
						
						compaccesspacket.level = 1;

						console.log(compaccesspacket);
						Companyaccess.create(compaccesspacket, function ( err , companyaccess ){
			    
			          	if(err){
				        
						    sails.log.error("CompanyaccessController.create : ", err);
				   		    return res.json(err);
			         	
			         	}  else{

			       		 	sails.log.info("CompanyaccessController.create : Company access created");
			             	//return res.json(company);
			        		
			        		}
			   		 });
              
                    return res.json( company );
       			}
   		 });

	},

	findcompanyById : function ( req , res ) {
   
	    var packet = req.params.all();
	    Companydetail.find({'id': packet.id}).exec(function (err, company){
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