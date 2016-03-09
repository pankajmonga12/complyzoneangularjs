/**
 * ActsController
 *
 * @description :: Server-side logic for managing acts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {


	
	findActsById : function (req , res) {
		
		var packet = req.params.all();

		 var query = 'select distinct id , status ,"actName","actDescription"'+  
		             'from acts where id IN'+ 
		             "(SELECT id FROM(  select id,json_array_elements(applicable->'applicable')::text::int AS chk from acts) sub"+
		             ' where chk ='+packet.compId+');';

			Acts.query( query, function(err, results) {
				
				if (err) return res.json(500, {"error": err});
				
				//console.log(results.rows);
				 var queryS = [];

				 for (var i = 0; i < results.rows.length; i++) {
				 	
				 	 console.log(results.rows[i].id);
				 	 queryS['ids'] =results.rows[i].id;
				 	//  item = {};

                	queryS[i] = results.rows[i].id;
                	//queryS[1] = 2;

				};
				//  console.log(JSON.stringify( queryS ));

				   var params = [];
					
					for(var i = 1; i <= queryS.length; i++) {
				
					  params.push('' + i);
				
					}
                
                if (queryS.length > 0 ) {

                   	var queryText = 'SELECT id , status ,"actName","actDescription" FROM acts WHERE id NOT IN (' + params.join(',') + ')';

                } else {

                	var queryText = 'SELECT id , status ,"actName","actDescription" FROM acts';
                }
                
                //console.log( queryText );
                
                var actList = [];
                
                Acts.query( queryText, function(err, resultnotApp) {
				
				if (err) return res.serverError(err);
                    
                  // console.log(resultnotApp.rows);

                   actListt = {};
                   actListt['Applicable'] = results.rows;
                   actListt['nonApplicable'] = resultnotApp.rows;
                   console.log(JSON.stringify( actListt ));
                   actList.push(actListt);
                   //console.log(JSON.stringify( actList));
                   return res.json(actList);
				
				});
			   //console.log(JSON.stringify( actList ));
				
			
			});
	},

	actupdate : function ( req , res ) {
    var packet = req.params.all();

    Acts.update({id:packet.id}, packet ).exec(function updateact(err, updated){

    if (err) {
    // handle error here- e.g. `res.serverError(err);`
    return res.json(err);
    
    } 

     console.log('Updated act detail' + updated[0].actName);
    
     return res.json(updated);
    
    });
  }
};

