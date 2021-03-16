const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const path = require("path");

const customProperties = require("./css-variables");

const postcss = {
    loader: "postcss-loader",
    options: {
        postcssOptions: {
            plugins: [
                "postcss-import",
                "postcss-apply",
                [
                    "postcss-custom-properties",
                    {
                        preserve: false,
                        importFrom: {customProperties}
                    }
                ],
                "postcss-calc",
                "postcss-color-function",
                [
                    "postcss-preset-env",
                    {
                        features: {
                            "nesting-rules": true
                        }
                    }
                ]
            ]
        }
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
    plugins: [new ForkTsCheckerWebpackPlugin()],
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
                include: [path.resolve(__dirname, "./node_modules")],
                use: ["style-loader", "css-loader", postcss]
            },
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname, "./node_modules")],
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
