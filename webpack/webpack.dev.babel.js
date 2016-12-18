'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpack from 'html-webpack-plugin';
import { buildConfig as config } from './build.config';
import { buildUtil } from './build-util';

// const webpack = require('webpack'),
//     path = require('path'),
//     HtmlWebpack = require('html-webpack-plugin');
const ChunkWebpack = webpack.optimize.CommonsChunkPlugin,
    // config = require('./build.config'),
    // buildUtil = require('./build-util'),
    rootDir = path.resolve(__dirname, '..');

const webpackConfig = {
    context: path.resolve(rootDir, 'src/app'),
    devServer: {
        contentBase: path.resolve(rootDir, 'dist'),
        port: config.port
    },
    devtool: 'source-map',
    entry: {
        app: [path.resolve(rootDir, 'src/app', 'root.module')],
        vendor: buildUtil.getAbsolutePaths(config.paths.vendorScripts, 'node_modules')
    },
    output: {
        path: path.resolve(rootDir, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            { use: 'raw-loader', test: /\.css$/ },
            { use: 'html-loader', test: /\.html$/ },
            { use: 'babel-loader', test: /\.js$/, exclude: /node_modules/, query: { presets: ['es2015'] } }
        ]
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
        extensions: ['.js', '.ts']
    }
};

export default webpackConfig;