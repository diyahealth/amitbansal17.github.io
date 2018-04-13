"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssRewritePlugin = require("css-rewrite-webpack-plugin");

module.exports = {
    entry: "./index.js",
    output: {
        path: path.resolve("./dist"),
        filename: "js/app.js"
    },
    module: {
        rules: [{
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [{
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: "sass-loader"
                        },
                    ],
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
                        publicPath: "images",
                        outputPath: "images"
                    }
                }]
            },
            {
                test: /\.woff$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        publicPath: "fonts",
                        outputPath: "fonts"
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./css/styles.css"),
        new CssRewritePlugin({
            fileReg: new RegExp('./css/styles.css'),
            processor: (source) => source
                .replace("url(images/", "url(../images/")
                .replace("url(fonts/", "url(../fonts/")
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/index.pug",
            filename: "/index.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/contact-us.pug",
            filename: "/contact-us.html",
            inject: false
        }),
    ]
}
