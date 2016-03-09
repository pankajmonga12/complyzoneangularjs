
var timestamp = "<%= req.session.jwTokenTimeOut  %>";
console.log('timestamp'+timestamp);
var fiveminutesbefore=$((timestamp - 5 * 60 * 1000));
console.log('fiveminute'+fiveminutesbefore);