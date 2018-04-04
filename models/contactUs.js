var mongoose = require("mongoose");

//Defining the Schema

var contactUsSchema = new mongoose.Schema({
    category: String,
    subCategory: String,
    name: String,
    email: String,
    contact: String,
    desc: String
});

//Compile to Model

module.exports = mongoose.model("ContactUs", contactUsSchema);