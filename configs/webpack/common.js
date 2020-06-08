const { resolve } = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

require('dotenv').config();

const isProduction = process.env.NODE_ENV === 'production' ? true : false;

const definePlugin = new webpack.DefinePlugin({
    'process.env.APP_URL': JSON.stringify(process.env.APP_URL),
    'process.env.API_URL': JSON.stringify(process.env.API_URL),
});

const htmlPlugin = new HTMLWebpackPlugin({
    template: 'index.html.ejs',
    title: 'PortalCTA v0.9.9',
});

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            src: resolve(__dirname, '../../src'),
        },
    },
    context: resolve(__dirname, '../../src'),
    module: {
        rules: [
        {
            test: /\.js$/,
            use: ['babel-loader', 'source-map-loader'],
            exclude: /node_modules/,
        },
        {
            test: /\.tsx?$/,
            use: ['babel-loader'],
            exclude: /node_modules/,
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
            ],
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'sass-loader',
            ],
        },
        {
            test: /\.(jpe?g|png|gif)$/i,
            loaders: [
                {
                    loader: 'file-loader',
                    options: {
                        hash: 'sha512',
                        digest: 'hex',
                        name: 'img/[hash].[ext]',
                        esModule: false,
                    },
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        mozjpeg: {
                            progressive: true,
                            quality: 65,
                        },
                        optipng: {
                            enabled: isProduction,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false
                        },
                        webp: {
                            quality: 75
                        },
                    },
                },
            ],
        },
        {
            test: /\.(eot|woff2?|ttf)$/i,
            loaders: [
                'file-loader?hash=sha512&digest=hex&name=font/[hash].[ext]',
            ],
        },
        {
            test: /\.(pdf)$/i,
            loaders: [
                'file-loader?hash=sha512&digest=hex&name=pdf/[hash].[ext]',
            ],
        },
        {
            test: /\.(svg)$/i,
            loaders: [
                {
                    loader: 'file-loader',
                    options: {
                        hash: 'sha512',
                        digest: 'hex',
                        name: 'img/[hash].[ext]',
                        esModule: false,
                    },
                },
            ],
        },
        ],
    },
    plugins: [
        definePlugin,
        htmlPlugin,
    ],
};
