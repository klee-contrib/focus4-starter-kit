const {webpackConfigWithDefaults} = require("@focus4/tooling");

module.exports = webpackConfigWithDefaults(
    {
        cssModulesPath: "./src",
        entry: "./src",
        outputDir: "./static",
        rootDir: __dirname,
        styleLoader: "style-loader"
    },
    {
        devServer: {
            devMiddleware: {
                publicPath: "/static/"
            },
            static: __dirname,
            port: 3000
        }
    }
);
