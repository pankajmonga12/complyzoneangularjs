/**
* Subscription.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

   migrate: 'alter',

   attributes: {
     

      subscriptionTitle: {

      	type: 'string'
      },

      subscriptionDesc: {

      	type: 'string'
      },

       subscriptionType: {

      	type: 'integer'
      },

      subscriptionAmount: {

      	type: 'integer'
      },

      
  }
};

