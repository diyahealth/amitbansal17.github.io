"use strict";

const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssRewritePlugin = require("css-rewrite-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const data = require("./html/data");
const redirects = require("./redirects.json");
const process = require('./framework');
const buildSiteMap = require('./framework/sitemap');

const processAfterDynamic = ['healthSystems', 'individuals'];


const processStaticPage = (pageKey, argv) => {
    const pages = data.pages;
    const page = pages[pageKey];

    if (argv.mode === 'development') {
        if (page.id === 'index') {
            page.url = page.url + 'index.html';
        } else {
            page.url = page.url + '.html';
        }
    }


    return new HtmlWebpackPlugin({
        template: `./html/pages/${page.fileName}.pug`,
        templateParameters: buildTemplateData(pageKey, argv.mode),
        filename: `${page.path || page.fileName}.html`,
        inject: false
    });
};

function buildTemplateData(pageKey, mode) {
    if (mode !== "production") {
        data.keys.google.analytics = null;
    };

    return {
        ...data,
        page: data.pages[pageKey],
    };
}

function processRedirect(from, to, argv) {
    const redirect_to = argv.mode === 'development' ? to + '.html' : to;

    return new HtmlWebpackPlugin({
        template: `./html/shared/redirect.pug`,
        templateParameters: { redirect_to },
        filename: `${from}.html`,
        inject: false
    });
}

function buildWebpackPages(argv) {
    const siteMapOut = path.resolve("../dist");
    const dynamicRoot = path.join(__dirname, 'data');
    const blogRoot = path.join(__dirname, 'posts');
    buildSiteMap(dynamicRoot, blogRoot, siteMapOut);
    const pages = data.pages;

    const existing = Object.keys(pages).map(pageKey => {
        if (processAfterDynamic.includes(pageKey)) {
            return undefined;
        }
        return processStaticPage(pageKey, argv)
    }).filter(Boolean);

    const dynamic = process(dynamicRoot, argv);

    const restStaticPages = processAfterDynamic.map(pageKey => processStaticPage(pageKey, argv));

    const redirectPages = redirects.map(x => processRedirect(x.from, x.to, argv));

    return existing.concat(dynamic).concat(restStaticPages).concat(redirectPages);

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
            test: /\.(png|svg|jpg|gif|webp)$/,
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
            from: "./files",
            to: "./files"
        },
        {
            from: "./images/reviews",
            to: "./images/reviews",
        },
        {
            from: "./images/patients-and-families",
            to: "./images/patients-and-families",
        },
        {
            from: "./posts",
            to: "./posts",
        }
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