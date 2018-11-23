var helper = require('sendgrid').mail;
var fromEmail = new helper.Email('rasarahasa@gmail.com');

module.exports.unamepasssend=function(userdata,callback){
        var toEmail = new helper.Email(userdata.email);
        var subject = 'FOOD MASTER';
        var content = new helper.Content('text/plain', 'This is system genarated username and password for you. username: Usename: '+userdata.username+" password: "+userdata.password);
        var mail = new helper.Mail(fromEmail, subject, toEmail, content);
        var sg = require('sendgrid')("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");
        var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
        });
        sg.API(request, function (error, response) {
        if (error) {
            //callback(err);
            console.log("email not sent")
        }else{
            callback(null,response);
        }
            
        });
}

 /* //for upper function calling place
 const userdata={
    email:'edirisingheemks@gmail.com',
    username:'kelum',
    password:'saasas'
  }
  email.unamepasssend(userdata,(err,resp)=>{
    if(err){
      console.log("dad")
    }else{
      res.send("dsdss")
    }
  })*/

  module.exports.tempunamepasssend=function(userdata,callback){
    var toEmail = new helper.Email(userdata.email);
    var subject = 'FOOD MASTER';
    var content = new helper.Content('text/plain', 'This is system genarated tempory password for you. username: Usename: '+userdata.username+" password: "+userdata.password);
    var mail = new helper.Mail(fromEmail, subject, toEmail, content);
    var sg = require('sendgrid')("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");
    var request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON()
    });
    sg.API(request, function (error, response) {
    if (error) {
        callback(err);
    }else{
        callback(null,response);
    }
        
    });
}