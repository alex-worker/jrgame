// require('@babel/preset-env')
require('@babel/register')({
    presets: ['@babel/preset-env'],
});
// "glslify": "^7.0.0",
module.exports = require('./server/app');