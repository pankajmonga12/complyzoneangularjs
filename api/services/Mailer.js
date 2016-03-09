/**
 * Mailer Service
 * Uses Mandrill Service : https://github.com/jimrubenstein/node-mandrill
 */

var fs = require('fs');
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill( '28hd7AK0BMJ4uNMnZ4hsYg' );

var _ = require("lodash");

// Base Message
var message = {
  "html": "",
  "text": "",
  "subject": "",
  "from_email": "pankaj.monga@live.com",
  "from_name": "pankaj monga",
  "to": [],
  "headers": { "Reply-To": "pankaj.monga@live.com" },
  "important": false,
  "track_opens": null,
  "track_clicks": null,
  "auto_text": null,
  "auto_html": null,
  "inline_css": null,
  "url_strip_qs": null,
  "preserve_recipients": null,
  "view_content_link": null,
  "tracking_domain": null,
  "signing_domain": null,
  "return_path_domain": null,
  "merge": true,
  "global_merge_vars": [],
  "merge_vars": [],
  "tags": [ "survey" ],
  "metadata": { "website": "localhost" },
  "recipient_metadata": [],
  "attachments": [],
  "images": [],
  "subaccount": "compliances"
};

var pwd_reset_message = {
  "html": "",
  "text": "",
  "subject": "",
  "from_email": "no-reply@indusind.com",
  "from_name": "IndusInd Bank",
  "to": [],
  "headers": { "Reply-To": "no-reply@indusind.com" },
  "important": false,
  "track_opens": null,
  "track_clicks": null,
  "auto_text": null,
  "auto_html": null,
  "inline_css": null,
  "url_strip_qs": null,
  "preserve_recipients": null,
  "view_content_link": null,
  "tracking_domain": null,
  "signing_domain": null,
  "return_path_domain": null,
  "merge": true,
  "global_merge_vars": [],
  "merge_vars": [],
  "tags": [ "passwrd reset" ],
  "metadata": { "website": "survey.indusind.com" },
  "recipient_metadata": [],
  "attachments": [],
  "images": [],
  "subaccount": "indusind"
};


