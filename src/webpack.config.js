"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const data = require("./html/data");
const redirects = require("./redirects.json");
const process = require('./framework');
const buildSiteMap = require('./framework/sitemap');

const processAfterDynamic = ['healthSystems', 'individuals'];


const blogMap = new Map(data.blog.filter(x => x.key != null).map(x => [x.key, x]));

const processStaticPage = (pageKey, argv) => {
    const page = data.pages[pageKey];

    return new HtmlWebpackPlugin({
        template: `./html/pages/${page.source}.pug`,
        templateParameters: buildTemplateData(pageKey, argv.mode),
        filename: `${page.destination}.html`,
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
        post: blogMap.get(pageKey),
    }
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
    overrideDevUrls(argv);

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

function overrideDevUrls(argv) {
    if (argv.mode === 'development') {
        Object.values(data.pages).forEach(page => page.url += page.name === 'Index' ? 'index.html' : '.html');
        data.blog
            .filter(post => post.key != null)
            .forEach(post => post.href = data.pages[post.key].url);
    }
}

module.exports = (env, argv) => ({
    entry: "./index.ts",
    output: {
        path: path.resolve("../dist"),
        filename: "js/app.js",
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader',
            ],
        },
        {
            test: /\.pug$/,
            use: "pug-loader",
        },
        {
            test: /\.(png|svg|jpg|gif|webp)$/,
            type: 'asset/resource',
            generator: { filename: 'images/[hash][ext]', publicPath: '' },
        },
        {
            test: /\.woff$/,
            type: 'asset/resource',
            generator: { filename: 'fonts/[hash][ext]', publicPath: '' },
        },
        {
            test: /\.ts$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"],
        alias: {
            '@images': path.join(__dirname, './images'),
        },
    },
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "favicon/*",
                    to: './[name][ext]',
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
                },
                {
                    from: "./self-service-example.html",
                    to: "./",
                },
                {
                    from: "./html/general-hospital",
                    to: "./general-hospital",
                },
                {
                    from: "./html/communityhealth",
                    to: "./communityhealth",
                }
            ]
        }),
        new MiniCssExtractPlugin({ filename: "./css/styles.css" }),
        ...buildWebpackPages(argv),
    ],
    optimization: {
        minimizer: [
            '...',
            new CssMinimizerPlugin({
                exclude: /general-hospital|communityhealth/
            }),
        ],
    },
});