const buildHtmlCommand = (root, data) => ({
    template: './framework/templates/single-benefit-template.pug',
    templateParameters: data,
    filename: `${root}.html`,
    inject: false,
});

module.exports = {
    buildHtmlCommand,
}
