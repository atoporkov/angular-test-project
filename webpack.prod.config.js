const devConfig = require('./webpack.dev.config');

devConfig['output'] = {
    filename: 'bundle.js',
    path: __dirname + '/public'
};

devConfig['watch'] = false;

module.exports = devConfig;
