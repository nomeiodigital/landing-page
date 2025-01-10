const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

const DIST_DIR = path.resolve(__dirname, "../", "dist")

module.exports = {
    entry: "./src/main.js",
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
            template: "./src/pages/index.html",
            inject: true,
            cache: false,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
    ]
}