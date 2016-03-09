/**
* Companydetail.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  migrate: 'alter',

  attributes: {
   
    
    user: {
    	model: "user",
      required: true
     },

     personName : {

          type: 'string'
      },

     fatherName : {

          type: 'string'
      },

      spouseName : {

          type: 'string'
      },

      qualification : {

          type: 'string'
      },
      
      nationality : {

          type: 'string'
      },
   
      occupation : {

          type: 'string'
      },
      
      aadharCardCheck : {

          type: 'string',
          enum: ['yes', 'no']
      },

      aadharCard : {

          type: 'string'
      },
      
      passportCheck : {

          type: 'string',
          enum: ['yes', 'no']
      },

      passportNo : {

          type: 'string'
      },

      voterId : {

          type: 'string'
      },

      din : {

          type: 'string'
      },

      sex : {

          type: 'string'
      },

      dob : {

          type: "datetime"
      },

      llpId : {

          type: "string"
      },
      
      formationDate : {

          type: "datetime"
      },

      dateofDeed : {

          type: "datetime"
      },

      fppCheck : {

          type: "strng"
      },

      sebregNo : {

          type: "strng"
      },

      residentialCheck : {

          type: "strng"
      },

      pancard : {

          type: "strng"
      },

      tanno : {

          type: "strng"
      },

      businessName : {

          type: "strng"
      },

      contactPerson : {

          type: "strng"
      },

      natureofPerson : {

          type: "strng"
      },

      serviceTaxRegNo : {

          type: "strng"
      },

      vatRegNo : {

          type: "strng"
      },

      cstNo : {

          type: "strng"
      },

      llpCheck : {

          type: "strng",
          enum: ['yes', 'no']
      },
      
      llpId : {

          type: "strng"
      },

      llpName : {

          type: "strng"
      },

      designation : {

          type: "strng"
      },

     companyCin : {

          type: 'string',
          unique: true
          
      },

     companyName : {

          type: 'string',
          unique: true
         
      },

      rocCode : {

          type: 'string'
      },

      regNo : {

          type: 'string'
      },

      companyCat : {

          type: 'string'
      },

      companysubCat : {

          type: 'string'
      },

       companyClass : {

          type: 'string'
      },

      authCapital : {

          type: 'integer'
      },

       paidupCapital : {

          type: 'integer'
      },

      noofMember : {

          type: 'integer'
      },

      incorporationDate : {

          type: "datetime"
      },

      addressLine1 : {

          type: 'string'
      },

       addressLine2 : {

          type: 'string'
      },

       city : {

          type: 'string'
      },

      state : {

          type: 'string'
      },

      country : {

          type: 'string'
      },

      pincode : {

          type: 'integer'
      },

      emailId : {

            type: 'email'
      },

     listed : {

            type: 'string'
      },

      lastAgmDate : {

          type: "datetime"
      },

       lastbalanceSheet : {

          type: "datetime"
      }
  }
};

