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

function buildWebpackPages(argv) {
    const pages = data.pages;
    return Object.keys(pages).map(pageKey => {
        const page = pages[pageKey];

        return new HtmlWebpackPlugin({
            template: `./html/pages/${page.fileName}.pug`,
            templateParameters: buildTemplateData(pageKey, argv.mode),
            filename: `${page.fileName}.html`,
            inject: false
        })
    });
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
        ...buildWebpackPages(argv),
    ]
});
