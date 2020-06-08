const merge = require('webpack-merge');
const {resolve} = require('path');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
    mode: 'production',
    entry: {
        app: ['./index.tsx'],
        babel: ['babel-polyfill'],
    },
    output: {
        filename: 'js/bundle.[hash].min.js',
        path: resolve(__dirname, '../../dist'),
        publicPath: '/',
    },
    devtool: 'source-map',
    plugins: [],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin(),
        ],
    },
});
