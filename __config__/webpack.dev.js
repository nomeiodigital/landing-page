const { merge } = require("webpack-merge")
const path = require("path")

const common = require("./webpack.common")

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "../dist"),
        }, compress: true,
        port: 1234,
        open: true,
        hot: true,
        historyApiFallback: true,
        watchFiles: ["src/**/*"],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                            sassOptions: {
                                quietDeps: true,
                            },
                        },
                    },
                ],
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
        ],
    },
}); 