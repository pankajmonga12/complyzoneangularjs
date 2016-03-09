/**
* Directors.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 
 migrate: 'alter',

	attributes: {
    
        company : {

          type: 'string'
      	
      	},

      	cin : {

          type: 'string'
      	
      	},

      	user : {

          type: 'integer'
      	
      	},

   		directorDin : {

          type: 'string'
      	
      	},

      	directorName : {

          type: 'string'
      	
      	},

      	designation : {

          type: 'string'
      	
      	},

      	address : {

          type: 'text'
      	
      	},

      	date : {

          type: 'datetime'
      	
      	},


  }
};

