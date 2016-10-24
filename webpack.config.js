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
        alias: {
            'focus-core/translation': path.resolve(__dirname, './node_modules/autofocus/translation.js'),
            'focus-core/component/builder': path.resolve(__dirname, './src/$focus/builder.ts'),
            'focus-core/component/types': path.resolve(__dirname, './src/$focus/types.ts')
        },
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: 'pre',
                use: [{
                    loader: 'source-map'
                }]
            },
            {
                test: /\.tsx?$/,
                include: [ path.resolve(__dirname, './src')],
                use: [{
                    loader: 'awesome-typescript'
                }]
            },
            {
                test: /\.json$/,
                use: [{
                    loader: 'json'
                }]
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: 'style'},
                    {loader: 'css'},
                    {loader: 'sass'}
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style'},
                    {
                        loader: 'css',
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
                    loader: 'file',
                    options: {name: '[name].[ext]'}
                }]
            }
        ]
    },
    devtool: 'source-map'
};
