// development config
const merge = require('webpack-merge');
const webpack = require('webpack');
const commonConfig = require('./common');

module.exports = merge(commonConfig, {
    mode: 'development',
    entry: {
        app: ['./index.tsx'],
        vendor: ['react', 'react-dom'],
        babel: ['babel-polyfill'],
        webpack: [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
        ],
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ],
    devServer: {
        hot: true,
        open: true,
        compress: true,
        stats: 'errors-only',
        overlay: true,
        historyApiFallback: true,
        publicPath: '/',
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
    },
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
});
