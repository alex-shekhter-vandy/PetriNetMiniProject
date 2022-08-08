/*jshint node: true*/
/**
 * @author lattmann / https://github.com/lattmann
 */

var config = require('./config.default');

config.server.port = 9001;
config.mongo.uri = 'mongodb://mongo:27017/webgme_tests';

module.exports = config;
