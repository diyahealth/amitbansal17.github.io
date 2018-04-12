"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "js/app.js"
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                            loader: 'css-loader',
                        },
                        'sass-loader'
                    ]
                }),
            },
            {
                test: /\.pug$/,
                use: "pug-loader",
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: "../images",
                        outputPath: "images"
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles/styles.css"),
        new HtmlWebpackPlugin({
            template: "./html/pages/index.pug",
            filename: "/pages/index.html",
            inject: false
        }),
    ]
}
