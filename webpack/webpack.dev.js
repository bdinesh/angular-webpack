'use strict';

const webpack = require('webpack');
const path = require('path');
const HtmlWebpack = require('html-webpack-plugin');
const config = require('./build.config');

const ChunkWebpack = webpack.optimize.CommonsChunkPlugin;
const rootDir = path.resolve(__dirname, '..');

module.exports = {
    context: path.resolve(rootDir, 'src/app'),
    debug: true,
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: config.port
    },
    devtool: 'source-map',
    entry: {
        app: [path.resolve(rootDir, 'src/app', 'root.module')],
        vendor: [path.resolve(rootDir, 'src', 'vendor')]
    },
    output: {
        path: path.resolve(rootDir, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [{
            loader: 'raw',
            test: /\.(css|html)$/
        }, {
            loader: 'babel',
            test: /\.js$/,
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: [
        new ChunkWebpack({
            filename: 'vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new HtmlWebpack({
            filename: 'index.html',
            inject: 'body',
            template: path.resolve(rootDir, 'src', 'index.html')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.ts']
    }
};