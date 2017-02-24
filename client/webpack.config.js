/* global __dirname */

var path = require('path');

var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


var dir_src = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'build');

module.exports = {
    entry: path.resolve(dir_src, 'main.js'),
    output: {
        path: dir_build,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: dir_build,
        proxy:[{path:'/graphQL',target:'http://127.0.0.1:3000/graphQL'}

        ]
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              loader: 'babel-loader',
              include: dir_src

            },
            {
              test: /\.less$/,
                //loader: "style-loader!css-loader!less-loader",
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader"),
                include: dir_src
            }

        ]
    },
    plugins: [
        // Simply copies the files over
        new CopyWebpackPlugin([
            { from: dir_src+'/index.html'},
            { from: dir_src+ '/assets'}
        ]),
        new ExtractTextPlugin("style.css"),
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    stats: {
        // Nice colored output
        colors: true
    },
    // Create Sourcemaps for the bundle
    devtool: 'source-map',
};
