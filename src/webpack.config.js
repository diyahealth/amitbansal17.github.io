"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssRewritePlugin = require("css-rewrite-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const pages = require("./scripts/page-cofigs");

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
        new CopyWebpackPlugin([
            {
                from: "favicon/*",
                ignore: [ "*.ico"],
            },
            {
                from: "favicon/favicon.ico",
            },
        ]),
        new ExtractTextPlugin("./css/styles.css"),
        new CssRewritePlugin({
            fileReg: new RegExp('./css/styles.css'),
            processor: (source) => source
                .replace(/url\(images\//g, "url(../images/")
                .replace(/url\(fonts\//g, "url(../fonts/")
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/index.pug",
            templateParameters: pages.index,
            filename: "/index.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/contact-us.pug",
            templateParameters: pages.contactUs,
            filename: "/contact-us.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/how-to-help.pug",
            templateParameters: pages.howToHelp,
            filename: "/how-to-help.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/our-projects.pug",
            templateParameters: pages.ourProjects,
            filename: "/our-projects.html",
            inject: false
        }),
    ]
}
