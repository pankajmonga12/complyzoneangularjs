/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var bcrypt = require('bcrypt');

module.exports = {

  migrate: 'alter',
  
  attributes: {

      firstName: {

          type: 'string',
          required: true
      },
      lastName: {

          type: 'string',
          required: true
      
      },
      email: {

          type: 'email',
          email: true,
          unique: true,
          required: true
      
      },

      password  : {

          type: "string",
          required: true
      
      },
      
      state  : {

          type: "string"
      
      },
      
      phone  : {

          type: "integer"
      
      },

      address  : {

          type: "string"
      
      },

      organization  : {

          type: "string"
      
      },
      
      category  : {

          type: "string",

      
      },

      subscriptioncomapnyPlan  : {

          type: "integer"
      
      },

      verificationCode  : {

          type: "string"
      
      },

      registrationDate  : {

          type: "datetime",
          defaultsTo: function (){ return new Date(); }
      
      },


      activeDate  : {

          type: "datetime",
          defaultsTo: function (){ return new Date(); }
          
      },
       
      expireDate  : {

          type: "datetime"
      
      },

      subscriptionPlan  : {

          type: "integer",
          defaultsTo : 1
      
      },
     
      status: {

          type: 'string',
          enum: ['pending', 'approved', 'denied'],
          defaultsTo : 'pending'
      
      },

      roles  : {

          type: "string"
      
      },

      groups: {

      type: 'string',
     
    },


      toJSON: function() {
      var obj = this.toObject();
     // obj.token = jwToken.issue({id: obj.id})
      // Remove the password object value
      delete obj.password;
      // return the new object without password
      return obj;
    }  
  },

  beforeCreate: function(user, cb) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else{
          user.password = hash;
          cb(null, user);
        }
      });
    });
  },

  validationMessages: { //hand for i18n & l10n 
        email: {
            required: 'Email is required',
            email: 'Provide valid email address',
            unique: 'Email address is already taken'
        },

        firstName: {
            required: 'First Name is required'
        },

        lastName: {
            required: 'Last Name is required'
        },

        password: {
            required: 'Password is required'
        }
  }      
};

