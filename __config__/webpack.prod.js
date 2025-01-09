const { merge } = require("webpack-merge")
const tersePlugin = require("terser-webpack-plugin")
const cssMinimizerPlugin = require("css-minimizer-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")

const common = require("./webpack.common")

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimizer: [
            new tersePlugin(),
            new cssMinimizerPlugin()
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all", 
                }
            }
        },
        runtimeChunk: "single"
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    miniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader"
                ],
            },
        ],
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: "[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
    ],
})