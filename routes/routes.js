const express = require("express");
const router = express.Router();
const multer = require('multer');
const util = require('util');

var careerController = require('../controllers/career')
var contactController = require('../controllers/contact')
var subscribeController = require('../controllers/subscribe')

//Directory to store files

const upload = multer({
    dest: ('upload/temp/')
})

//Get Route for Index Page

router.get('/', function (req, res) {
    res.render('index', {
        title: 'Express'
    });
})

//Get Route for Career page

router.get('/careers', function (req, res) {
    res.render('careers', {
        title: 'Express'
    });
});

//Get Route for Contact Page

router.get('/contact', function (req, res) {
    res.render('contact', {
        title: 'Express'
    });
});

//Get Route for thankyou Page

router.get('/thankyou', function (req, res) {
    res.render('thankyou', {
        title: 'Express'
    });
});


//Get Route for Exchange Listing Page

router.get('/exchangelisting', function (req, res) {
    res.render('exchangelisting', {
        title: 'Express'
    });
});

//Get route for FAQ Page

router.get('/faq', function (req, res) {
    res.render('faq', {
        title: 'Express'
    });
});

//Get Route for Media Page

router.get('/media', function (req, res) {
    res.render('media', {
        title: 'Express'
    });
});

//Get Route for Privacy Policy Page

router.get('/privacy-policy', function (req, res) {
    res.render('privacy-policy', {
        title: 'Express'
    });
});

//Get route for Terms of use

router.get('/terms-of-use', function (req, res) {
    res.render('terms-of-use', {
        title: 'Express'
    });
});

//Post Route for Sending Subscribe Data to Database

router.post('/subscribe', subscribeController.subscribe)

//Post Route for Sending Career Data to DB and Sending Email

router.post('/career', upload.single('resume'), careerController.career)

//Post Route for Sending Contact Data to DB and Sending Email(WIP)

router.post('/contact', contactController.contact)

module.exports = router;