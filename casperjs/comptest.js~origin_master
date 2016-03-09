var casper = require('casper').create({
	"waitTimeout": 5000,
	"pageSettings": {
		 "loadImages":  false,        // do not load images
		"loadPlugins": false         // do not load NPAPI plugins (Flash, Silverlight, ...)
	}
});

casper.userAgent('Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0');
var x = require('casper').selectXPath;

var compCin = '';
if (casper.cli.has(0) ) {

	//casper.echo(casper.cli.get(0));
	compCin = casper.cli.get(0);
}

var inputElements  = {
	 "cin": "U45400UR2013PTC000540"
}

casper.options.viewportSize = {width: 1679, height: 902};

casper.start("http://mca21.gov.in/DCAPortalWeb/dca/MyMCALogin.do?method=setDefaultProperty&mode=31");

casper.waitUntilVisible("#companyName", function (){
	this.sendKeys("#cin", compCin);
	//console.log(JSON.stringify({"error": inputElements.cin}));
	this.click("td a#Default");
}, function (){
	console.log(JSON.stringify({"error": "page could not be opened1!"}));
	this.exit();
})


casper.then(function (){

    casper.waitForSelector(".CaptionColon", function (){
    	
 var js = this.evaluate(function() {
     var html = document.getElementById('DataBlock1'); 
     var rowData = document.getElementById("DataBlock1").rows;
     console.log(JSON.stringify({"data": rowData.length}));
     var compCIN = [];
     item = {}
     item ["companyCin"] = 'U45400UR2013PTC000540';
     compCIN.push(item);
     for (var i = 2; i < 22; i++) {
     	
     	              item = {}
     	                if (rowData[i].querySelectorAll(".Caption")[0].id) {
						       var head = rowData[i].querySelectorAll(".Caption")[0].id; 
						       if ( head == 'companyName_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["companyname"] = compName.trim();
						       
						        }
						       if( head == 'RoCCode_lbl' ){
                    
                                var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="rocCode"]')[0].value;
						       	item ["rocCode"] = compName.trim();

						       }

						       if( head == 'RegNumber_lbl' ){
                    
                                var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["regNo"] = compName.trim();

						       }

						        if( head == 'CompanyCategory_lbl' ){
                    
                                var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="cmpnyCatgry"]')[0].value;
						       	item ["compcategory"] = compName.trim();

						       }

						       if( head == 'CompanySubCategory_lbl' ){
                    
                                var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="subCatgry"]')[0].value;
						       	item ["compsubcategory"] = compName.trim();

						       }

						       if( head == 'reqdCompanyClass_lbl' ){
                    
                                var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="cmpnyClass"]')[0].value;
						       	item ["compCLass"] = compName.trim();

						       }

						       if ( head == 'AuthorisedCapital_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["authCapital"] = compName.trim().replace(",", "");
						       
						        }

						        if ( head == 'PaidUpCapital_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["paidUpCapital"] = compName.trim().replace(",", "");
						       
						        }

						        if ( head == 'NoOfmembers_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["noOfMember"] = compName.trim();
						       
						        }

						        if ( head == 'IncorporationOrEstablishmentDate_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="regDt"]')[0].value;
						       	item ["incDate"] = compName.trim();
						       
						        }

						        if ( head == 'AddressLine1_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["addressline1"] = compName.trim();
						       
						        }

						        if ( head == 'AddressLine2_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["addressline2"] = compName.trim();
						       
						        }

						        if ( head == 'City_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["city"] = compName.trim();
						       
						        }

						        if ( head == 'State_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["state"] = compName.trim();
						       
						        }

						        if( head == 'Country_lbl' ){
                    
                                var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="cntryCode"]')[0].value;
						       	item ["country"] = compName.trim();

						       }

						       if ( head == 'Pincode_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["pincode"] = compName.trim();
						       
						        }

						        if ( head == 'email_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["emailId"] = compName.trim();
						       
						        }

						        if( head == 'IfListed_lbl' ){
                    
                                var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="listedFlag"]')[0].value;
						       	item ["listed"] = compName.trim();

						       }

						       if ( head == 'AGMDate_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="agmDate"]')[0].value;
						       	item ["agmDate"] = compName.trim();
						       
						        }

						        if ( head == 'BalanceSheetDate_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].querySelectorAll('[name="balanceSheetDt"]')[0].value;
						       	item ["balanceSheet"] = compName.trim();
						       
						        }

						        if ( head == 'Status_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["status"] = compName.trim();
						       
						        }
					    };    


                    compCIN.push(item);
     };
 	  return compCIN;
	});	
    this.echo(JSON.stringify(js)); 

}, function (){
	console.log(JSON.stringify({"error": "page could not be opened2!"}));
	this.exit();
})

	   
		
});
casper.then(function(){

});


casper.run();