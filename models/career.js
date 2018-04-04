var mongoose = require("mongoose");

//Defining the Schema

var careerSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    contact: String,
    exp: String
});

//Compile to Model

module.exports = mongoose.model("Career", careerSchema);