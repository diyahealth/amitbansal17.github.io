const { buildHtmlCommand } = require('./html');
const { buildImageCopyCommand, rewriteImagePath } = require('./images');
const { readdirSync, readFileSync } = require("fs");
const path = require("path");
const data = require("../html/data");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

function process(root, argv) {
    const pages = data.pages;
    const imageCopyParams = [];
    const htmlParams = [];

    readdirSync(root).forEach(x => {
        const pageRoot = path.join(root, x);
        const contentPath = path.join(pageRoot, 'content.json');
        const content = JSON.parse(readFileSync(contentPath));
        rewriteImagePath(content, x);

        imageCopyParams.push(buildImageCopyCommand(pageRoot, x));
        htmlParams.push(buildHtmlCommand(x, { content, page: { title: x }, ...data }))
    });

    return [
        ...htmlParams.map(x => new HtmlWebpackPlugin(x)),
        new CopyWebpackPlugin(imageCopyParams),
        //new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i, disable: argv.mode === 'development' }),
    ]
}

module.exports = process;
