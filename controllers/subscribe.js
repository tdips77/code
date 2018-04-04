var Subscribe = require('../models/subscribe')
var requireText = require('require-text')
var emailSend = require('../controllers/sendEmail')

exports.subscribe = function(req, res){
    //Validate and Sanitise Incoming Requests

    req.check('EMAIL', 'Email entered is not valid').isEmail();

    req.sanitize('email').normalizeEmail();

    //Throw error

    var errors = req.validationErrors();
    if (errors) {
        res.status(400).send('There have been validation errors: ' + util.inspect(errors));
        return;
    }

    //Set Incoming Data in data

    var email = req.body.EMAIL;

    let data = {
        email: email
    }

    var to = JSON.stringify(email);

    //Fetching Email Template

    var emailer = requireText('../public/emailTemplate/subscribeTemplate.html', require);

    function updateUser(email, data, to) {

        //Create a query

        var query = {
            'email': email
        };

        //Find if the email exists

        Subscribe.find(query, function (err, result) {
            if (err) {
                res.status(500).render('error')
            } else {
                if (result.length != 0) {
                    res.status(202).render('nothankyou')
                } else {
                    //Create a new document in DB

                    Subscribe.create(data, function (err, results) {
                        if (err) {
                            res.status(404).send(JSON.stringify({
                                "statuscode": "ERR",
                                "message": "Error",
                                "data": err
                            }));
                        } else {
                            //Sending email to User

                            emailSend(to, 'Thank you for Subscribing', emailer)
                            
                            res.status(201).render('thankyou')
                        }
                    });
                }
            }
        });
    }

    //Initiate the function

    updateUser(email, data, to);
}