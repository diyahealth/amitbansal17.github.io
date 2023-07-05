const path = require("path");
const fs = require("fs");

const buildImageCopyCommand = (root, name) => {
    const source = path.join(root, 'images');
    if (!fs.existsSync(source)) {
        return null;
    }

    const res = ({
        from: source,
        to: `./images/${name}`,
    });

    return res;
};

const rewriteImagePath = (items, pageName) => items
    .filter(x => x.image != null)
    .forEach(x => x.image = `./images/${pageName}/${x.image}`);

module.exports = {
    buildImageCopyCommand,
    rewriteImagePath,
};
