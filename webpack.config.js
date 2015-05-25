"use strict";

var webpack = require("webpack");
var objectAssign = require("object-assign");

var asset_dir = process.env.WEBPACK_ASSETS;
if (asset_dir) {
    console.log("Common asset directory set to " + asset_dir);
} else {
    console.log("No common asset directory...");
}

var is_production = process.env.NODE_ENV === "production";
console.log( is_production ? "Production Mode" : "Development Mode");

var config = {
    output: {
        path: __dirname + "/dist/",
        filename: "bundle.js",
        publicPath: "http://localhost:8080/"
    },
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
        fallback: asset_dir 
    },
    module: { loaders: [
        { test: /\.scss$/, loaders: ["style", "css", "sass"]},
        { test: /\.css$/, loaders: ["style", "css"]},
        { test: /\.md$/, loaders:  ["html", "remarkable"]},
        { test: /\.html$/, loaders:  ["html"]},
        { test: /\.json$/, loaders: ["json"]},
        { test: /\.jsx?$/, loaders: is_production ? ["babel"] : ["react-hot", "babel"] , exclude: /node_modules/},
        { test: /\.(png|jpg|jpeg|gif|svg)$/, loaders: ["url?limit=10000"]},
        { test: /\.(woff|woff2)$/, loaders: ["url?limit=100000"]},
        { test: /\.(ttf|eot)$/, loaders: ["file"]},
        { test: /\.(mp3|wav)$/, loaders: ["file"]}


    ]},
    remarkable: {
        breaks: true,
        html: true
    }
};

if (is_production) {
    objectAssign(config, {
        entry: "./app/app.jsx",
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            }),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.NoErrorsPlugin()
        ]
    });
} else {
    objectAssign(config, {
        devtools: "eval",
        entry: [
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            "./app/app.jsx"
        ],
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin()
        ]
    });
}
module.exports = config;
