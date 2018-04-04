var nodemailer = require('nodemailer');
var ses = require('nodemailer-ses-transport');

var transporter = nodemailer.createTransport(ses({
    region: 'us-west-2',
    accessKeyId: 'AKIAIJ327IHHS4MJVFOA',
    secretAccessKey: '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'
}));

module.exports = function(to, subject, html, attachments){
    if(typeof attachments == 'undefined'){
        transporter.sendMail({
            from: "hello@lalaworld.io",
            to: to,
            subject: subject,
            html: html
        });
    }else{
        transporter.sendMail({
            from: "hello@lalaworld.io",
            to: to,
            subject: subject,
            html: html,
            attachments: [{
                filename: attachments.filename,
                path: attachments.path,
                contentType: attachments.contentType
            }]
        });
    }
    
}