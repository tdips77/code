//Config object

var config = {};

//Setting Server Host and Process

config.host = '0.0.0.0';
config.port = process.env.WEB_PORT || 3000;


//Exporting this module

module.exports = config;