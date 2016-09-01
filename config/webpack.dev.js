var webpackMerge = require('webpack-merge');

var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var config = require('./config');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('build/dev'),
        publicPath: 'http://localhost:8080'+config.publicPath,
        filename: '[name].js',
        sourceMapFilename: '[name].map',
        chunkFilename: '[id].chunk.js'
    },

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        contentBase: helpers.root('build/dev')
    }
});
