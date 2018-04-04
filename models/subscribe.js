const mongoose = require("mongoose");

var SubscribeSchema = new mongoose.Schema({
	email: String
});


module.exports = mongoose.model("Subscribe", SubscribeSchema);