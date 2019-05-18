require('babel-register')({
    presets: ['env'],
});
// "glslify": "^7.0.0",
module.exports = require('./server/app');