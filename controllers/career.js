var Career = require('../models/career')
var requireText = require('require-text')
var emailSend = require('../controllers/sendEmail')

exports.career = function(req, res){
        //Validate and Sanitise Incoming Requests

        req.check('first_name', 'First Name entered is not valid').isAlpha();
        req.check('last_name', 'Last Name entered is not valid').isAlpha();
        req.check('email_address', 'Email entered is not valid').isEmail();
        req.check('mobile', 'Mobile Number Name entered is not valid').isInt();
        req.check('exp', 'Experience Name entered is not valid').isInt();
    
        req.sanitize('first_name').trim();
        req.sanitize('last_name').trim();
        req.sanitize('email_address').normalizeEmail();
        req.sanitize('mobile').toInt();
        req.sanitize('exp').toInt();
    
        //Check for Valid File Extension
    
        var fileExt = req.file.originalname.split('.').pop();
    
        if (fileExt != 'pdf' || 'txt' || 'doc' || 'docx') {
            res.status(400).send('Invalid File Type')
        }
    
        //Throw error
    
        var errors = req.validationErrors();
        if (errors) {
            res.status(400).send('There have been validation errors: ' + util.inspect(errors));
            return;
        }
    
        //Set Incoming Data in data
    
        var fname = req.body.first_name;
        var lname = req.body.last_name;
        var email = req.body.email_address;
        var contact = req.body.mobile;
        var exp = req.body.exp;
    
        //Set Attachment Body
    
        var attachment = [{
            filename: req.file.originalname,
            path: req.file.path,
            contentType: req.file.path
        }]
    
        let data = {
            fname: fname,
            lname: lname,
            email: email,
            contact: contact,
            exp: exp
        }
    
        var to = JSON.stringify(email);
    
        //Fetching Email Template
    
        var emailer = requireText('../public/emailTemplate/careerTemplate.html', require);
        var replace = emailer.replace("{{$name}}", fname + lname).replace("{{$mobile}}", contact).replace("{{$email}}", email).replace("{{$exp}}", exp);
    
        //Send email to User
    
        emailSend(to, 'Thank you for Submitting your Application', replace)
    
        //Send email to job@lalaworld.io
    
        emailSend('job@lalaworld.io', 'New job Application', replace, attachment)
    
        //Store to Db
    
        Career.create(data, function (err, results) {
            if (err) {
                res.status(404).send(JSON.stringify({
                    "statuscode": "ERR",
                    "message": "Error",
                    "data": err
                }));
            } else {
                res.status(201).render('thankyoucareer')
            }
        });
}