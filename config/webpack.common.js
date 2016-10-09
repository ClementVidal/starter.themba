var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var autoprefixer = require('autoprefixer');

var helpers = require('./helpers');
var config = require('./config');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            // Typescript files: 
            // - Compile them
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader!angular2-template-loader'
            },
            // HTML for components: 
            // - Process html (attrs="": do not require any resources specified in the html) 
            // - Convert it to a string 
            {
                test: /\.component\.html$/,
                loader: 'to-string!html?attrs=""'
            },
            // Generic HTML: 
            // - Process html (attrs="": do not require any resources specified in the html) 
            {
                test: /\.html$/,
                exclude: /\.component\.html$/,
                loader: 'html?'
            },
            // SCSS for components: 
            // - Compile scss
            // - Apply post scss: autoprefix
            // - Process css (-url: do not process stuff like url(image.png) ) 
            // - Convert it to a string 
            {
                test: /\.component\.scss$/,
                loader: "to-string!css?-url!postcss-loader!sass"
            },
            // Generic SCSS: 
            // - Compile scss
            // - Apply post scss: autoprefix
            // - Process css (-url: do not process stuff like url(image.png) ) 
            // - Add style to DOM using <style>
            {
                test: /\.scss$/,
                exclude: /\.component\.scss$/,
                loader: "style!css?-url!postcss-loader!sass"
            }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },
    sassLoader: {
        includePaths: [ helpers.root("./src")]
    },
    htmlLoader: {
        minimize: false // workaround for ng2
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            title: config.title,
            description: config.description,
            publicPath: config.publicPath,
            template: './src/index.ejs',
            chunksSortMode: 'dependency'
        }),
        new CleanWebpackPlugin(['public/bundle'], {
            root: helpers.root('.'),
            verbose: true,
            dry: false
        })
    ]
};