const path = require("path");

const timestamp = Math.round(new Date().getTime() / 1000);

const buildImageCopyCommand = (root, name) => {
    const res =  ({
        from: path.join(root, 'images'),
        to: `./images/${name}-${timestamp}`,
    });
    return res;
};

const rewriteImagePath = (items, pageName) => items
    .filter(x => x.image != null)
    .forEach(x => x.image = `./images/${pageName}-${timestamp}/${x.image}`);

module.exports = {
    buildImageCopyCommand,
    rewriteImagePath,
};
