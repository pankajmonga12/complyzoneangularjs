/**
* Activitylogs.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

   migrate: 'alter',

   attributes: {
     
      user : {

      	type: 'integer',
        required: true
      
      },

      type : {

        type: 'string',
        required: true
      
      },
    
       log : {

        type: 'string',
        required: true
      
      }

      
  }
};
