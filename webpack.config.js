const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const variables = require("./css-variables");

module.exports = {
    stats: {modules: false, warningsFilter: /export .* was not found in/},
    performance: {hints: false},
    entry: "./src",
    output: {
        path: path.join(__dirname, "static"),
        filename: "app.js",
        publicPath: "./static/"
    },
    devServer: {
        publicPath: "/static/",
        port: 3000
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    plugins: [new webpack.WatchIgnorePlugin([/.d\.ts$/, /.\.js$/]), new ForkTsCheckerWebpackPlugin({tslint: true})],
    module: {
        rules: [
            {
                test: /\.js$/,
                enforce: "pre",
                use: [
                    {
                        loader: "source-map-loader"
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                include: [path.resolve(__dirname, "./src")],
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ]
            },
            {
                test: /\.json$/,
                use: [
                    {
                        loader: "json-loader"
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader"},
                    {
                        loader: "typings-for-css-modules-loader",
                        options: {
                            modules: true,
                            silent: true,
                            namedExport: true,
                            localIdentName: "[name]-[local]--[hash:base64:5]",
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require("postcss-import")(),
                                require("postcss-preset-env")({
                                    features: {
                                        "nesting-rules": true
                                    }
                                }),
                                require("postcss-custom-properties")({
                                    variables
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|svg|png)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {name: "[name].[ext]"}
                    }
                ]
            }
        ]
    }
};
