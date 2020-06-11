"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssRewritePlugin = require("css-rewrite-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const data = require("./html/data");

function buildTemplateData(pageName, mode) {
    if (mode !== "production") {
        data.keys.google.analytics = null;
    };

    return {
        ...data,
        page: data.pages[pageName]
    };
}

module.exports = (env, argv) => ({
    entry: "./index.ts",
    output: {
        path: path.resolve("../dist"),
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
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", "js"]
    },
    plugins: [
        new CopyWebpackPlugin([{
                from: "favicon/*",
                flatten: true,
            },
            {
                from: "robots.txt",
            },
            {
                from: "./images/reviews",
                to: "./images/reviews",
            },
            {
                from: "./images/patients-and-families",
                to: "./images/patients-and-families",
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
            templateParameters: buildTemplateData("index", argv.mode),
            filename: "index.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/about-us.pug",
            templateParameters: buildTemplateData("aboutUs", argv.mode),
            filename: "about-us.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/contact-us.pug",
            templateParameters: buildTemplateData("contactUs", argv.mode),
            filename: "contact-us.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/how-to-help.pug",
            templateParameters: buildTemplateData("howToHelp", argv.mode),
            filename: "how-to-help.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/doctors.pug",
            templateParameters: buildTemplateData("doctors", argv.mode),
            filename: "doctors.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/patients-and-families.pug",
            templateParameters: buildTemplateData("patientsAndFamilies", argv.mode),
            filename: "patients-and-families.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/privacy-policy.pug",
            templateParameters: buildTemplateData("privacyPolicy", argv.mode),
            filename: "privacy-policy.html",
            inject: false
        }),
        new HtmlWebpackPlugin({
            template: "./html/pages/terms-and-conditions.pug",
            templateParameters: buildTemplateData("termsAndConditions", argv.mode),
            filename: "terms-and-conditions.html",
            inject: false
        }),
    ]
});
