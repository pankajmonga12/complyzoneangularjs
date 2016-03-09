/**
* Acts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  migrate: 'alter',

  attributes: {

     actName : {

     	type: 'text'
     
     },


    actDescription : {

        type : 'text'
     
     },

     applicable : {

     	type : 'json'
     
     },
    


     conditioncheck : {

     	type : 'integer',
     	defaultsTo : 0
     
     },

     condition : {

     	type : 'json'
     
     },


     status : {

     	type : 'integer',
     	enum: ['1', '0'],
     	defaultsTo : 1

     },

      toJSON: function() {
      var obj = this.toObject();
      // Remove the password object value
      //delete obj.applicable;
     // delete obj.condition;
      delete obj.conditioncheck;
      delete obj.createdAt;
      delete obj.updatedAt;
      // return the new object without password
      return obj;
    } 

  }
};

