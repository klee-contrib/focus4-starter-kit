const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/static/'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    performance: {
        hints: false
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: [{
                    loader: 'source-map-loader'
                }]
            },
            {
                test: /\.tsx?$/,
                include: [path.resolve(__dirname, './src')],
                use: [{
                    loader: 'awesome-typescript-loader'
                }]
            },
            {
                test: /\.json$/,
                use: [{
                    loader: 'json-loader'
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: "[name]-[local]--[hash:base64:5]"
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                use: [{
                    loader: 'file-loader',
                    options: {name: '[name].[ext]'}
                }]
            }
        ]
    },
    devtool: 'source-map'
};
