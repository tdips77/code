const express = require('express');
const router = express.Router();

let users = [{
    UserId: 1,
    Username: 'deepa',
    Email: 'deepa@lalaworld.io',
    Name: 'Deepa Tyagi',
    Password: '123456',
    Contact: '9999420148',
    Terms: true
}];

router.get('/', function (req, res) {
    res.send(users);
});
router.get('/:id', function (req, res) {
    let id = req.params.id;
    res.send(users[id - 1]);
});
router.delete('/:id', function (req, res) {
    let id = req.params.id;
    for (var i = 0; i < users.length; i++) {
        var element = users[i];
        if (id == element.UserId) {
            users.splice(i, 1);
            break;
        }
    }
    res.status(200).send();
});
router.post('/', function (req, res) {
    let obj = req.body;
    obj.UserId = users.length + 1;
    users.push(obj);
    res.status(201).send();
});
router.put('/:id', function (req, res) {
    let obj = req.body;
    for (var i = 0; i < users.length; i++) {
        var element = users[i];
        if (obj.UserId == element.UserId) {
            users[i].Name = obj.Name;
            users[i].Contact = obj.Contact;
            users[i].Email = obj.Email;
            break;
        }
    }
    res.status(200).send();
});


module.exports = router;