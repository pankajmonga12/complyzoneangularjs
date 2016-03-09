

 function saveDirector (compCin) {

        sails.log.info("[CompanydetailController.realTimeFetchDirFromGovt]", 'U45400UR2013PTC000540');

		CasperJS.realTime('director', '', compCin ).then(function (director) {
            console.log(director);
			return director;
		
		}).caught(function (err){

			sails.log.error("[CompanydetailController.realTime]", err);
			//return res.json(500, {"error": err});
		})

   }