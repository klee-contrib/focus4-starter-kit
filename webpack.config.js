const path = require("path");
const webpack = require("webpack");
const variables = require("./css-variables");

module.exports = {
    entry: "./src",
    output: {
        path: path.join(__dirname, "static"),
        filename: "app.js",
        publicPath: "./static/"
    },
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
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
                        loader: "awesome-typescript-loader"
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
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: "[name]-[local]--[hash:base64:5]", // Ou ce que vous avez déjà ici
                            importLoaders: 1
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: () => [
                                require("postcss-import")(),
                                require("postcss-cssnext")({
                                    features: {
                                        customProperties: {
                                            variables
                                        }
                                    }
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {name: "[name].[ext]"}
                    }
                ]
            }
        ]
    },
    devtool: "source-map"
};
