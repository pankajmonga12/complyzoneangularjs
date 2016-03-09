/**
* Companyaddview.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  migrate: 'alter',

  attributes: {


	  	id : {
	  
	    type: 'integer',
	    autoIncrement: true
	  
	  },

		viewname : {

		type: 'string',
		unique: true

		},

		viewurl : {

		type: 'string',
		unique: true

		}

  }
};

