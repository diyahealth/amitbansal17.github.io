const path = require("path");

const buildImageCopyCommand = (root, name) => ({
    from: path.join(root, 'images'),
    //to: `./images/${name}`,
});

const rewriteImagePath = (items, pageName) => items
    .filter(x => x.image != null)
    .forEach(x => x.image = `./images/${pageName}/${x.image}`);

module.exports = {
    buildImageCopyCommand,
    rewriteImagePath,
};
