var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var config = require('./config');

module.exports = webpackMerge(commonConfig, {

    // Setup source map for production
    devtool: 'source-map',

    output: {
        path: helpers.root('build/prod'),
        publicPath: config.publicPath,
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].map',
        chunkFilename: '[id].[chunkhash].chunk.js'
    },

    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.DefinePlugin({
            'build.environment': JSON.stringify('prod')
        })
    ]
});
