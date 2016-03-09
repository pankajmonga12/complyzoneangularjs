var casper = require('casper').create({
	"waitTimeout": 50000,           // Only "info" level messages will be logged
    verbose: true,
	"pageSettings": {
		 "loadImages":  false,        // do not load images
		"loadPlugins": false         // do not load NPAPI plugins (Flash, Silverlight, ...)
	}
});

casper.userAgent('Mozilla/5.0 (X11; Linux x86_64; rv:10.0) Gecko/20100101 Firefox/10.0');
var compCin = '';
if (casper.echo(casper.cli.has(0))) {

	//casper.echo(casper.cli.get(0));
	compCin = casper.cli.get(0);
}
var x = require('casper').selectXPath;
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
	//casper.wait(10000);
    casper.waitForSelector(".CaptionColon", function (){
    	
 var js = this.evaluate(function() {
    //  var html = document.getElementById('DataBlock1'); 
    //  var rowData = document.getElementById("DataBlock1").rows;
    // casper.clickLabel('Signatories of the Company', 'a');
  
    // console.log(JSON.stringify({"error": html.querySelectorAll('a')[4]}));
    //   //casper.click(x("//a[contains(text(), 'Signatories of the Company')]"));
    //    casper.capture('capture1.png');
 	 // return document.getElementById('DataBlock1').querySelectorAll('a')[4];
	});	
    casper.click(x("//a[contains(text(), 'Signatories of the Company')]"));
    //this.test.assertExists(x('//a[contains(@href, "javascript:getSignatoryDetailComp")]'), 'the element exists');
    var href = this.getElementAttribute(x('//a[contains(text(), "Signatories of the Company")]'), "href");
    console.log(href);
    //casper.click("a[href*='javascript:getSignatoryDetailComp']");
     casper.capture('capture2.png');
//this.echo(JSON.stringify(js));
}, function (){
	console.log(JSON.stringify({"error": "page could not be opened2!"}));
	this.exit();
})

	   
		
});
casper.then(function (){
	


	casper.waitForPopup(/SignatoryDetailsAction/, function (){
		casper.withPopup(/SignatoryDetailsAction/, function (){
			casper.then(function (){
				this.waitUntilVisible("#reqdSNo_lbl", function () {
                    
                   
                    casper.wait(10000);

	                casper.capture('capture3.png');
	                var html = this.evaluate(function (){
						
                            var rowData = document.getElementById("DataBlock1").rows;
                      		console.log(JSON.stringify({"data": rowData.length}));
                      		 var compDIR = [];
                      		for (var i = 2; i < rowData.length; i++) {
                             
                               var tdData = rowData[i].getElementsByTagName('td');
                                   
                                    item = {};

                                	item['sno'] = tdData[0].innerHTML;
                                	item['directorName'] = tdData[1].innerHTML;
                                	item['directorDIN'] = tdData[2].innerHTML;
                                	item['directorAddress'] = tdData[3].innerHTML;
                                	item['position'] = tdData[4].innerHTML;
                                	item['date'] = tdData[5].innerHTML;

                                	 compDIR.push(item);
                                
                                   
                      		}
						     return compDIR;


					})

					this.echo(JSON.stringify(html));
					
			}, function (){
					console.log(JSON.stringify({"error": "failed to open the page"}));
					this.exit();
				})		
		})
	});	
	});
});
// casper.then(function (){
// 	casper.waitForPopup(/SignatoryDetailsAction/, function (){
// 		casper.withPopup(/SignatoryDetailsAction/, function (){
// 			casper.then(function (){
// 				this.waitUntilVisible("#reqdSNo_lbl", function () {

// 					var html = this.evaluate( function (){
					 
// 					  return document;

// 					})
//                     casper.capture('capture3.png');
// 					console.log(html);

// 				}, function (){
// 					console.log(JSON.stringify({"error": "failed to open the page"}));
// 					this.exit();
// 				})
// 			})			
// 		})
// 	});	
// })
casper.then(function(){

});


casper.run();