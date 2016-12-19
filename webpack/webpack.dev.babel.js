'use strict';

import path from 'path';
import webpack from 'webpack';
import HtmlWebpack from 'html-webpack-plugin';
import {buildConfig as config} from './build.config';
import {buildUtil} from './build-util';

const ChunkWebpack = webpack.optimize.CommonsChunkPlugin,
    rootDir = path.resolve(__dirname, '..');

const webpackConfig = {
    target: 'web',
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
            {test: /\.scss$/, use: 'css-loader!sass-loader'},
            {test: /\.html$/, use: 'html-loader'},
            {enforce: 'pre', test: /\.js$/,  loader: 'eslint-loader', exclude: /node_modules/},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/, query: {presets: ['es2015']}}
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