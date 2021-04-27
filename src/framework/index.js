const { buildHtmlCommand } = require('./html');
const { buildImageCopyCommand, rewriteImagePath } = require('./images');
const { buildPageFromMetadata } = require('./pages');

const { readdirSync, readFileSync } = require("fs");
const path = require("path");
const data = require("../html/data");
const { rebuildNavigation } = require("../html/data/navigation");
const { rebuildDoctorsBenefits } = require("../html/data/doctorsBenefits");
const { rebuildPatientsBenefits } = require("../html/data/patientsBenefits");
const { rebuildEmployersBenefits } = require("../html/data/employersBenefits");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

function process(root, argv) {
    const pages = data.pages;
    const imageCopyParams = [];
    const htmlParams = [];

    readdirSync(root).forEach(x => {
        const pageRoot = path.join(root, x);
        const contentPath = path.join(pageRoot, 'content.json');
        const content = JSON.parse(readFileSync(contentPath));
        rewriteImagePath(content, x);

        const metaPath = path.join(pageRoot, 'meta.json');
        const meta = JSON.parse(readFileSync(metaPath));

        const dynamicPageMeta = buildPageFromMetadata(meta, pages, x);
        pages[dynamicPageMeta.key] = dynamicPageMeta.page;

        imageCopyParams.push(buildImageCopyCommand(pageRoot, x));
        htmlParams.push(buildHtmlCommand(x, { content, page: pages[dynamicPageMeta.key], ...data, mode: argv.mode }))
    });

    rebuildNavigation(argv.mode);
    rebuildDoctorsBenefits(argv.mode);
    rebuildEmployersBenefits(argv.mode);
    rebuildPatientsBenefits(argv.mode);
    return [
        ...htmlParams.map(x => new HtmlWebpackPlugin(x)),
        new CopyWebpackPlugin(imageCopyParams.filter(x => x != null)),
        //new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i, disable: argv.mode === 'development' }),
    ]
}

module.exports = process;
