const devConfig = require('./webpack.dev.config');

devConfig['output'] = {
    filename: 'bundle.js',
    path: '/app'
};

devConfig['watch'] = false;

module.exports = devConfig;
