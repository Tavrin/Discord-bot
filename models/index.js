var mongoose = require('mongoose');
// mongoose.set('debug', true);
// var options = { useNewUrlParser: true, keepAlive: 1, connectTimeoutMS: 30000, reconnectTries: 30, reconnectInterval: 5000 };
// let uri = process.env.DATABASEURL || 'mongodb://heroku_m5v1q7kt:ktcudnfdbcfkhj4mku2ebuti0h@ds229450.mlab.com:29450/heroku_m5v1q7kt';
// mongoose.connect(uri,options);

mongoose.Promise = Promise;

module.exports.User = require("./user");
module.exports.Shop = require("./shop");
