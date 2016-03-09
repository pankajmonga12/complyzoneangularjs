var exec = require('child_process').exec;
var Promise = require("bluebird");

var redis = require("redis");

// client = redis.createClient();

// set expiration to one hour
// Promise.promisifyAll(client)

module.exports = {
  realTime: realTime
}


function realTime(provider, link, cin, pathToScript){
  provider = provider.toLowerCase();
  console.log("[CasperJS.realTime] calling casperjs realtime scraper for ", provider, link, cin );

  if(cin){
    var script = "casperjs ./casperjs/" + provider + "/realTime.js \"" + cin + "\" " + link
  } else {
    var script = "casperjs ./casperjs/" + provider + "/realTime.js \"" + link + "\" "  
  }
console.log(script);
  if(pathToScript){
    script = pathToScript + "\"" + link + "\""
  }

  return new Promise(function (resolve, reject){
    exec(script, {maxBuffer: 1024*1024}, function (err, result){
      if(err){
        console.error("[CasperJS.realTime]", err);
        reject(err);
      } else {
        var junkStartIndex = result.indexOf("Unsafe JavaScript attempt to access");
        if(junkStartIndex > 0){
          result = result.substr(0, junkStartIndex);        
        }
        var junkStartIndex = result.indexOf("true");
        if(junkStartIndex > 0){
          result = result.substr(0, junkStartIndex);        
        }
        //result = JSON.parse(result)
        console.log("[CasperJS.realTime] success", result);
        resolve(result);
      }
    })
  })  
}

