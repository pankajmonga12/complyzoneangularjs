var casper = require('casper').create();

var compName = '';
if (casper.cli.has(0) ) {

	//casper.echo(casper.cli.get(0));
	compName = casper.cli.get(0);
}

var inputElements  = {
	"companyName": "junglee"
	// "cin": ""
}

casper.options.viewportSize = {width: 1679, height: 902};

casper.start("http://mca21.gov.in/DCAPortalWeb/dca/MyMCALogin.do?method=setDefaultProperty&mode=31");

casper.waitUntilVisible("#companyName", function (){
	this.sendKeys("#companyName", compName);
	this.click("#cinLookup");
}, function (){
	console.log(JSON.stringify({"error": "page could not be opened!"}));
	this.exit();
})

casper.then(function (){
	casper.waitForPopup(/displayCIN/, function (){
		casper.withPopup(/displayCIN/, function (){
			casper.then(function (){
				this.waitUntilVisible("#listlov", function () {

					var html = this.evaluate(function (){
						var forEach = Array.prototype.forEach;
						var compSearch = [];
						var rowData = document.querySelectorAll("input[name='strCompanyName']");
						 console.log(JSON.stringify({"data": rowData.length}));
				        if(rowData.length && rowData.length > 0){
				         
					        for (var i = 0; i < rowData.length; i++) {
					    	   console.log(i);
                   var name = rowData[i].value;
                    var cin = document.querySelectorAll("input[name='strCin']")[i].value;
                    item = {}
						        item ["name"] = name;
						        item ["cin"] = cin;
                    compSearch.push(item);
					        };
				        }
						 return compSearch;

					})

					console.log(JSON.stringify(html));

				}, function (){
					console.log(JSON.stringify({"error": "failed to open the page"}));
					this.exit();
				})
			})			
		})
	});	
})


casper.run();