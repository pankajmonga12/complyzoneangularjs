var casper = require('casper').create({
	"waitTimeout": 5000,
	"pageSettings": {
		 "loadImages":  false,        // do not load images
		"loadPlugins": false         // do not load NPAPI plugins (Flash, Silverlight, ...)
	}
});

casper.userAgent('Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0');
var x = require('casper').selectXPath;
var inputElements  = {
	 "cin": "U45400UR2013PTC000540"
}

casper.options.viewportSize = {width: 1679, height: 902};

casper.start("http://mca21.gov.in/DCAPortalWeb/dca/MyMCALogin.do?method=setDefaultProperty&mode=31");

casper.waitUntilVisible("#companyName", function (){
	this.sendKeys("#cin", inputElements.cin);
	//console.log(JSON.stringify({"error": inputElements.cin}));
	this.click("td a#Default");
}, function (){
	console.log(JSON.stringify({"error": "page could not be opened1!"}));
	this.exit();
})


casper.then(function (){
	casper.wait(10000);
    casper.waitForSelector(".CaptionColon", function (){
    	
 var js = this.evaluate(function() {
     var html = document.getElementById('DataBlock1'); 
     var rowData = document.getElementById("DataBlock1").rows;
     console.log(JSON.stringify({"data": rowData.length}));
     var compCIN = [];
     item ["cin"] = inputElements.cin;
     compCIN.push(item);
     for (var i = 2; i < 22; i++) {
     	
     	              item = {}
						       var head = rowData[i].querySelectorAll(".Caption")[0].id; 
						       if ( head == 'companyName_lbl' ) {

						       	var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["companyname"] = compName.trim();
						       
						       }
						       else if( head == 'RoCCode_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["rocCode"] = compName.trim();

						       }
						       else if( head == 'RegNumber_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["regNo"] = compName.trim();

						       }
						       else if( head == 'CompanyCategory_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["compCat"] = compName.trim();

						       }
						       else if( head == 'CompanySubCategory_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["compsubcat"] = compName.trim();

						       }
						       else if( head == 'AuthorisedCapital_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["authCapital"] = compName.trim();

						       }
						       else if( head == 'PaidUpCapital_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["paidUpCapital"] = compName.trim();

						       }
						       else if( head == 'NoOfmembers_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["noOfMember"] = compName.trim();

						       }
						       else if( head == 'IncorporationOrEstablishmentDate_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["dateOfIncorprate"] = compName.trim();

						       }
						       else if( head == 'AddressLine1_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["address1"] = compName.trim();

						       }
						        else if( head == 'AddressLine2_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["address2"] = compName.trim();

						       }
						        else if( head == 'City_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["city"] = compName.trim();

						       }
						        else if( head == 'State_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["state"] = compName.trim();

						       }
						        else if( head == 'Country_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["country"] = compName.trim();

						       }
						        else if( head == 'Pincode_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["pincode"] = compName.trim();

						       }
						        else if( head == 'email_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["email_id"] = compName.trim();

						       }
						       else if( head == 'IfListed_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["listedStatus"] = compName.trim();

						       }
						       else if( head == 'AGMDate_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["agmDate"] = compName.trim();

						       }
						       else if( head == 'BalanceSheetDate_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["balanceSheetDate"] = compName.trim();

						       }
						       else if( head == 'Status_lbl' ){
                    
                    var compName = rowData[i].querySelectorAll(".CaptionColon")[0].innerHTML.replace("&nbsp;:&nbsp;", "");
						       	item ["status"] = compName.trim();

						       }
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