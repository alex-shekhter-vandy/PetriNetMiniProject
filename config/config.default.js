'use strict';

var config = require('./config.webgme'),
    validateConfig = require('webgme/config/validator');

// Add/overwrite any additional settings here
const mongoHost = process.env.MONGO_HOST || '127.0.0.1';
// config.mongo.uri = `mongodb://${mongoHost}:27017/webgme_dcrypps`;
config.mongo.uri = `mongodb://${mongoHost}:27017`;
config.plugin.allowServerExecution = true;

// Paths needed for proper jointjs import on the client side
config.requirejsPaths['jointjs'] = './node_modules/jointjs/dist/joint.min';
config.requirejsPaths['lodash'] = './node_modules/lodash/lodash.min';

config.authentication.enable = false;

validateConfig(config);
module.exports = config;
