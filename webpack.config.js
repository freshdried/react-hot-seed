"use strict";

var webpack = require("webpack");

var palette_dir = process.env.PALETTE_DIR;
if (palette_dir) {
    console.log("Palette directory recognized at " + palette_dir);
} else {
    console.log("Error! Palette directory not found!");
}

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
        /*
         * We need to alias React because of how react-hot-loader
         * transforms modules to require react and react/lib/ReactMount
         */
        alias: {
            react: __dirname + "/node_modules/react"
        },
        fallback: palette_dir

    },

    module: { loaders: [
        { test: /\.scss$/, loaders: ["react-hot", "style", "css", "sass"]},
        { test: /\.css$/, loader: ["react-hot", "style", "css"]},
        { test: /\.md$/, loader:  ["react-hot", "html", "markdown"]},
        { test: /\.html$/, loader:  ["react-hot", "html"]},
        { test: /\.json$/, loader: ["react-hot", "json"]},
        { test: /\.jsx?$/, loaders: ["react-hot", "babel"], exclude: /node_modules/}
    ]},
};
