var webpackMerge = require('webpack-merge');
var DashboardPlugin = require('webpack-dashboard/plugin');

var devConfig = require('./webpack.dev.js');

module.exports = webpackMerge(devConfig, {
    plugins: [
        new DashboardPlugin()
    ]
});
