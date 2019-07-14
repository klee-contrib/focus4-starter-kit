const path = require("path");
const webpack = require("webpack");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

const variables = require("./css-variables");
const postcss = {
    loader: "postcss-loader",
    options: {
        plugins: () => [
            require("postcss-import")(),
            require("postcss-apply")(),
            require("postcss-custom-properties")({
                preserve: false,
                variables
            }),
            require("postcss-calc")(),
            require("postcss-color-function")(),
            require("postcss-preset-env")({
                features: {
                    "nesting-rules": true
                }
            })
        ]
    }
};

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
                use: ["source-map-loader"]
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
                test: /\.css$/,
                exclude: /\.module\.css$/,
                use: ["style-loader", "css-loader", postcss]
            },
            {
                test: /\.module\.css$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]_[local]__[hash:base64:5]"
                            }
                        }
                    },
                    postcss
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
