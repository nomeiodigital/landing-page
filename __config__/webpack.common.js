const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

const DIST_DIR = path.resolve(__dirname, "../", "dist")

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "[name].[contenthash].js",
        path: DIST_DIR,
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
            title: "TITULO DA PÁGINA"
        }),
    ]
}