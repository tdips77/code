var requireText = require('require-text')
var emailSend = require('../controllers/sendEmail')
var Contact = require('../models/contactUs')

exports.contact = function(req, res){
    var category = req.body.category;
    var subCategory = req.body.sub_category;
    var name = req.body.name;
    var email = req.body.email;
    var contact = req.body.mobile;
    var desc = req.body.comments;

    let data = {
        category: category,
        subCategory: subCategory,
        name: name,
        email: email,
        contact: contact,
        desc: desc
    }

    var to = JSON.stringify(email);

    var emailer = requireText('../public/emailTemplate/contactTemplate.html', require);

    emailSend(to, 'Thank you for Contacting Us', emailer)
    emailSend('hello@lalaworld.io', 'Somebody Contacted Us', emailer)
    Contact.create(data, function (err, results) {
        if (err) {
            res.status(404).send(JSON.stringify({
                "statuscode": "ERR",
                "message": "Error",
                "data": err
            }));
        } else {
            res.status(201).send(JSON.stringify({
                "statuscode": "SUC",
                "message": "Success",
                "data": results
            }));
        }
    });
}