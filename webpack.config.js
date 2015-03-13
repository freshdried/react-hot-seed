"use strict";

var webpack = require("webpack");

var MY_MODULES = "/home/slee2/webpack";

module.exports = {
    devtools: "eval",
    entry: [
        "webpack-dev-server/client?http://localhost:8080",
        "webpack/hot/only-dev-server",
        "./app/entry.js"
    ],
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js",
        publicPath: "http://localhost:8080/"

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ["", ".js", ".jsx"],
        root : __dirname,
        alias: {
            react: MY_MODULES + "/node_modules/react"
        },
        fallback: MY_MODULES

    },

    module: { loaders: [
        { test: /\.scss$/, loaders: ["react-hot", "style", "css", "sass"]},
        { test: /\.css$/, loader: ["react-hot", "style", "css"]},
        { test: /\.md$/, loader:  ["react-hot", "html", "markdown"]},
        { test: /\.json$/, loader: ["react-hot", "json"]},
        { test: /\.jsx?$/, loaders: ["react-hot", "babel"], exclude: /node_modules/}
    ]},
};
