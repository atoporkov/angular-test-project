const devConfig = require('./webpack.dev.config');

devConfig['output'] = {
    filename: 'bundle.js',
    path: '/app'
};

module.exports = devConfig;
