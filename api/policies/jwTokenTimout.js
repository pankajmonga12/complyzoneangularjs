/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!/documentation/concepts/Policies
 *
 */
 var jwt = require('jsonwebtoken');

module.exports = function( req, res, next ) {

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
 //console.log(JSON.stringify( req.session.jwToken )); 
  //console.log('token' + req.param('token'));
  if ( req.session.jwToken ) {
    
    var profile = jwt.verify(req.session.jwToken, 'pankaj');
    console.log('profile' +JSON.stringify( profile ));
    var unix = Math.round(+new Date()/1000);
    //console.log(unix);

    if ( unix < profile.exp ) {

	    var jwtToken = jwToken.issue({id: profile.id});
	    req.session.jwToken = jwtToken;
	    var profile = jwt.verify(jwtToken, 'pankaj');
	    req.session.jwTokenTimeOut = profile.exp;
	    req.session.jwTokenCreateTime = profile.iat;
	    //console.log(token);
    
    };
    return next();
  }

  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
