/**
* Companyaccess.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

   migrate: 'alter',

   attributes: {
     
      company: {

      model: "companydetail",
      required: true
     
     },

      user : {

      	type: 'integer',
        required: true
      
      },

      acts : {

        type: 'json',
        required: true
      
      },

       level : {

        type: 'integer',
        required: true
      
      },

      status : {

        type: 'integer',
        enum: ['1', '0']
      
      },

      
  }
};