module.exports = {

  sendWelcomeEmail: function (user) {

    this.sendMail({
      to: {
        "email": user.email,
        "name": user.displayName,
        "type": "to"
      },
      subject: "Welcome to Insight Mantis!",
      text: "",
      html:
          "<div>Ahoy! " + user.displayName + "</div><br />"
        + "<div>As Samuel Johnson said,</div>"
        + "<blockquote>"
        + "\"The greatest part of a writer’s time is spent in reading, in order to write; a man will turn over half a library to make one book.\""
        + "</blockquote><br />"
        + "<div>We are happy to have you as a writer enthusiast.</div><br />"
        + "<div>Thirstty Team!</div>"
    });

  },

  notifyAdmins: function(req, res, surveyId){

    var self = this;
    Survey.findOne({'id': surveyId})
    .populate('user')
    .exec(function (err, survey){
      if(err){
        return res.json(err);
      }
      else{
        async.each(sails.config.admins, function (admin, callback){
          sails.log.debug(admin);
          self.sendMail({
            to: {
              "email": admin,
              "name": '',
              "type": "to"
            },
            subject: "A new survey has been created!",
            text: "",
            html: "<div> A new survey has been created with details as follows: <br />"
            + "Survey Name:" + survey.name + "<br /> " 
            + "Created by:  " + survey.user.name + "<br />"
            + "Broadcast survey:  " + survey.broadcast + "<br />"
            + " </div>"
          });
          callback();
        }, function(err){
            if(err){
              return res.json(err);
            }
            else{
              return res.json(survey);
            }
          }
        );
      }
    });
  },


  sendPwdResetMail: function (user, resetLink) {

    this.sendMail({
      to: {
        "email": user.email,
        "name": user.name,
        "type": "to"
      },
      subject: "Password reset",
      text: "Hello "
        + user.name
        + "! You have requested to change your password. Please click on the link below to change your password: "
        + resetLink + ". If you have not requested for a password reset, please ignore this mail",
      html: ""
    });
  },


  sendInviteAcceptMail: function (sendTo, recipientName, registerLink) {

    this.sendMail({
      to: {
        "email": sendTo,
        "name": recipientName,
        "type": "to"
      },
      subject: "Invite Request Accepted at Insight Mantis",
      text: "",
      html:
          "<div>Ahoy! " + recipientName + "</div><br />"
        + "<div>Scott Belsky, Co-Founder of Behance says</div>"
        + "<blockquote>\"Its not about ideas. Its about making ideas happen\"</blockquote><br />"
        + "<div>Follow the link below and lets make it happen - make it big.</div>"
        + "<div> " + registerLink + " </div><br />"
        + "<div>Thirstty Team!</div>"
  });

},


  sendMail: function (mailOpts) {

    if(sails.config.email_blacklist.indexOf(mailOpts.to.email) == -1){
      var messageToSend = _.cloneDeep(message);
      messageToSend.html = mailOpts.html;
      messageToSend.text = mailOpts.text;
      messageToSend.subject = mailOpts.subject;
      messageToSend.to.push(mailOpts.to);

      mandrill_client.messages.send(
        {"message": messageToSend, "async": true, "ip_pool": "Main Pool", "send_at": ""},
        function successCallback(result) {
          sails.log.info('Email sent to ', result);
        },
        function errorCallback(e) {
          sails.log.error(messageToSend);
          sails.log.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        }
      );
    }

  },
   
  sendMailUser: function () {
      var mailOpts = {};
      mailOpts.html = 'test email';
      mailOpts.text = 'test emailll';
      mailOpts.subject = 'check email';
      mailOpts.to = {
        "email": 'pankaj.monga@live.com',
        "name": 'pankaj monga',
        "type": "to"
      };
      var messageToSend = _.cloneDeep(message);
      messageToSend.html = mailOpts.html;
      messageToSend.text = mailOpts.text;
      messageToSend.subject = mailOpts.subject;
      messageToSend.to.push(mailOpts.to);

      mandrill_client.messages.send(
        {"message": messageToSend, "async": true, "ip_pool": "Main Pool", "send_at": ""},
        function successCallback(result) {
          sails.log.info('Email sent to ', result);
        },
        function errorCallback(e) {
          sails.log.error(messageToSend);
          sails.log.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
        }
      );
    

  },




  sendRMMail: function (mailOpts){

    var template_name = "rm_survey"
    var template_content = [
      {
        "name": "survey_link2",
        "content": "<a href=" + mailOpts.url + " target=\"new\"><img style=\"margin:0; padding:0; border:none; display:inline-block;\" border=\"0\" valign=\"top\" align=\"absbottom\" src=\"http://dashboard.insightmantis.com/images/surveys/indusind/rm/Survey-Mailer_Artboard-1_01.jpg\" width=\"680\" height=\"513\" alt=\"Every relationship can beenhanced with a piece of feedback!\"></a>"
      },
      {
        "name": "survey_link",
        "content": "<a href=" + mailOpts.url + " target=\"new\"><img src=\"http://dashboard.insightmantis.com/images/surveys/indusind/rm/Survey-Mailer_Artboard-2_01.jpg\" alt=\"Click Here\" width=\"60\" height=\"17\"></a>"
      }
    ];
    mandrill_client.templates.render({"template_name": template_name, "template_content": template_content}, function (result) {

      var messageToSend = _.cloneDeep(message);

      messageToSend.html = result.html;
      messageToSend.subject = mailOpts.subject;
      var to = mailOpts.to

      messageToSend.to.push(to);

      mandrill_client.messages.sendTemplate(
        {
          "template_name": template_name, 
          "template_content": template_content, 
          "message": messageToSend, 
          "async": true, 
          "ip_pool": "Main Pool", 
          "send_at": ""
        }, 
        function successCallback(result) {
          sails.log.info('Email sent to ', result);
        },
        function errorCallback(e) {
          sails.log.error('A mandrill error occurred 1: ' + e.name + ' - ' + e.message);
        }
      );
    }, function(e) {
      sails.log.error('A mandrill error occurred 2: ' + e.name + ' - ' + e.message);
    });    

  },


  sendTemplateMail: function (mailOpts) {

    if(sails.config.email_blacklist.indexOf(mailOpts.to.email.toLowerCase()) == -1){

      var url = mailOpts.url
      var template_name = "survey_mail";
      var template_content = [{
        "name": "Mailer_08",
        "content": "<td colspan='6' style='line-height:0px; background:#fff8f0; padding:0; margin:0;'>"
                   + "<a href = " + url + ">"
                   + "<img src='http://survey.indusind.com/images/surveys/indusind/default/IndusInd-Servey-Mailer_08.jpg' width='680' height='562' alt='Tell us What you think of us.. testing 1,2,3' title='Tell us what you think of us'>"
                   + "</a></td>"
      },
      {
        "name": "Mailer_16",
        "content": "<a href=" + url + " target='_blank'> "
        + "<img src='http://survey.indusind.com/images/surveys/indusind/default/IndusInd-Servey-Mailer_16.jpg' alt='Click here' width='65' height='20' border='0'>"
        + "</a>"
      }];

      var merge_vars = [{
        "name": "image1",
        "content": "https://www.dropbox.com/sc/6cerzesoyvwm36r/AABjXfSom73SRIR1WuzQJ6eWa"
      }];

      mandrill_client.templates.render({"template_name": template_name, "template_content": template_content}, function (result) {

        var messageToSend = _.cloneDeep(message);


        messageToSend.tags.push(mailOpts.survey_name);

        sails.log.debug("Tags:", messageToSend.tags)

        messageToSend.html = result.html;
        messageToSend.text = mailOpts.text;
        messageToSend.subject = mailOpts.subject;
        messageToSend.to.push(mailOpts.to);

        mandrill_client.messages.sendTemplate(
          {"template_name": template_name, 
          "template_content": template_content, 
          "message": messageToSend, 
          "async": true, 
          "ip_pool": "Main Pool", 
          "send_at": ""}, 
          function successCallback(result) {
            sails.log.info('Email sent to ', result);
          },
          function errorCallback(e) {
            sails.log.error(messageToSend);
            sails.log.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
          }
        );
      }, function(e) {
        sails.log.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
      });    

    }
    else{
      sails.log.debug("Skipping blocked email :", mailOpts.to.email);
    }

  }  

};